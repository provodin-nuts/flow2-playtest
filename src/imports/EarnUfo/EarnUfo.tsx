const imgUfo     = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05c7f3f9-43f4-4bd5-b274-b25517a2ab10";
const imgTapIcon = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0891dbb3-f1dc-4388-83fd-34c7ee7c4f82";

const TAB_BAR_H = 78;

function StatusBar() {
  return (
    <div className="h-[24px] relative w-full" style={{ flexShrink: 0 }}>
      <div className="absolute flex font-['Roboto:Regular',sans-serif] font-normal items-start leading-normal left-[16px] text-[12px] text-white top-[5px] whitespace-nowrap">
        <span style={{ fontVariationSettings: "'wdth' 100" }}>09</span>
        <span style={{ fontVariationSettings: "'wdth' 100" }}>:</span>
        <span style={{ fontVariationSettings: "'wdth' 100" }}>30</span>
      </div>
      <span className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-normal left-[49px] text-[12px] text-white top-[5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>PM</span>
    </div>
  );
}

export default function EarnUfo({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div
      onClick={() => onNavigate("swirl")}
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

      {/* UFO image — fills flex space, centered */}
      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "0 20px",
      }}>
        <img
          alt="UFO"
          src={imgUfo}
          style={{
            width: "100%",
            maxWidth: 320,
            height: "auto",
            objectFit: "contain",
            animation: "ufoFloat 3s ease-in-out infinite, ufoGlow 2.5s ease-in-out infinite alternate",
          }}
        />
      </div>

      {/* Tap icon + text — above tab bar */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        paddingBottom: TAB_BAR_H + 24,
        flexShrink: 0,
      }}>
        <img alt="" src={imgTapIcon} style={{ width: 40, height: 40, opacity: 0.5 }} />
        <p style={{
          fontFamily: "'Russo One', sans-serif",
          fontSize: 18,
          color: "#ffffff",
          textAlign: "center",
          margin: 0,
          letterSpacing: 0.2,
        }}>
          Tap to catch reward
        </p>
      </div>

      <style>{`
        @keyframes ufoFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
        @keyframes ufoGlow {
          from { filter: drop-shadow(0 0 16px rgba(110,255,70,0.3)) drop-shadow(0 0 32px rgba(200,100,255,0.2)); }
          to   { filter: drop-shadow(0 0 28px rgba(110,255,70,0.6)) drop-shadow(0 0 56px rgba(200,100,255,0.45)); }
        }
      `}</style>
    </div>
  );
}
