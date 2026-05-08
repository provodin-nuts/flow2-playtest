import AlienTabBar from "../shared/AlienTabBar";

const imgCarousel = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2a9d584-25c4-465f-bfa3-d5e3a58e1ca1";
const imgCoin     = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b406ec2-5ad5-46a8-9d7e-20996efc4b78";

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
  // Figma frame: 360×800
  // Exact positions used as flex gaps to match layout pixel-perfect
  // y=0  StatusBar h=24
  // y=69 Carousel  h=260  → gap = 45px
  // y=341 Reward block h=104 → gap = 12px after carousel
  // y=540 Bottom block → flex-1 absorbs extra height on taller screens
  // y=732 TabBar h=68  → 20px gap after bottom block

  return (
    <div style={{
      width: "100%",
      height: "100%",
      backgroundColor: "#161616",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
    }}>
      <StatusBar />

      {/* gap: 45px (y=24→69) */}
      <div style={{ height: 45, flexShrink: 0 }} />

      {/* Carousel: 360×260 — full width, fixed height */}
      <div style={{ width: "100%", height: 260, flexShrink: 0 }}>
        <img
          alt="Reward"
          src={imgCarousel}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      {/* gap: 12px (y=329→341) */}
      <div style={{ height: 12, flexShrink: 0 }} />

      {/* Reward block: y=341, h=104 — texts centered, px=16 */}
      <div style={{ width: "100%", flexShrink: 0, display: "flex", flexDirection: "column", gap: 0 }}>
        {/* "Sign up and get up to" — Russo One 20px, center */}
        <p style={{
          fontFamily: "'Russo One', sans-serif",
          fontSize: 20,
          lineHeight: "24px",
          fontWeight: 400,
          color: "#ffffff",
          textAlign: "center",
          margin: 0,
          paddingLeft: 16,
          paddingRight: 16,
        }}>
          Sign up and get&nbsp;up to
        </p>

        {/* "≈$3.294" — Russo One 36px, center, y=373 → margin-top = 373-341-24=8px */}
        <p style={{
          fontFamily: "'Russo One', sans-serif",
          fontSize: 36,
          lineHeight: "40px",
          fontWeight: 400,
          color: "#ffffff",
          textAlign: "center",
          margin: 0,
          marginTop: 8,
          paddingLeft: 16,
          paddingRight: 16,
        }}>
          ≈$3.294
        </p>

        {/* "in DOPPY [coin]" — y=421 → margin-top = 421-373-40=8px */}
        <div style={{
          marginTop: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
        }}>
          <span style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "24px",
            color: "#ffffff",
          }}>
            in DOPPY
          </span>
          <img
            alt="DOPPY"
            src={imgCoin}
            style={{ width: 20, height: 20, flexShrink: 0 }}
          />
        </div>
      </div>

      {/* Flex spacer — absorbs extra height on screens taller than 800px */}
      <div style={{ flex: 1 }} />

      {/* Bottom block: y=540, h=172 */}
      <div style={{ width: "100%", flexShrink: 0, paddingLeft: 16, paddingRight: 16 }}>
        {/* Description: 328×76 */}
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 500,
          fontSize: 16,
          lineHeight: "24px",
          color: "#ffffff",
          textAlign: "center",
          margin: 0,
        }}>
          Watch the feed, get DOPPY, withdraw to card
        </p>
        <p style={{
          fontFamily: "'Russo One', sans-serif",
          fontSize: 20,
          lineHeight: "24px",
          fontWeight: 400,
          color: "#ffffff",
          textAlign: "center",
          margin: 0,
          marginTop: 4,
        }}>
          Sign up to pick up your reward!
        </p>

        {/* Gap between description and button: y=660-(540+76)=44px */}
        <div style={{ height: 44 }} />

        {/* SIGN UP button: 328×52, r=20 */}
        {/* Gradient: radial-gradient, stops 0.2=white 0.6=#a4ff8b 0.9=#ff9ff7 */}
        <button
          onClick={() => onNavigate?.("sign-up")}
          style={{
            width: "100%",
            height: 52,
            borderRadius: 20,
            border: "none",
            cursor: "pointer",
            background: "radial-gradient(ellipse at 0% 100%, #ffffff 20%, #a3ff8b 60%, #ff9ff7 90%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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

      {/* gap: 20px (button bottom y=712 → TabBar y=732) */}
      <div style={{ height: 20, flexShrink: 0 }} />

      <AlienTabBar />
    </div>
  );
}
