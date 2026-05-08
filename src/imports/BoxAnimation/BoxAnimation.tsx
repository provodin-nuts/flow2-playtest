import { useEffect } from "react";
import AlienTabBar from "../shared/AlienTabBar";

// Full-screen glow explosion — 1400x1400 glow covers entire screen
// Auto-navigates to "first-reward" after 800ms (Figma: After delay 800ms → First reward)
const imgGlow = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f92d6902-bf03-402b-bbd4-62fa662e1121";

const imgAndroidBluetooth      = "https://www.figma.com/api/mcp/asset/57dc6fb8-c18e-4479-a70c-a718b54867ae";
const imgAndroidWiFi           = "https://www.figma.com/api/mcp/asset/f0c53ec5-6271-459f-af4d-ade0406cfbb3";
const imgAndroidCellularSignal = "https://www.figma.com/api/mcp/asset/3cf9b379-2ea2-427e-b79f-c72e5acef4e1";
const imgAndroidBattery        = "https://www.figma.com/api/mcp/asset/c016af1f-8e84-45fe-ab6c-982df4df8d23";

function StatusBar() {
  return (
    <div style={{ height: 24, flexShrink: 0, position: "relative", width: "100%", zIndex: 10 }}>
      <div style={{ position: "absolute", left: 16, top: 5, display: "flex", fontFamily: "'Roboto', sans-serif", fontWeight: 400, fontSize: 12, color: "white", gap: 0 }}>
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

export default function BoxAnimation({ onNavigate }: { onNavigate?: (screen: string) => void }) {
  useEffect(() => {
    const timer = setTimeout(() => onNavigate?.("first-reward"), 800);
    return () => clearTimeout(timer);
  }, [onNavigate]);

  return (
    <div style={{
      position: "relative",
      width: "100%",
      height: "100%",
      backgroundColor: "#000",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    }}>
      <StatusBar />

      {/* Glow: 1400×1400 centered, covers entire screen — overflow hidden on parent */}
      <img
        alt=""
        src={imgGlow}
        style={{
          position: "absolute",
          width: 1400,
          height: 1400,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          animation: "glowExplode 1.2s cubic-bezier(0,0,0.42,1) forwards",
        }}
      />

      {/* Tab bar at bottom */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 10 }}>
        <AlienTabBar />
      </div>

      <style>{`
        @keyframes glowExplode {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.29); }
          to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </div>
  );
}
