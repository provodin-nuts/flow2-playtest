import AlienTabBar from "../shared/AlienTabBar";

const imgGlow    = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ada0a8de-db4b-421e-a672-77f654fc4f99";
const imgBox     = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/128b9d6d-0d7b-45a0-b023-e191129eb32a";
const imgTapIcon = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/afb3130e-4f76-423b-b938-0745cd0b5751";

const imgAndroidBluetooth      = "https://www.figma.com/api/mcp/asset/57dc6fb8-c18e-4479-a70c-a718b54867ae";
const imgAndroidWiFi           = "https://www.figma.com/api/mcp/asset/f0c53ec5-6271-459f-af4d-ade0406cfbb3";
const imgAndroidCellularSignal = "https://www.figma.com/api/mcp/asset/3cf9b379-2ea2-427e-b79f-c72e5acef4e1";
const imgAndroidBattery        = "https://www.figma.com/api/mcp/asset/c016af1f-8e84-45fe-ab6c-982df4df8d23";

function StatusBar() {
  return (
    <div style={{ height: 24, flexShrink: 0, position: "relative", width: "100%" }}>
      <div style={{
        position: "absolute", left: 16, top: 5,
        display: "flex", fontFamily: "'Roboto', sans-serif", fontWeight: 400,
        fontSize: 12, color: "white", gap: 0,
      }}>
        <span>09:30</span>
        <span style={{ marginLeft: 4 }}>PM</span>
      </div>
      <div style={{
        position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)",
        display: "flex", gap: 8, alignItems: "center",
      }}>
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

export default function BoxStart({ onNavigate }: { onNavigate?: (screen: string) => void }) {
  return (
    <div
      onClick={() => onNavigate?.("box-animation")}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <StatusBar />

      {/* Glow + Box — занимают всё свободное пространство */}
      <div style={{
        flex: 1,
        position: "relative",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        {/* Glow: 400x400, чуть шире экрана (overflow hidden на родителе) */}
        <img
          alt=""
          src={imgGlow}
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -54%)",
            pointerEvents: "none",
            animation: "glowPulse 2.5s ease-in-out infinite alternate",
          }}
        />
        {/* Box: 250x250 */}
        <img
          alt="Reward box"
          src={imgBox}
          style={{
            position: "relative",
            width: 250,
            height: 250,
            objectFit: "contain",
            zIndex: 1,
            animation: "boxFloat 3s ease-in-out infinite",
          }}
        />
      </div>

      {/* Action: иконка тапа + текст */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        paddingBottom: 20,
        flexShrink: 0,
      }}>
        <img
          alt=""
          src={imgTapIcon}
          style={{
            width: 58,
            height: 58,
            opacity: 0.5,
            animation: "tapBounce 1.8s ease-in-out infinite",
          }}
        />
        <p style={{
          fontFamily: "'Russo One', sans-serif",
          fontSize: 20,
          lineHeight: "24px",
          color: "#ffffff",
          textAlign: "center",
          margin: 0,
          letterSpacing: 0.2,
        }}>
          Tap to open
        </p>
      </div>

      <AlienTabBar />

      <style>{`
        @keyframes boxFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes glowPulse {
          from { opacity: 0.75; transform: translate(-50%, -54%) scale(0.97); }
          to   { opacity: 1;    transform: translate(-50%, -54%) scale(1.03); }
        }
        @keyframes tapBounce {
          0%, 100% { transform: translateY(0px);  opacity: 0.45; }
          50%       { transform: translateY(-5px); opacity: 0.65; }
        }
      `}</style>
    </div>
  );
}
