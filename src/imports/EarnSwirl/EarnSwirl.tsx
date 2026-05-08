import { useEffect } from "react";

const imgSwirl = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d840a1e-0949-4b3b-8058-0c4a714af322";

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

export default function EarnSwirl({ onNavigate }: { onNavigate: (screen: string) => void }) {
  useEffect(() => {
    const timer = setTimeout(() => onNavigate("signup"), 800);
    return () => clearTimeout(timer);
  }, [onNavigate]);

  return (
    <div className="relative size-full overflow-hidden">
      <img
        alt=""
        src={imgSwirl}
        className="absolute inset-0 size-full object-cover"
        style={{ animation: "swirlPulse 4s ease-in-out infinite" }}
      />

      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ zIndex: 20 }}>
        <StatusBar />
      </div>

      <style>{`
        @keyframes swirlPulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.04); }
        }
      `}</style>
    </div>
  );
}
