const imgHero          = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c94bd367-ca75-4f16-a947-1b2203caa8d1";
const imgGoogle        = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cbf9f25a-2392-40c0-b133-979bc51e99f7";
const imgEmail         = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/072c1fb7-3b55-4e6b-b5aa-c58931a03dbd";
const imgWhatsApp      = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb1a75dd-7296-4446-a629-5def07d22488";
const imgCheckboxOn    = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5afa733c-bf36-4a6d-bcc8-04d00416ed2f";
const imgCheckboxOff   = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5400270f-7521-45e2-bd6f-e39d4a44489e";

const imgAndroidBluetooth      = "https://www.figma.com/api/mcp/asset/57dc6fb8-c18e-4479-a70c-a718b54867ae";
const imgAndroidWiFi           = "https://www.figma.com/api/mcp/asset/f0c53ec5-6271-459f-af4d-ade0406cfbb3";
const imgAndroidCellularSignal = "https://www.figma.com/api/mcp/asset/3cf9b379-2ea2-427e-b79f-c72e5acef4e1";
const imgAndroidBattery        = "https://www.figma.com/api/mcp/asset/c016af1f-8e84-45fe-ab6c-982df4df8d23";

function StatusBar() {
  return (
    <div style={{ height: 24, flexShrink: 0, position: "relative", width: "100%" }}>
      <div style={{ position: "absolute", left: 16, top: 5, display: "flex", fontFamily: "'Roboto', sans-serif", fontWeight: 400, fontSize: 12, color: "white" }}>
        <span>09:30</span><span style={{ marginLeft: 4 }}>PM</span>
      </div>
      <div style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", display: "flex", gap: 8, alignItems: "center" }}>
        <img alt="" style={{ width: 14, height: 14 }} src={imgAndroidBluetooth} />
        <img alt="" style={{ width: 15, height: 14 }} src={imgAndroidWiFi} />
        <div style={{ position: "relative", width: 18, height: 16 }}>
          <span style={{ position: "absolute", top: 0, left: 0, fontFamily: "'Roboto', sans-serif", fontSize: 6, color: "white" }}>5G</span>
          <img alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} src={imgAndroidCellularSignal} />
        </div>
        <img alt="" style={{ width: 18.5, height: 11 }} src={imgAndroidBattery} />
      </div>
    </div>
  );
}

const BUTTONS = [
  { icon: imgGoogle,   label: "Google"   },
  { icon: imgEmail,    label: "Email"    },
  { icon: imgWhatsApp, label: "WhatsApp" },
];

// Figma frame: 360×800, bg #161616
// Hero image 360×582 from y=0
// Status bar overlaid at y=0
// Content block at y=517 (overlaps last 65px of hero, continues on dark bg)
// No tab bar on this screen
export default function SignUp() {
  return (
    <div style={{
      position: "relative",
      width: "100%",
      height: "100%",
      backgroundColor: "#161616",
      overflow: "hidden",
    }}>
      {/* Hero: 360×582 */}
      <img
        alt=""
        src={imgHero}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 582,
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* Status bar overlaid at top */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 10 }}>
        <StatusBar />
      </div>

      {/* Content block: y=517, px=16 */}
      <div style={{
        position: "absolute",
        top: 517,
        left: 16,
        right: 16,
        zIndex: 5,
      }}>
        {/* "Войди или зарегистрируйся, чтобы продолжить" — Russo One 14px, h=32 */}
        <p style={{
          fontFamily: "'Russo One', sans-serif",
          fontSize: 14,
          lineHeight: "16px",
          fontWeight: 400,
          color: "#ffffff",
          textAlign: "center",
          margin: 0,
        }}>
          Войди или зарегистрируйся, чтобы продолжить
        </p>

        {/* gap: 24px (label bottom y=549 → buttons y=573) */}
        <div style={{ height: 24 }} />

        {/* Icon buttons row: 3 × 52×52 buttons, gap=32 */}
        <div style={{ display: "flex", justifyContent: "center", gap: 32 }}>
          {BUTTONS.map(({ icon, label }) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <button
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 20,
                  border: "none",
                  cursor: "pointer",
                  background: "linear-gradient(0deg, rgba(255,255,255,1) 12%, rgba(255,255,255,0.72) 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 0,
                  flexShrink: 0,
                }}
                onPointerDown={(e) => (e.currentTarget.style.opacity = "0.85")}
                onPointerUp={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <img alt={label} src={icon} style={{ width: 28, height: 28, display: "block" }} />
              </button>
              <span style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: 12,
                lineHeight: "14px",
                color: "#ffffff",
                textAlign: "center",
              }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* gap: 24px (buttons bottom y=643 → checkbox y=667) */}
        <div style={{ height: 24 }} />

        {/* Checkbox 1 — checked (green gradient) */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
          <img
            alt=""
            src={imgCheckboxOn}
            style={{ width: 24, height: 24, flexShrink: 0, marginTop: 1 }}
          />
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14px",
            color: "#ffffff",
            margin: 0,
          }}>
            Я соглашаюсь с пользовательским соглашением, условиями использования и Политикой конфиденциальности
          </p>
        </div>

        {/* gap: 10px (checkbox 1 bottom y=710 → checkbox 2 y=720) */}
        <div style={{ height: 10 }} />

        {/* Checkbox 2 — unchecked */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
          <img
            alt=""
            src={imgCheckboxOff}
            style={{ width: 24, height: 24, flexShrink: 0, marginTop: 1 }}
          />
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 500,
            fontSize: 12,
            lineHeight: "14px",
            color: "#ffffff",
            margin: 0,
          }}>
            Принимаю согласие на получение рекламных рассылок
          </p>
        </div>
      </div>
    </div>
  );
}
