/* ════════════════════════════════════════════════════════════════════
   TWEAKS PANEL — Runtime customization for design iterations
   Allows toggling: palette, copy variant, decoration density, nav visibility
   ════════════════════════════════════════════════════════════════════ */

const { useState } = React;

let tweakState = {};
let tweakListeners = [];

const useTweaks = (defaults) => {
  const [state, setState] = useState(defaults);

  const setTweak = (key, value) => {
    const newState = { ...state, [key]: value };
    setState(newState);
    tweakState = newState;
    tweakListeners.forEach((cb) => cb(newState));
  };

  return [state, setTweak];
};

/* Panel Components */
function TweaksPanel({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 9999,
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      {isOpen && (
        <div
          style={{
            background: "#fff",
            border: "2px solid #5b3bff",
            borderRadius: 12,
            padding: 20,
            boxShadow: "0 20px 60px rgba(0,0,0,.3)",
            width: 280,
            maxHeight: "70vh",
            overflowY: "auto",
            marginBottom: 12,
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 900, color: "#1c0f3f" }}>
            DESIGN TWEAKS
          </div>
          <div style={{ marginTop: 16 }}>{children}</div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: 48,
          height: 48,
          borderRadius: "50%",
          background: "#5b3bff",
          color: "#fff",
          border: 0,
          cursor: "pointer",
          fontSize: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 20px rgba(0,0,0,.25)",
          transition: "all .18s ease",
          fontWeight: 900,
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.1)";
          e.target.style.boxShadow = "0 12px 28px rgba(0,0,0,.35)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 8px 20px rgba(0,0,0,.25)";
        }}
      >
        🎨
      </button>
    </div>
  );
}

function TweakSection({ label }) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 900,
        color: "#5b3bff",
        textTransform: "uppercase",
        letterSpacing: ".14em",
        margin: "16px 0 8px",
      }}
    >
      {label}
    </div>
  );
}

function TweakColor({ label, value, options, onChange }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div
        style={{
          fontSize: 12,
          fontWeight: 700,
          color: "#1c0f3f",
          marginBottom: 8,
        }}
      >
        {label}
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => onChange(opt)}
            style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              border:
                JSON.stringify(value) === JSON.stringify(opt)
                  ? "3px solid #1c0f3f"
                  : "2px solid #e0e0e0",
              background: `linear-gradient(135deg, ${opt[0]} 0%, ${opt[1]} 100%)`,
              cursor: "pointer",
              transition: "all .12s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          />
        ))}
      </div>
    </div>
  );
}

function TweakRadio({ label, value, options, onChange }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div
        style={{
          fontSize: 12,
          fontWeight: 700,
          color: "#1c0f3f",
          marginBottom: 8,
        }}
      >
        {label}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {options.map((opt) => (
          <label
            key={opt}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 600,
              color: "#1c0f3f",
            }}
          >
            <input
              type="radio"
              name={label}
              checked={value === opt}
              onChange={() => onChange(opt)}
              style={{ cursor: "pointer" }}
            />
            <span style={{ textTransform: "capitalize" }}>{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

function TweakToggle({ label, value, onChange }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <label
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          cursor: "pointer",
          fontSize: 13,
          fontWeight: 600,
          color: "#1c0f3f",
        }}
      >
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
          style={{ cursor: "pointer" }}
        />
        <span>{label}</span>
      </label>
    </div>
  );
}
