const imgLips      = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf302988-7f6c-459c-9b1c-09aca3d534e9";
const imgDoppyCoin = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/326a64e4-6ab6-4d0f-a957-51b034b69b20";

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

export default function EarnSignup({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div
      className="relative size-full flex flex-col"
      style={{ background: "#161616", overflowY: "auto" }}
    >
      <StatusBar />

      {/* Lips illustration */}
      <div style={{ flex: "0 0 auto", display: "flex", justifyContent: "center", paddingTop: 8 }}>
        <img
          alt="Sign up reward"
          src={imgLips}
          style={{ width: "100%", maxWidth: 320, height: "auto", objectFit: "contain" }}
        />
      </div>

      {/* "Sign up and get up to" */}
      <p style={{
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 500,
        fontSize: 16,
        color: "#ffffff",
        textAlign: "center",
        marginTop: 24,
        marginBottom: 0,
        padding: 0,
      }}>
        Sign up and get up to
      </p>

      {/* "≈$3.294" */}
      <p style={{
        fontFamily: "'Russo One', sans-serif",
        fontSize: 48,
        color: "#ffffff",
        textAlign: "center",
        marginTop: 8,
        marginBottom: 0,
        letterSpacing: "-0.5px",
        lineHeight: 1.1,
      }}>
        ≈$3.294
      </p>

      {/* "in DOPPY" + coin icon */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        marginTop: 8,
      }}>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 500,
          fontSize: 16,
          color: "#ffffff",
          margin: 0,
        }}>
          in DOPPY
        </p>
        <div style={{ width: 20, height: 20, flexShrink: 0 }}>
          <img alt="DOPPY" src={imgDoppyCoin} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        </div>
      </div>

      {/* Description */}
      <p style={{
        fontFamily: "'Russo One', sans-serif",
        fontSize: 18,
        lineHeight: "26px",
        color: "#ffffff",
        textAlign: "center",
        marginTop: 40,
        marginBottom: 0,
        paddingLeft: 24,
        paddingRight: 24,
      }}>
        DOPPY is our in-app reward coin. Earn it by watching videos, use it within the app, or cash it out anytime
      </p>

      {/* Spacer */}
      <div style={{ flex: 1, minHeight: 16 }} />

      {/* SIGN UP button */}
      <button
        onClick={() => onNavigate("auth")}
        style={{
          height: 56,
          borderRadius: 16,
          border: "none",
          cursor: "pointer",
          background: "linear-gradient(90deg, #a855f7 0%, #ec4899 35%, #f9a8d4 55%, #86efac 80%, #4ade80 100%)",
          marginLeft: 16,
          marginRight: 16,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "opacity 0.15s",
        }}
        onPointerDown={(e) => (e.currentTarget.style.opacity = "0.85")}
        onPointerUp={(e) => (e.currentTarget.style.opacity = "1")}
        onPointerLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        <span style={{
          fontFamily: "'Russo One', sans-serif",
          fontSize: 16,
          color: "#000000",
          fontWeight: 400,
          letterSpacing: "0.5px",
        }}>
          SIGN UP
        </span>
      </button>

      {/* Bottom spacer for static AlienTabBar */}
      <div style={{ height: 90, flexShrink: 0 }} />
    </div>
  );
}
