import AlienTabBar from "../shared/AlienTabBar";

// Carousel image: rainbow lips with Doppy coin
const imgCarousel    = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2a9d584-25c4-465f-bfa3-d5e3a58e1ca1";
// "in DOPPY [D]" line with coin icon
const imgDoppyLine   = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e4fe6ff1-a4d6-45ba-b96f-c2a6d1361557";
// SIGN UP button (gradient pill)
const imgButtons     = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97a306d4-8c95-443e-92e2-b99317e3ac1e";

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

export default function FirstReward({ onNavigate }: { onNavigate?: (screen: string) => void }) {
  return (
    <div style={{
      position: "relative",
      width: "100%",
      height: "100%",
      backgroundColor: "#161616",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    }}>
      <StatusBar />

      {/* Carousel: rainbow lips + coin, 360×260 */}
      <div style={{ width: "100%", height: 260, flexShrink: 0, overflow: "hidden" }}>
        <img
          alt="Reward"
          src={imgCarousel}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      {/* Reward block: y=341 in Figma → after statusbar(24)+carousel(260)=284, gap ~57px */}
      <div style={{
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
        display: "flex",
        flexDirection: "column",
        gap: 0,
        flexShrink: 0,
      }}>
        {/* "Sign up and get up to" */}
        <p style={{
          fontFamily: "'Russo One', sans-serif",
          fontSize: 20,
          lineHeight: "24px",
          color: "#ffffff",
          textAlign: "center",
          margin: 0,
          marginBottom: 8,
          fontWeight: 400,
        }}>
          Sign up and get&nbsp;up to
        </p>

        {/* "≈$3.294" */}
        <p style={{
          fontFamily: "'Russo One', sans-serif",
          fontSize: 36,
          lineHeight: "40px",
          color: "#ffffff",
          textAlign: "center",
          margin: 0,
          marginBottom: 8,
          fontWeight: 400,
        }}>
          ≈$3.294
        </p>

        {/* "in DOPPY [D coin]" */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            alt="in DOPPY"
            src={imgDoppyLine}
            style={{ height: 24, width: "auto" }}
          />
        </div>
      </div>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Bottom description */}
      <div style={{
        paddingLeft: 16,
        paddingRight: 16,
        flexShrink: 0,
        marginBottom: 16,
      }}>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 500,
          fontSize: 16,
          lineHeight: "24px",
          color: "#ffffff",
          textAlign: "center",
          margin: 0,
          marginBottom: 4,
        }}>
          Watch the feed, get DOPPY, withdraw to card
        </p>
        <p style={{
          fontFamily: "'Russo One', sans-serif",
          fontSize: 20,
          lineHeight: "24px",
          color: "#ffffff",
          textAlign: "center",
          margin: 0,
          marginBottom: 20,
          fontWeight: 400,
        }}>
          Sign up to pick up your reward!
        </p>

        {/* SIGN UP button */}
        <button
          onClick={() => onNavigate?.("sign-up")}
          style={{
            width: "100%",
            height: 52,
            borderRadius: 26,
            border: "none",
            cursor: "pointer",
            background: "linear-gradient(90deg, #a855f7 0%, #ec4899 35%, #f9a8d4 55%, #86efac 80%, #4ade80 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
          onPointerDown={(e) => (e.currentTarget.style.opacity = "0.85")}
          onPointerUp={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <span style={{
            fontFamily: "'Russo One', sans-serif",
            fontSize: 12,
            letterSpacing: 0.5,
            color: "#161616",
            fontWeight: 400,
          }}>
            SIGN UP
          </span>
        </button>
      </div>

      <AlienTabBar />
    </div>
  );
}
