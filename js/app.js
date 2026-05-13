/* ════════════════════════════════════════════════════════════════════
   FALA KIDS — Main Application (Hero + Skills sections)
   React components with dynamic tweaks, decorative SVGs, and product cards
   ════════════════════════════════════════════════════════════════════ */

const { useState } = React;

/* ────────── Palette & Copy Variants ────────── */
const PALETTES = [
  ["#5b3bff", "#ffb6d9"], // indigo / pink (default)
  ["#2a1380", "#ffd166"], // deep grape / sunny
  ["#0e7d6a", "#ffc7e8"], // forest teal / blossom
  ["#e85d75", "#fff1a8"], // tomato / cream
];

const COPY = {
  default: {
    script1: "Fala",
    script2: "Kids",
    superLabel: "kit",
    headline:
      "Descubra a técnica que ensina as crianças a ler até 5 vezes mais rápido, sem pressão!",
    lede: "Com apenas 10 minutos por dia. Ideal para crianças de 2 a 12 anos, no ritmo natural de cada uma. Mesmo que ainda não reconheça letras ou sons. Funciona também com crianças com TDAH, Autismo ou dificuldades de foco. Com o Kit Fala Kids, seu filho aprende a ler de forma divertida, simples e eficaz, direto de casa!",
    cta: "Quero meu pequeno lendo rápido!",
  },
  short: {
    script1: "Fala",
    script2: "Kids",
    superLabel: "kit",
    headline: "Seu filho lendo em semanas, não meses",
    lede: "Kit completo com 170+ atividades, volumes 1 e 2, fichas silábicas, pôster gigante e bônus. Método fonético comprovado por pedagogas.",
    cta: "Quero meu filho lendo",
  },
  professional: {
    script1: "Fala",
    script2: "Kids",
    superLabel: "pro",
    headline: "Alfabetize sua turma com o método que funciona",
    lede: "170+ atividades de grafismo fonético. Resultados comprovados em semanas. Funciona com crianças de 3 a 7 anos e para dificuldades de aprendizado.",
    cta: "Quero meu filho lendo",
  },
};

/* ────────── Decorative SVGs & Logo ────────── */
function FalaKidsLogo() {
  return (
    <img
      src="assets/images/fala-kids-new-logo-white.png"
      alt="Fala Kids Logo"
      style={{ maxWidth: "280px", height: "auto", display: "block" }}
    />
  );
}

function StarOutline({ size = 44, color = "#ffb6d9", stroke = 3, ...p }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} {...p}>
      <path
        d="M32 4 L40 24 L60 28 L44 42 L48 60 L32 51 L16 60 L20 42 L4 28 L24 24 Z"
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarSolid({ size = 36, color = "#fff", ...p }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} {...p}>
      <path
        d="M32 4 L40 24 L60 28 L44 42 L48 60 L32 51 L16 60 L20 42 L4 28 L24 24 Z"
        fill={color}
      />
    </svg>
  );
}

function Sparkle({ size = 32, color = "#7feaff" }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size}>
      <path
        d="M32 4 C 34 22 42 30 60 32 C 42 34 34 42 32 60 C 30 42 22 34 4 32 C 22 30 30 22 32 4 Z"
        fill={color}
      />
    </svg>
  );
}

function SquiggleArrow({ color = "#ff9a3c" }) {
  return (
    <svg viewBox="0 0 220 220" width="220" height="220" fill="none">
      <path
        d="M30 30 C 90 0, 200 20, 200 90 C 200 140, 130 160, 90 130"
        stroke={color}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M82 116 L 90 132 L 106 124"
        stroke={color}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ────────── Book Cover Components ────────── */
function CoverPhoto({ accent = "#ff7eb0" }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: `linear-gradient(160deg, ${accent} 0%, #c84a86 100%)`,
        position: "relative",
        padding: "18px 16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          color: "#fff",
          opacity: 0.95,
        }}
      >
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: 7,
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: accent,
            fontWeight: 900,
            fontSize: 13,
          }}
        >
          F
        </div>
        <div className="small" style={{ color: "#fff", opacity: 0.85 }}>
          FALA KIDS
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          inset: "35% 14% 18% 12%",
          background: "rgba(255,255,255,.12)",
          borderRadius: "50% 60% 40% 50% / 50%",
          filter: "blur(2px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "22%",
          top: "38%",
          width: "55%",
          height: "38%",
          background: "rgba(255,255,255,.18)",
          borderRadius: "50% 40% 60% 50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "34%",
          top: "48%",
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#1c0f3f",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "52%",
          top: "48%",
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#1c0f3f",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "40%",
          top: "58%",
          width: 20,
          height: 10,
          borderRadius: "0 0 14px 14px",
          border: "2.5px solid #1c0f3f",
          borderTop: 0,
        }}
      />
      <div style={{ position: "relative", zIndex: 2 }}>
        <div
          className="small"
          style={{
            color: "rgba(255,255,255,.85)",
            fontSize: 9,
            marginBottom: 6,
          }}
        >
          Caderno de atividades
        </div>
        <div
          className="label"
          style={{
            color: "#fff",
            fontSize: 24,
            lineHeight: 1,
            fontStyle: "italic",
            fontWeight: 900,
            letterSpacing: ".01em",
          }}
        >
          FALANDO
          <br />
          <span style={{ color: "#ffd166" }}>EM CASA</span>
        </div>
      </div>
    </div>
  );
}

function CoverDark() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(180deg,#1a1430,#0c0822)",
        position: "relative",
        padding: "22px 18px",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      <svg
        viewBox="0 0 200 280"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.16,
        }}
      >
        <g stroke="#a78bfa" strokeWidth="1" fill="none">
          <path d="M10 40 L60 40 L60 80 L120 80 L120 130" />
          <path d="M180 20 L180 60 L140 60 L140 110" />
          <path d="M30 200 L80 200 L80 250 L160 250" />
          <circle cx="60" cy="40" r="3" fill="#a78bfa" />
          <circle cx="120" cy="130" r="3" fill="#a78bfa" />
          <circle cx="80" cy="200" r="3" fill="#a78bfa" />
          <circle cx="180" cy="20" r="3" fill="#a78bfa" />
        </g>
      </svg>
      <div style={{ display: "flex", alignItems: "center", gap: 8, position: "relative" }}>
        <div
          style={{
            width: 18,
            height: 18,
            borderRadius: 6,
            background: "#a78bfa",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1a1430",
            fontWeight: 900,
            fontSize: 11,
          }}
        >
          F
        </div>
        <div className="small" style={{ color: "#cfc1ff" }}>
          FALA KIDS
        </div>
      </div>
      <div style={{ position: "absolute", left: 18, right: 18, bottom: 22 }}>
        <div
          className="small"
          style={{ color: "#ffd166", fontSize: 11, marginBottom: 8 }}
        >
          GUIA COMPLETO
        </div>
        <div
          className="label"
          style={{ fontSize: 15, lineHeight: 1.15, fontWeight: 900 }}
        >
          Como estimular a fala em segundos com inteligência aplicada.
        </div>
      </div>
    </div>
  );
}

function CoverFlashcards() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#f6f4ef",
        position: "relative",
        padding: "22px 18px",
        color: "#1c0f3f",
      }}
    >
      <div
        className="small"
        style={{ textAlign: "center", color: "#7e6cc9" }}
      >
        FALA KIDS · KIT
      </div>
      <div
        className="label"
        style={{ textAlign: "center", fontSize: 18, marginTop: 6, fontWeight: 900 }}
      >
        LETRA INTRUSA
      </div>
      <div
        style={{
          marginTop: 18,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 8,
          padding: 8,
          border: "2px dashed #1c0f3f",
          borderRadius: 8,
        }}
      >
        {["B", "O", "L", "A", "X", "S"].map((c, i) => (
          <div
            key={i}
            style={{
              aspectRatio: "1/1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: i === 4 ? "#ffd6e7" : "#fff",
              border: "1.5px solid #1c0f3f",
              borderRadius: 6,
              fontFamily: "'Nunito',sans-serif",
              fontWeight: 900,
              fontSize: 22,
              color: i === 4 ? "#c63d6a" : "#1c0f3f",
              textDecoration: i === 4 ? "line-through" : "none",
            }}
          >
            {c}
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          left: 18,
          right: 18,
          bottom: 14,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="small" style={{ color: "#7e6cc9", fontSize: 9 }}>
          5+ ANOS
        </div>
        <div className="small" style={{ color: "#7e6cc9", fontSize: 9 }}>
          v.01
        </div>
      </div>
    </div>
  );
}

function CoverWordbuild() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#e8e4f5",
        position: "relative",
        padding: "20px 16px",
        color: "#1c0f3f",
      }}
    >
      <div
        className="label"
        style={{ fontSize: 12, textAlign: "center", letterSpacing: ".14em" }}
      >
        FORMANDO PALAVRAS
      </div>
      <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
        {[
          ["🎈", "BO", "+", "LA"],
          ["🐝", "CA", "+", "SA"],
          ["⚽", "BO", "+", "LA"],
        ].map((row, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "24px 1fr 14px 1fr",
              gap: 6,
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                background: "#fff",
                border: "1.5px solid #1c0f3f",
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13,
              }}
            >
              {row[0]}
            </div>
            <div
              style={{
                background: "#fff",
                border: "1.5px solid #1c0f3f",
                borderRadius: 5,
                padding: "4px 0",
                textAlign: "center",
                fontWeight: 900,
                fontSize: 13,
              }}
            >
              {row[1]}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
              }}
            >
              +
            </div>
            <div
              style={{
                background: "#fff",
                border: "1.5px solid #1c0f3f",
                borderRadius: 5,
                padding: "4px 0",
                textAlign: "center",
                fontWeight: 900,
                fontSize: 13,
              }}
            >
              {row[2] && row[3]}
            </div>
          </div>
        ))}
      </div>
      <div
        className="small"
        style={{
          position: "absolute",
          bottom: 12,
          left: 0,
          right: 0,
          textAlign: "center",
          color: "#7e6cc9",
        }}
      >
        FALA KIDS
      </div>
    </div>
  );
}

function CoverIllustration() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#fff",
        position: "relative",
        padding: "16px 14px",
        color: "#1c0f3f",
        overflow: "hidden",
      }}
    >
      <div className="small" style={{ textAlign: "center", color: "#7e6cc9" }}>
        ATIVIDADES DE
      </div>
      <div
        className="label"
        style={{ textAlign: "center", fontSize: 16, marginTop: 4, fontWeight: 900, color: "#1c0f3f" }}
      >
        COMPREENSÃO
        <br />
        NA LEITURA
      </div>
      <div
        style={{
          margin: "10px auto 0",
          width: 130,
          height: 130,
          borderRadius: "50%",
          background: "radial-gradient(circle at 30% 30%, #ffd166, #ff9a3c 70%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "35%",
            top: "22%",
            width: 42,
            height: 42,
            borderRadius: "50%",
            background: "#f4c69b",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "22%",
            top: "58%",
            width: 68,
            height: 46,
            background: "#7c3aed",
            borderRadius: "30px 30px 8px 8px",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "30%",
            top: "70%",
            width: 50,
            height: 24,
            background: "#fff",
            borderRadius: 4,
            border: "2px solid #1c0f3f",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 8,
            left: 14,
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#ff7eb0",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 22,
            right: 18,
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "#7feaff",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 18,
            left: 18,
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "#ffd166",
          }}
        />
      </div>
      <div
        className="small"
        style={{
          position: "absolute",
          bottom: 10,
          left: 0,
          right: 0,
          textAlign: "center",
          color: "#7e6cc9",
        }}
      >
        FALA KIDS
      </div>
    </div>
  );
}

function CoverLinguagem() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#fff",
        position: "relative",
        padding: "18px 14px",
        color: "#1c0f3f",
      }}
    >
      <div className="small" style={{ color: "#7e6cc9" }}>
        FALA KIDS
      </div>
      <div
        className="label"
        style={{ fontSize: 18, marginTop: 8, fontWeight: 900, lineHeight: 1 }}
      >
        Atividades
        <br />
        de Linguagem
      </div>
      <div className="small" style={{ marginTop: 4, color: "#7e6cc9", fontSize: 9 }}>
        EDUCAÇÃO INFANTIL
      </div>
      <div
        style={{
          position: "absolute",
          left: -20,
          bottom: -30,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: "#5b3bff",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 14,
          left: 18,
          right: 14,
          color: "#fff",
        }}
      >
        <div
          style={{
            fontFamily: "'Caveat Brush', cursive",
            fontSize: 22,
            lineHeight: 1,
            color: "#ffd166",
          }}
        >
          Brincar
        </div>
        <div
          style={{
            fontFamily: "'Caveat Brush', cursive",
            fontSize: 22,
            lineHeight: 1,
            color: "#ffb6d9",
            marginTop: -2,
          }}
        >
          é falar!
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          right: 14,
          top: 80,
          width: 46,
          height: 34,
          background: "#ffd166",
          borderRadius: "14px 14px 14px 4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Caveat Brush',cursive",
          color: "#1c0f3f",
          fontSize: 18,
        }}
      >
        oi!
      </div>
    </div>
  );
}

/* ────────── Hero Section ────────── */
function Hero() {
  const palette = PALETTES[0];
  const bg = palette[0];
  const accent = palette[1];
  const c = COPY.default;

  const density = "regular";
  const decoCount = { minimal: 0, regular: 1, lots: 2 }[density] ?? 1;

  return (
    <div className="hero" style={{ "--bg": bg }}>
      <div className="hero-inner">
        {/* LEFT */}
        <div className="left">
          <div style={{ marginBottom: 24 }}>
            <FalaKidsLogo />
          </div>

          <h1 className="headline">{c.headline}</h1>
          <p className="lede">{c.lede}</p>

          <button
            className="cta"
            onClick={() => window.location.href = "https://pay.kiwify.com.br/qI0dhGA"}
          >
            {c.cta}
            <span className="arrow">→</span>
          </button>

          <div className="avatar-stack">
            <div>
              {["#ffd166", "#ff7eb0", "#7feaff", "#a5f3a3"].map((col, i) => (
                <div
                  key={i}
                  className="avatar"
                  style={{
                    background: col,
                  }}
                />
              ))}
            </div>
            <span>+ de 5.200 famílias já alfabetizaram seus filhos</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="stack-wrap">
          {/* Decorations: stars + squiggle */}
          <div className="deco" style={{ top: -10, left: 120, "--r": "-10deg" }}>
            <StarOutline size={90} color={accent} stroke={4} />
          </div>
          <div className="deco float" style={{ top: 50, left: 30, "--r": "6deg" }}>
            <StarSolid size={40} color="#fff" />
          </div>
          {decoCount >= 1 && (
            <div
              className="deco float"
              style={{
                top: 120,
                left: 80,
                "--r": "-4deg",
                animationDelay: "-1.2s",
              }}
            >
              <StarOutline size={52} color="#ffd166" stroke={3.2} />
            </div>
          )}
          <div className="deco squiggle" style={{ top: -20, right: -10 }}>
            <SquiggleArrow color="#ff9a3c" />
          </div>
          <div className="deco float" style={{ bottom: 30, right: -20, "--r": "4deg" }}>
            <Sparkle size={72} color="#7feaff" />
          </div>
          {decoCount >= 2 && (
            <>
              <div
                className="deco float"
                style={{
                  bottom: 120,
                  left: -10,
                  "--r": "-6deg",
                  animationDelay: "-2s",
                }}
              >
                <Sparkle size={48} color="#ffd166" />
              </div>
              <div
                className="deco float"
                style={{
                  top: 200,
                  right: 60,
                  "--r": "3deg",
                  animationDelay: "-3s",
                }}
              >
                <StarSolid size={32} color="#ffb6d9" />
              </div>
            </>
          )}

          {/* Product images — Fala Kids collection */}
          <img
            src="assets/images/hero_image.png"
            alt="Fala Kids Produtos"
            className="hero-products-image"
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.25))",
            }}
          />
        </div>
      </div>

    </div>
  );
}

/* ────────── Skills Section ────────── */
const FK_SKILLS = [
  "Traçado correto das letras (bastão e cursiva)",
  "Consciência fonológica",
  "Separação de sílabas",
  "Coordenação motora fina",
  "Leitura de palavras simples e complexas",
  "Fluência leitora e leitura guiada",
  "Formação e montagem de palavras",
  "Treino silábico diário em poucos minutos",
];

/* Mini cover components */
function MiniVol({ vol, title, color, sub }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: `linear-gradient(165deg, ${color}, ${shade(color, -18)})`,
        padding: "16px 14px",
        color: "#fff",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="small" style={{ color: "rgba(255,255,255,.85)", fontSize: 9 }}>
        FALA KIDS · {sub}
      </div>
      <div
        style={{
          position: "absolute",
          right: 12,
          top: 14,
          width: 30,
          height: 30,
          borderRadius: 8,
          background: "rgba(255,255,255,.92)",
          color: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 900,
          fontSize: 16,
          fontFamily: "'Nunito',sans-serif",
        }}
      >
        {vol}
      </div>
      <div>
        <div style={{ fontWeight: 900, fontSize: 22, lineHeight: 1, fontFamily: "'Nunito',sans-serif" }}>
          {title}
        </div>
        <div style={{ height: 4, width: 32, background: "#ffd166", borderRadius: 2, marginTop: 10 }} />
      </div>
    </div>
  );
}

function shade(hex, pct) {
  const f = parseInt(hex.slice(1), 16),
    t = pct < 0 ? 0 : 255,
    p = Math.abs(pct) / 100;
  const R = f >> 16,
    G = (f >> 8) & 0x00ff,
    B = f & 0x0000ff;
  const r = Math.round((t - R) * p) + R,
    g = Math.round((t - G) * p) + G,
    b = Math.round((t - B) * p) + B;
  return "#" + (0x1000000 + r * 0x10000 + g * 0x100 + b).toString(16).slice(1);
}

function MiniFichas() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#fff", padding: "14px 12px", color: "#1c0f3f" }}>
      <div className="small" style={{ textAlign: "center", color: "#7e6cc9", fontSize: 9 }}>
        JOGO DE FICHAS
      </div>
      <div style={{ textAlign: "center", fontWeight: 900, fontSize: 13, marginTop: 4 }}>
        SILÁBICAS
      </div>
      <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 4 }}>
        {["BO", "LA", "CA", "SA", "PA", "PI", "FA", "LA", "DO"].map((s, i) => (
          <div
            key={i}
            style={{
              aspectRatio: "1/1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: i % 3 === 0 ? "#ffe6a8" : "#e8e4f5",
              border: "1.5px solid #1c0f3f",
              borderRadius: 4,
              fontWeight: 900,
              fontSize: 11,
            }}
          >
            {s}
          </div>
        ))}
      </div>
      <div className="small" style={{ textAlign: "center", marginTop: 10, color: "#7e6cc9", fontSize: 8 }}>
        FALA KIDS
      </div>
    </div>
  );
}

function MiniPoster() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(180deg,#ffd166,#ff9a3c)",
        padding: "14px 12px",
        color: "#1c0f3f",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="small" style={{ fontSize: 9, opacity: 0.85 }}>
        FALA KIDS · BÔNUS
      </div>
      <div style={{ fontWeight: 900, fontSize: 16, marginTop: 8, lineHeight: 1 }}>
        PÔSTER
        <br />
        GIGANTE
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 8,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {["#ff7eb0", "#7feaff", "#a5f3a3", "#fff", "#7c3aed"].map((col, i) => (
          <div
            key={i}
            style={{
              width: 18,
              height: 30,
              background: col,
              borderRadius: "50% 50% 14px 14px",
              border: "1.5px solid #1c0f3f",
            }}
          />
        ))}
      </div>
      <div className="small" style={{ fontSize: 8, position: "absolute", bottom: 54, left: 12, opacity: 0.7 }}>
        5 PERSONAGENS
      </div>
    </div>
  );
}

function MiniTiras() {
  return (
    <div style={{ width: "100%", height: "100%", background: "#fff", padding: "14px 12px", color: "#1c0f3f" }}>
      <div className="small" style={{ color: "#7e6cc9", fontSize: 9 }}>
        FALA KIDS
      </div>
      <div style={{ fontWeight: 900, fontSize: 14, marginTop: 4, lineHeight: 1.1 }}>
        TIRAS DE
        <br />
        LEITURA
      </div>
      <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 6 }}>
        {[
          "O GATO PULOU.",
          "A BOLA É AZUL.",
          "PAPAI LÊ.",
          "VOVÓ AMA.",
          "O SOL BRILHA.",
        ].map((s, i) => (
          <div
            key={i}
            style={{
              background: i % 2 ? "#fdf2f8" : "#eef2ff",
              border: "1px solid #c7c2eb",
              borderRadius: 3,
              padding: "3px 6px",
              fontSize: 9,
              fontWeight: 700,
              fontFamily: "'Patrick Hand',cursive",
            }}
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniFluencia() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#ede4ff",
        padding: "14px 12px",
        color: "#1c0f3f",
        position: "relative",
      }}
    >
      <div className="small" style={{ color: "#5b3bff", fontSize: 9 }}>
        FALA KIDS
      </div>
      <div style={{ fontWeight: 900, fontSize: 15, marginTop: 4, lineHeight: 1, color: "#3a1f8c" }}>
        FLUÊNCIA
        <br />
        LEITORA
      </div>
      <div className="small" style={{ fontSize: 9, marginTop: 4, color: "#7e6cc9" }}>
        50 TEXTOS FATIADOS
      </div>
      <div style={{ marginTop: 12 }}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} style={{ display: "flex", gap: 4, marginBottom: 5 }}>
            <div style={{ width: `${30 + i * 8}%`, height: 6, background: "#5b3bff", borderRadius: 3 }} />
            <div style={{ width: `${15 + i * 4}%`, height: 6, background: "#ffd166", borderRadius: 3 }} />
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 10,
          right: 10,
          fontFamily: "'Caveat Brush',cursive",
          color: "#5b3bff",
          fontSize: 22,
          transform: "rotate(-8deg)",
        }}
      >
        lê!
      </div>
    </div>
  );
}

function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    { title: "Amostra 1", image: "assets/images/produto_amostra_1.png" },
    { title: "Amostra 2", image: "assets/images/produto_amostra_2.png" },
    { title: "Amostra 3", image: "assets/images/produto_amostra_3.png" },
    { title: "Amostra 4", image: "assets/images/produto_amostra_4.png" },
    { title: "Amostra 5", image: "assets/images/produto_amostra_5.png" },
  ];

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section className="skills">
      <div className="skills-inner" style={{
        maxWidth: 1440,
        margin: "0 auto",
        padding: "0 clamp(24px, 6vw, 96px)"
      }}>
        <div className="skills-grid" style={{
          display: "grid",
          gridTemplateColumns: "0.9fr 1.2fr",
          gap: 80,
          alignItems: "center",
          maxWidth: "100%"
        }}>
          <div style={{ maxWidth: 620 }}>
            <h2>Desenvolva todas as habilidades da alfabetização infantil</h2>
            <p className="kicker">Com o Kit Completo Fala Kids, seu filho vai trabalhar:</p>
            <ul className="skill-list">
              {FK_SKILLS.map((s, i) => (
                <li key={i}>
                  <span className="check">✓</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <div className="callout">
              Perfeito para pais e educadores de crianças de <strong>3 a 7 anos</strong> que buscam o método fonético comprovado — usado nos países com maior índice de alfabetização do mundo. <strong>20 minutos por dia</strong> é suficiente.
            </div>
          </div>

          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 28
          }}>
          {/* Card Grande - Flutuante */}
          <div
            style={{
              width: "clamp(280px, 100%, 480px)",
              aspectRatio: "4 / 5",
              borderRadius: 16,
              overflow: "hidden",
              background: `url('${products[currentIndex].image}') center/contain no-repeat transparent`,
              boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
              transition: "opacity 0.4s ease-in-out"
            }}
          />

          {/* Navegação Minimalista */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            justifyContent: "center"
          }}>
            <button
              onClick={prevProduct}
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                border: "none",
                background: "rgba(91, 59, 255, 0.08)",
                color: "#5b3bff",
                fontSize: 16,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                fontWeight: 600
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(91, 59, 255, 0.15)";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(91, 59, 255, 0.08)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              ‹
            </button>

            <button
              onClick={nextProduct}
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                border: "none",
                background: "rgba(91, 59, 255, 0.08)",
                color: "#5b3bff",
                fontSize: 16,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                fontWeight: 600
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(91, 59, 255, 0.15)";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(91, 59, 255, 0.08)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              ›
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────── Why It Works Section ────────── */
function WhyItWorks() {
  const reasons = [
    {
      emoji: "🗣️",
      title: "Sua criança aprende falando",
      desc: "Não memoriza letras. Aprende o som real de cada letra. Quando sabe os sons, forma palavras sozinha.",
    },
    {
      emoji: "📈",
      title: "Progressão garantida",
      desc: "Começa do básico (reconhecer letras) até ler textos completos. Cada dia ela fica mais perto de conseguir.",
    },
    {
      emoji: "✨",
      title: "Resultados que você vê",
      desc: "Não é teoria. São 170+ atividades práticas, pronto para imprimir e usar hoje mesmo em casa.",
    },
  ];

  return (
    <section style={{ background: "#f8f5ff", padding: "100px clamp(24px, 6vw, 96px)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <h2
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 900,
              color: "#5b3bff",
              fontSize: "clamp(32px, 3.4vw, 48px)",
              lineHeight: 1.05,
              margin: "0 0 16px",
              maxWidth: 700,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Por que o Grafismo Fonético Funciona?
          </h2>
          <p
            style={{
              color: "#7e6cc9",
              fontSize: 18,
              fontWeight: 600,
              margin: 0,
              maxWidth: 600,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            A ciência por trás do método que alfabetiza em semanas
          </p>
        </div>

        {/* Cards Grid */}
        <div className="why-it-works-grid">
          {reasons.map((reason, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                padding: "40px 32px",
                borderRadius: 16,
                boxShadow: "0 4px 12px rgba(91, 59, 255, 0.08)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 12px 28px rgba(91, 59, 255, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(91, 59, 255, 0.08)";
              }}
            >
              {/* Icon */}
              <div style={{ fontSize: 56, marginBottom: 20 }}>{reason.emoji}</div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 900,
                  color: "#1c0f3f",
                  fontSize: 20,
                  lineHeight: 1.2,
                  margin: "0 0 14px",
                }}
              >
                {reason.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "#666",
                  fontSize: 15,
                  lineHeight: 1.6,
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────── How to Apply Section ────────── */
function HowToApply() {
  const steps = [
    {
      num: "1",
      title: "Imprima",
      desc: "Baixe, imprima quantas vezes quiser. Organize com nosso guia de progresso.",
    },
    {
      num: "2",
      title: "Sente com seu filho",
      desc: "15-20 minutos por dia de atividade interativa, leve e sem pressão.",
    },
    {
      num: "3",
      title: "Acompanhe",
      desc: "Semana a semana veja seu filho reconhecer letras, formar sílabas e ler palavras.",
    },
  ];

  return (
    <section style={{ background: "#fff", padding: "100px clamp(24px, 6vw, 96px)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <h2
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 900,
              color: "#1c0f3f",
              fontSize: "clamp(32px, 3.4vw, 48px)",
              lineHeight: 1.05,
              margin: "0 0 16px",
              maxWidth: 700,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Simples de aplicar na rotina
          </h2>
          <p
            style={{
              color: "#7e6cc9",
              fontSize: 18,
              fontWeight: 600,
              margin: 0,
              maxWidth: 700,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Uma rotina educativa leve, prática e eficiente para pais e crianças.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="how-to-apply-grid">
          {/* Connecting line (desktop only) */}
          <div className="how-to-apply-line" />

          {steps.map((step, i) => (
            <div key={i} style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
              {/* Number Circle */}
              <div
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${
                    i === 0 ? "#5b3bff" : i === 1 ? "#ff7eb0" : "#ffd166"
                  }, ${i === 0 ? "#ffb6d9" : i === 1 ? "#ffc7e8" : "#fff1a8"})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                  marginLeft: "auto",
                  marginRight: "auto",
                  boxShadow: `0 12px 30px -10px ${
                    i === 0 ? "rgba(91, 59, 255, 0.3)" : i === 1 ? "rgba(255, 126, 176, 0.3)" : "rgba(255, 209, 102, 0.3)"
                  }`,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                  e.currentTarget.style.boxShadow = `0 16px 40px -8px ${
                    i === 0 ? "rgba(91, 59, 255, 0.4)" : i === 1 ? "rgba(255, 126, 176, 0.4)" : "rgba(255, 209, 102, 0.4)"
                  }`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = `0 12px 30px -10px ${
                    i === 0 ? "rgba(91, 59, 255, 0.3)" : i === 1 ? "rgba(255, 126, 176, 0.3)" : "rgba(255, 209, 102, 0.3)"
                  }`;
                }}
              >
                <span
                  style={{
                    fontSize: 56,
                    fontWeight: 900,
                    color: "#fff",
                    fontFamily: "'Nunito', sans-serif",
                  }}
                >
                  {step.num}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 900,
                  color: "#1c0f3f",
                  fontSize: 22,
                  margin: "0 0 12px",
                  lineHeight: 1.2,
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  color: "#666",
                  fontSize: 15,
                  lineHeight: 1.6,
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 80 }}>
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              background: "#5b3bff",
              color: "#fff",
              border: 0,
              borderRadius: 999,
              padding: "18px 40px",
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 800,
              fontSize: 14,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              cursor: "pointer",
              boxShadow: "0 14px 30px -10px rgba(91, 59, 255, 0.35)",
              transition: "all 0.18s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 22px 40px -8px rgba(91, 59, 255, 0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 14px 30px -10px rgba(91, 59, 255, 0.35)";
            }}
            onClick={() => window.location.href = "https://pay.kiwify.com.br/qI0dhGA"}
          >
            Quero meu filho lendo
            <span style={{ fontSize: 16 }}>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ────────── Testimonials Section ────────── */
function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const testimonials = [
    {
      id: 1,
      image: "assets/images/testimonial1.jpg",
      alt: "Depoimento",
      rating: 5,
      comment: "Meu filho começou a ler em poucas semanas! Simplesmente transformou a forma como ele aprende.",
    },
    {
      id: 2,
      image: "assets/images/testimonial2.jpg",
      alt: "Depoimento",
      rating: 5,
      comment: "Prático, objetivo e super eficaz. Recomendo para todo pai e mãe que quer alfabetizar com método comprovado.",
    },
    {
      id: 3,
      image: "assets/images/testimonial3.jpg",
      alt: "Depoimento",
      rating: 5,
      comment: "Usamos na escola com todos os alunos. Os resultados foram incríveis em pouco tempo. Muito bom!",
    },
    {
      id: 4,
      image: "assets/images/testimonial4.jpg",
      alt: "Depoimento",
      rating: 5,
      comment: "Adorei! O material é bem estruturado e fácil de usar em casa. Meu filho está lendo muito melhor agora.",
    },
    {
      id: 5,
      image: "assets/images/testimonial5.jpg",
      alt: "Depoimento",
      rating: 5,
      comment: "Excelente custo-benefício. Vale muito a pena investir no desenvolvimento da leitura do seu filho com este método!",
    },
  ];

  const goToPrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setFade(true);
    }, 150);
  };

  const goToNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setFade(true);
    }, 150);
  };

  return (
    <section style={{ background: "#f8f5ff", padding: "100px clamp(24px, 6vw, 96px)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 900,
              color: "#5b3bff",
              fontSize: "clamp(32px, 3.4vw, 48px)",
              lineHeight: 1.05,
              margin: "0 0 16px",
              maxWidth: 700,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Veja o que pais e educadores estão dizendo
          </h2>
          <p
            style={{
              color: "#7e6cc9",
              fontSize: 18,
              fontWeight: 600,
              margin: 0,
              maxWidth: 700,
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.5,
            }}
          >
            Histórias reais de mães, pais e educadores que já viram a transformação começar.
            Seu filho pode ser o próximo.
          </p>
        </div>

        {/* Carousel */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(12px, 4vw, 24px)",
            maxWidth: "clamp(320px, 90vw, 900px)",
            margin: "0 auto",
          }}
        >
          {/* Left Arrow */}
          <button
            onClick={goToPrev}
            style={{
              position: "relative",
              width: "clamp(40px, 10vw, 50px)",
              height: "clamp(40px, 10vw, 50px)",
              borderRadius: "50%",
              background: "#fff",
              border: "2px solid #5b3bff",
              color: "#5b3bff",
              fontSize: "clamp(18px, 5vw, 24px)",
              fontWeight: 900,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(91, 59, 255, 0.12)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#5b3bff";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform = "scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.color = "#5b3bff";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            ←
          </button>

          {/* Image Container */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "clamp(280px, 80vw, 500px)",
              minHeight: "clamp(350px, 60vw, 600px)",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(91, 59, 255, 0.2)",
              background: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
              flex: 1,
            }}
          >
            <img
              src={testimonials[current].image}
              alt={testimonials[current].alt}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
                maxWidth: "100%",
                maxHeight: "clamp(350px, 60vw, 600px)",
                opacity: fade ? 1 : 0,
                transition: "opacity 0.3s ease-in-out",
              }}
            />
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            style={{
              position: "relative",
              width: "clamp(40px, 10vw, 50px)",
              height: "clamp(40px, 10vw, 50px)",
              borderRadius: "50%",
              background: "#fff",
              border: "2px solid #5b3bff",
              color: "#5b3bff",
              fontSize: "clamp(18px, 5vw, 24px)",
              fontWeight: 900,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(91, 59, 255, 0.12)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#5b3bff";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.transform = "scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.color = "#5b3bff";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            →
          </button>

        </div>

        {/* Static Rating */}
        <div
          style={{
            textAlign: "center",
            marginTop: 50,
            marginBottom: 40,
          }}
        >
          <div style={{ marginBottom: 8 }}>
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                style={{
                  fontSize: 24,
                  color: i < 4 ? "#ffd166" : "#ffebcc",
                  marginRight: 6,
                }}
              >
                ★
              </span>
            ))}
          </div>
          <p
            style={{
              margin: 0,
              color: "#7e6cc9",
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            4.9 de 5 • 342 avaliações
          </p>
        </div>

        {/* Dots */}
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            marginTop: 40,
          }}
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setFade(false);
                setTimeout(() => {
                  setCurrent(i);
                  setFade(true);
                }, 150);
              }}
              style={{
                width: current === i ? 32 : 12,
                height: 12,
                borderRadius: 6,
                background: current === i ? "#5b3bff" : "#d4c6ff",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (current !== i) {
                  e.currentTarget.style.background = "#b8a8ff";
                }
              }}
              onMouseLeave={(e) => {
                if (current !== i) {
                  e.currentTarget.style.background = "#d4c6ff";
                }
              }}
            />
          ))}
        </div>

        {/* Counter */}
        <div
          style={{
            textAlign: "center",
            marginTop: 20,
            color: "#7e6cc9",
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          {current + 1} de {testimonials.length} avaliações
        </div>
      </div>
    </section>
  );
}

/* ────────── Product Card / Pricing Section ────────── */
function ProductCard() {
  const features = [
    "+170 Atividades com Grafismo Fonético",
    "Leitura fluida em 4-6 semanas",
    "Método Fonético comprovado",
    "Fala Kids - Volume 1 + Volume 2",
    "Bônus 1: Separe as Sílabas",
    "Bônus 2: Jogo Fichas Silábicas",
    "Bônus 3: Monte seu Pôster Gigante",
  ];

  const skillProductCards = [
    { angle: -90, dist: 180, title: "Volume 1", color: "#5b3bff" },
    { angle: -45, dist: 180, title: "Fichas", color: "#ffd166" },
    { angle: 0, dist: 180, title: "Volume 2", color: "#ff7eb0" },
    { angle: 45, dist: 180, title: "Pôster", color: "#ff9a3c" },
    { angle: 90, dist: 180, title: "Bonus", color: "#7feaff" },
  ];

  return (
    <section style={{ background: "#FFE83A", padding: "100px clamp(24px, 6vw, 96px)" }}>
      <style>{`
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 12px 30px rgba(91, 59, 255, 0.3);
          }
          50% {
            box-shadow: 0 12px 40px rgba(91, 59, 255, 0.6), 0 0 20px rgba(91, 59, 255, 0.4);
          }
        }
        .pulse-button {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 60, alignItems: "start" }} className="product-grid">
          {/* LEFT — Features Card */}
          <div
            style={{
              background: "#fff",
              border: "2px solid #ffe6cc",
              borderRadius: 20,
              padding: "clamp(24px, 6vw, 40px) clamp(20px, 5vw, 32px)",
              boxShadow: "0 8px 24px rgba(255, 154, 60, 0.12)",
              transition: "all 0.3s ease",
              margin: "0 auto",
              maxWidth: 650,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 16px 40px rgba(255, 154, 60, 0.16)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(255, 154, 60, 0.12)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <h2
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(28px, 3vw, 40px)",
                lineHeight: 1.05,
                margin: "0 0 8px",
                color: "#1c0f3f",
              }}
            >
              Kit Completo Fala Kids
            </h2>
            <div
              style={{
                fontSize: "clamp(14px, 2vw, 16px)",
                fontWeight: 700,
                color: "#7c3aed",
                marginBottom: 16,
                backgroundColor: "#f3ebff",
                padding: "8px 12px",
                borderRadius: 8,
                display: "inline-block",
              }}
            >
              ✨ + 3 Bônus Exclusivos
            </div>

            <p
              style={{
                fontSize: 15,
                color: "#7e6cc9",
                fontWeight: 500,
                margin: "0 0 28px",
                lineHeight: 1.5,
              }}
            >
              Tudo que você precisa para alfabetizar sua criança em semanas usando o método fonético comprovado.
            </p>

            {/* Features */}
            <div style={{ marginBottom: 28 }}>
              {features.map((feature, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 12,
                    marginBottom: 12,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "#7c3aed",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 900,
                      fontSize: 13,
                      marginTop: 2,
                    }}
                  >
                    ✓
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 14,
                      fontWeight: 500,
                      lineHeight: 1.4,
                      color: "#1c0f3f",
                    }}
                  >
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* Promotion Tag */}
            <div
              className="product-pricing-box"
              style={{
                background: "linear-gradient(135deg, rgba(255, 68, 68, 0.1), rgba(255, 107, 107, 0.1))",
                border: "2px solid #FF4444",
                color: "#1c0f3f",
                padding: "14px 20px",
                borderRadius: 10,
                textAlign: "center",
                marginBottom: 20,
                fontWeight: 900,
                fontSize: "clamp(14px, 2.5vw, 17px)",
                letterSpacing: "0.05em",
              }}
            >
              <div style={{ fontSize: "clamp(11px, 1.8vw, 13px)", opacity: 0.7, marginBottom: 4 }}>
                DE R$ 199 <del style={{ opacity: 0.5 }}>— Economize 87%</del>
              </div>
              <div style={{ color: "#FF4444", fontSize: "clamp(16px, 3vw, 20px)" }}>
                POR APENAS R$ 24,99
              </div>
            </div>

            {/* CTA Button */}
            <button
              className="pulse-button product-cta-button"
              style={{
                width: "100%",
                background: "#5b3bff",
                color: "#fff",
                border: 0,
                borderRadius: 12,
                padding: "20px 32px",
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(14px, 2.5vw, 18px)",
                cursor: "pointer",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                boxShadow: "0 12px 30px rgba(91, 59, 255, 0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(91, 59, 255, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(91, 59, 255, 0.3)";
              }}
              onClick={() => window.location.href = "https://pay.kiwify.com.br/qI0dhGA"}
            >
              Comprar agora - R$ 24,99
            </button>

            <div
              style={{
                marginTop: 20,
                paddingTop: 20,
                borderTop: "1px solid #ffe6cc",
                textAlign: "center",
                color: "#cc6600",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              ✨ Garantia 7 dias | Acesso imediato
            </div>

            {/* Deck-style product cards — Larger with bonus images */}
            <div
              className="bonus-deck"
              style={{
                marginTop: 40,
                position: "relative",
                height: 420,
                width: "100%",
                maxWidth: 590,
                marginLeft: "auto",
                marginRight: "auto",
                overflow: "hidden",
              }}
            >
              <img
                src="assets/images/bonus_1.png"
                alt="Monte a Palavra"
                className="bonus-card bonus-card--1"
                style={{
                  width: 220,
                  height: 320,
                  position: "absolute",
                  left: 0,
                  top: 60,
                  transform: "rotate(-15deg)",
                  objectFit: "cover",
                  borderRadius: 12,
                  zIndex: 1,
                  filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.25))",
                }}
              />

              <img
                src="assets/images/bonus_2.png"
                alt="Jogo Fichas"
                className="bonus-card bonus-card--2"
                style={{
                  width: 260,
                  height: 380,
                  position: "absolute",
                  left: 140,
                  top: 0,
                  transform: "rotate(0deg)",
                  objectFit: "cover",
                  borderRadius: 12,
                  zIndex: 3,
                  filter: "drop-shadow(0 24px 48px rgba(0, 0, 0, 0.3))",
                }}
              />

              <img
                src="assets/images/bonus_3.png"
                alt="Colorir e Textura"
                className="bonus-card bonus-card--3"
                style={{
                  width: 220,
                  height: 320,
                  position: "absolute",
                  left: 370,
                  top: 60,
                  transform: "rotate(15deg)",
                  objectFit: "cover",
                  borderRadius: 12,
                  zIndex: 1,
                  filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.25))",
                }}
              />
            </div>

            {/* Disclaimer - Bonus Included */}
            <div
              style={{
                marginTop: 40,
                padding: "24px 20px",
                background: "linear-gradient(135deg, rgba(123, 58, 237, 0.08), rgba(91, 59, 255, 0.12))",
                border: "3px solid #7c3aed",
                borderRadius: 16,
                textAlign: "center",
                color: "#1c0f3f",
              }}
            >
              <p style={{ margin: "0 0 12px", fontSize: "clamp(18px, 3vw, 24px)", fontWeight: 900, color: "#7c3aed" }}>
                ✨ VOCÊ VAI RECEBER 3 BÔNUS EXCLUSIVOS! ✨
              </p>
              <p style={{ margin: 0, fontSize: "clamp(14px, 2.2vw, 16px)", fontWeight: 600, lineHeight: 1.6, color: "#5b3bff" }}>
                Monte a Palavra • Jogo de Fichas Silábicas • Colorir e Texturas
              </p>
              <p style={{ margin: "12px 0 0", fontSize: "clamp(13px, 1.8vw, 14px)", fontWeight: 500, color: "#7e6cc9", fontStyle: "italic" }}>
                Tudo junto na compra hoje!
              </p>
            </div>
          </div>

        </div>

        {/* Mobile Adjustments */}
        <style>{`
          @media (max-width: 1024px) {
            .product-grid {
              grid-template-columns: 1fr !important;
              gap: 60px !important;
            }
          }
          @media (max-width: 768px) {
            .product-grid {
              gap: 40px !important;
            }
          }
          @media (max-width: 480px) {
            .product-grid {
              gap: 30px !important;
            }
          }
          @media (max-width: 380px) {
            .product-grid {
              gap: 24px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

/* ────────── FAQ Section ────────── */
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Quais são as Formas de Pagamento?",
      answer: "Você pode pagar com qualquer cartão, boleto ou PIX.",
    },
    {
      question: "Como acesso a plataforma?",
      answer: "O acesso à Área de Membros é enviado para seu e-mail imediatamente após a confirmação do pagamento. Lá você poderá baixar todo o conteúdo em PDF!",
    },
    {
      question: "Tenho que pagar todo mês?",
      answer: "Não, o pagamento é apenas uma vez e você poderá ter acesso a ele vitalício.",
    },
    {
      question: "Posso tirar dúvidas?",
      answer: "Sim! Basta chamar nossa equipe de suporte pelo botão de WhatsApp dessa página, pelo nosso Instagram, pelo Facebook ou por email.",
    },
    {
      question: "Para quem é indicado o material?",
      answer: "Nossas atividades de grafismo fonético são projetadas para crianças de diferentes faixas etárias, abrangendo desde a primeira infância até o ensino fundamental.",
    },
    {
      question: "Quais são os benefícios Grafismos Fonéticos?",
      answer: "Os grafismos fonéticos facilitam a associação entre som e letra, desenvolvem a consciência fonológica e fortalecem a memória visual e auditiva. Eles também aprimoram a coordenação motora e tornam a leitura mais interessante, ajudando a prevenir dificuldades de leitura e incentivando o aprendizado ativo.",
    },
  ];

  return (
    <section style={{ background: "#f8f5ff", padding: "100px clamp(24px, 6vw, 96px)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 900,
              color: "#1c0f3f",
              fontSize: "clamp(32px, 3.4vw, 48px)",
              lineHeight: 1.05,
              margin: "0 0 16px",
            }}
          >
            Perguntas Frequentes
          </h2>
          <p
            style={{
              color: "#7e6cc9",
              fontSize: 16,
              fontWeight: 500,
              margin: 0,
              maxWidth: 600,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Tire suas dúvidas sobre o Kit Completo Fala Kids
          </p>
        </div>

        {/* FAQ Items */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
          className="faq-container"
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                border: "2px solid #f0ebff",
                borderRadius: 12,
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  padding: "clamp(16px, 4vw, 20px) clamp(16px, 4vw, 24px)",
                  background: "#fff",
                  border: "none",
                  textAlign: "left",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 16,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#fafbff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#fff";
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(14px, 3vw, 16px)",
                    color: "#1c0f3f",
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {faq.question}
                </h3>
                <span
                  style={{
                    fontSize: 24,
                    color: "#5b3bff",
                    fontWeight: 900,
                    marginLeft: 16,
                    flexShrink: 0,
                    transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  ↓
                </span>
              </button>

              {openIndex === i && (
                <div
                  style={{
                    padding: "clamp(12px, 3vw, 20px) clamp(16px, 4vw, 24px)",
                    borderTop: "1px solid #f0ebff",
                    color: "#666",
                    fontSize: "clamp(13px, 2.5vw, 15px)",
                    lineHeight: 1.6,
                    fontWeight: 500,
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* FAQ Mobile Adjustments */}
        <style>{`
          @media (max-width: 640px) {
            .faq-container {
              gap: 12px !important;
            }
          }
          @media (max-width: 480px) {
            .faq-container {
              gap: 10px !important;
            }
          }
        `}</style>

      </div>
    </section>
  );
}

/* ────────── Footer Section ────────── */
function Footer() {
  return (
    <footer style={{ background: "#5b3bff", color: "#fff", padding: "24px clamp(24px, 6vw, 96px)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: 14, color: "rgba(255,255,255,0.85)" }}>
          © 2026 Fala Kids. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

/* ────────── Pain Validation Section ────────── */
function PainValidation() {
  const painPoints = [
    { emoji: "😢", text: "Tarefas de leitura viram sofrimento" },
    { emoji: "📉", text: "Notas baixas na escola" },
    { emoji: "😔", text: "Criança se sente 'menos inteligente'" },
    { emoji: "❌", text: "Acredita que 'não é capaz'" },
  ];

  return (
    <section style={{ background: "#fff", padding: "100px clamp(24px, 6vw, 96px)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        {/* Section Title */}
        <h2
          style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 900,
            color: "#1c0f3f",
            fontSize: "clamp(42px, 5vw, 64px)",
            lineHeight: 1.05,
            margin: "0 0 60px",
            maxWidth: 900,
          }}
        >
          Você reconhece isso?
        </h2>

        {/* Pain Points with Emojis */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32, marginBottom: 60, maxWidth: 900 }}>
          {painPoints.map((point, i) => (
            <div key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
              <div style={{ fontSize: "clamp(40px, 5vw, 56px)", lineHeight: 1 }}>
                {point.emoji}
              </div>
              <h3
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "#1c0f3f",
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                {point.text}
              </h3>
            </div>
          ))}
        </div>

        {/* Validation Text */}
        <div style={{ maxWidth: 900 }}>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: 18,
              lineHeight: 1.65,
              color: "#1c0f3f",
              margin: "0 0 24px",
              fontWeight: 500,
            }}
          >
            Muitos pais vivem essa realidade todos os dias. Mas você não está sozinho nesse desafio.
          </p>

          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: 16,
              lineHeight: 1.65,
              color: "rgba(28, 15, 63, 0.75)",
              margin: "0 0 28px",
              fontWeight: 500,
            }}
          >
            O problema não é culpa sua. Ninguém te ensinou que <strong>a falta de estímulo fonético na fase certa</strong> é o que realmente atrasa a leitura.
          </p>

          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 700,
              color: "#5b3bff",
              margin: 0,
              lineHeight: 1.4,
            }}
          >
            Mas isso pode mudar. E rápido.
          </p>
        </div>

        {/* Mobile Adjustments */}
        <style>{`
          @media (max-width: 980px) {
            .pain-validation-grid {
              grid-template-columns: 1fr !important;
              gap: 60px !important;
            }
          }
          @media (max-width: 640px) {
            .pain-validation-grid {
              gap: 40px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}


function Page() {
  React.useEffect(() => {
    // Meta Pixel Code
    // Initialize fbq queue before loading script
    window.fbq = window.fbq || function() { (window.fbq.q = window.fbq.q || []).push(arguments) };

    // Load fbevents.js script first
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';

    // Call fbq methods after script loads
    script.onload = () => {
      window.fbq('init', '1344729974214857');
      window.fbq('track', 'PageView');
    };

    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Hero />
      <PainValidation />
      <Skills />
      <WhyItWorks />
      <HowToApply />
      <Testimonials />
      <ProductCard />
      <FAQ />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Page />);
