import { useState } from "react";

const imgAuthBg    = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86715e7a-887f-4625-89c1-2a15887ec19c";
const imgGoogle    = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1331a859-e0a9-4edc-80e8-312f918a4104";
const imgEmail     = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18957c7e-0722-4b24-8b8e-ca022c121824";
const imgWhatsApp  = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6d9f1b3-b276-4708-99b3-bd0e0c9314f5";

function StatusBar() {
  return (
    <div className="h-[24px] relative w-full">
      <div className="absolute flex font-['Roboto:Regular',sans-serif] font-normal items-start leading-normal left-[16px] text-[12px] text-white top-[5px] whitespace-nowrap">
        <span style={{ fontVariationSettings: "'wdth' 100" }}>09</span>
        <span style={{ fontVariationSettings: "'wdth' 100" }}>:</span>
        <span style={{ fontVariationSettings: "'wdth' 100" }}>30</span>
      </div>
      <span className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-normal left-[49px] text-[12px] text-white top-[5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>PM</span>
    </div>
  );
}

function GreenCheckbox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      aria-checked={checked}
      role="checkbox"
      style={{
        width: 22,
        height: 22,
        borderRadius: 6,
        border: "none",
        flexShrink: 0,
        cursor: "pointer",
        background: checked
          ? "linear-gradient(135deg, #c2ef43 0%, #6eff46 100%)"
          : "rgba(255,255,255,0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.2s",
        marginTop: 1,
      }}
    >
      {checked && (
        <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
          <path d="M1.5 5L5 8.5L11.5 1.5" stroke="#161616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}

export default function EarnAuth({ onNavigate: _onNavigate }: { onNavigate: (screen: string) => void }) {
  const [agreed, setAgreed] = useState(true);

  return (
    <div className="relative size-full overflow-hidden" style={{ background: "#000" }}>

      {/* Background photo — full screen */}
      <img
        alt=""
        src={imgAuthBg}
        className="absolute inset-0 size-full object-cover"
        style={{ objectPosition: "center top" }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, transparent 25%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.88) 70%, #000 90%)",
        }}
      />

      {/* StatusBar */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ zIndex: 20 }}>
        <StatusBar />
      </div>

      {/* Bottom content panel */}
      <div
        className="absolute left-0 right-0 flex flex-col items-center gap-[24px] px-[28px]"
        style={{ bottom: 36, zIndex: 10 }}
      >
        {/* Headline */}
        <p
          className="text-white text-center"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "23px",
          }}
        >
          Sign in or create an account{"\n"}to continue
        </p>

        {/* Auth buttons — 3 in a row */}
        <div style={{ display: "flex", justifyContent: "center", gap: 32, width: "100%" }}>
          {[
            { label: "Google",    icon: imgGoogle    },
            { label: "Email",     icon: imgEmail     },
            { label: "WhatsApp",  icon: imgWhatsApp  },
          ].map(({ label, icon }) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer" }}>
              <div style={{ width: 56, height: 56, borderRadius: 16, overflow: "hidden", flexShrink: 0 }}>
                <img
                  alt={label}
                  src={icon}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: 13,
                color: "rgba(255,255,255,0.85)",
                textAlign: "center",
                whiteSpace: "nowrap",
                margin: 0,
              }}>
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Checkbox + legal text */}
        <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: 10, width: "100%" }}>
          <GreenCheckbox checked={agreed} onChange={() => setAgreed((v) => !v)} />
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 400,
              fontSize: 12,
              lineHeight: "17px",
              color: "rgba(255,255,255,0.7)",
              margin: 0,
            }}
          >
            I agree to the{" "}
            <a href="#" style={{ color: "white", textDecoration: "underline", fontWeight: 600 }}>
              User Agreement
            </a>
            ,{" "}
            <a href="#" style={{ color: "white", textDecoration: "underline", fontWeight: 600 }}>
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" style={{ color: "white", textDecoration: "underline", fontWeight: 600 }}>
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
