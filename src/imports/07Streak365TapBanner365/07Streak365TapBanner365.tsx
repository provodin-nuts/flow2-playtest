// Remote Figma assets (valid ~7 days)
const imgArrowLeft = "https://www.figma.com/api/mcp/asset/229948b3-59a0-48ee-9600-8f53d3eeffb0";
const imgProgressBar = "https://www.figma.com/api/mcp/asset/7b9270a4-a1f5-4622-bff4-a767590e4dea";
const imgArrowGreen = "https://www.figma.com/api/mcp/asset/a7f0976e-cf38-4af3-b6c2-712ee27bc940";
const imgArrowWhite = "https://www.figma.com/api/mcp/asset/ec52723f-9d39-4d9e-964b-b10dc904eca6";

const milestones: Array<{ days: string; reward: string; isTop: boolean; opacity?: number }> = [
  { days: "365 days in a row", reward: "$1500", isTop: true },
  { days: "180 days in a row", reward: "$500", isTop: false },
  { days: "30 days in a row", reward: "$30", isTop: false },
  { days: "7 days in a row", reward: "$7", isTop: false },
  { days: "3 days in a row", reward: "Withdrawal\nunlock", isTop: false, opacity: 0.5 },
];

export default function Component07Streak365TapBanner365() {
  return (
    <div className="flex flex-col items-center relative size-full">
      {/* iOS safe area */}
      <div className="bg-black h-[40px] shrink-0 w-full" />

      {/* Main content */}
      <div
        className="flex-1 min-h-0 overflow-clip relative w-[360px]"
        style={{ background: "linear-gradient(180deg, #323232 0%, #161616 30%)" }}
      >
        {/* Nav bar */}
        <div className="absolute flex h-[64px] items-center justify-between left-0 top-0 w-[360px]">
          <div className="flex items-center pl-[16px] shrink-0 w-[127.5px]">
            <div className="relative shrink-0 size-[24px]" data-name="Arrow.Left">
              <div className="absolute flex inset-[21.92%_16.67%] items-center justify-center" style={{ containerType: "size" }}>
                <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
                  <div className="relative size-full">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowLeft} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[16px] shrink-0 w-[57px]" />
          <div className="h-[24px] shrink-0 w-[127.5px]" />
        </div>

        {/* Content block */}
        <div className="absolute flex flex-col items-center left-[16px] right-[16px] top-[76px]">
          {/* Title block */}
          <div className="flex flex-col gap-[24px] items-center justify-center w-full">
            <div className="flex flex-col gap-[12px] items-start w-full">
              <div className="flex flex-wrap gap-x-[8px] gap-y-[2px] items-center justify-center w-full">
                <div className="flex gap-[8px] items-center justify-center shrink-0">
                  <p className="font-['Russo_One:Regular',sans-serif] leading-[24px] not-italic shrink-0 text-[20px] text-center text-white tracking-[0.2px] whitespace-nowrap">Get </p>
                  <div className="bg-[#6eff46] flex items-center justify-center px-[12px] py-[2px] relative rounded-[12px] shrink-0">
                    <p className="font-['Russo_One:Regular',sans-serif] leading-[28px] not-italic shrink-0 text-[#161616] text-[24px] text-center tracking-[0.24px] whitespace-nowrap">$1500 </p>
                  </div>
                </div>
                <p className="font-['Russo_One:Regular',sans-serif] leading-[24px] not-italic shrink-0 text-[20px] text-center text-white tracking-[0.2px] whitespace-nowrap">for 365 days in the app</p>
              </div>
              <p className="font-['Russo_One:Regular',sans-serif] leading-[20px] not-italic shrink-0 text-[14px] text-center text-white tracking-[0.28px] w-full">
                Watch the feed, catch 3 rewards a day<br aria-hidden="true" />and get a bonus in DOPPY coin
              </p>
            </div>

            {/* Timeline */}
            <div className="flex gap-[32px] items-start justify-center pl-[20px] shrink-0 w-full">
              {/* Progress bar */}
              <div className="h-[390px] relative shrink-0 w-[40px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgProgressBar} />
                {/* Status widget */}
                <div
                  className="-translate-x-1/2 absolute bg-[#161616] border-[0.5px] border-solid border-white bottom-[4px] flex flex-col gap-[2px] items-center justify-center left-1/2 px-[12px] py-[8px] rounded-[20px] text-white whitespace-nowrap"
                  style={{ boxShadow: "0px 4px 2px rgba(0,0,0,0.3)" }}
                >
                  <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[12px] shrink-0 text-[10px] tracking-[0.05px]">You're active</p>
                  <p className="font-['Russo_One:Regular',sans-serif] leading-[20px] not-italic shrink-0 text-[16px] text-center tracking-[0.16px]">1 day</p>
                </div>
              </div>

              {/* Milestones */}
              <div className="flex flex-col items-start justify-between pb-[20px] self-stretch shrink-0">
                {milestones.map(({ days, reward, isTop, opacity = 1 }) => (
                  <div key={days} className="flex gap-[4px] items-center justify-center p-[8px] relative rounded-[12px] shrink-0" style={{ opacity }}>
                    <div className="flex items-center justify-center shrink-0 size-[16px]">
                      <div className="-rotate-90 flex-none">
                        <div className="relative size-[16px]">
                          <div className="absolute bottom-1/4 left-[11.26%] right-[11.26%] top-[6.25%]">
                            <img alt="" className="block max-w-none size-full" src={isTop ? imgArrowGreen : imgArrowWhite} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[4px] items-start justify-center shrink-0 w-[156px]">
                      <p className={`font-['Montserrat:Medium',sans-serif] font-medium leading-[14px] shrink-0 text-[12px] tracking-[0.06px] ${isTop ? "text-[#6eff46]" : "text-white"}`}>
                        {days}
                      </p>
                      <p className={`font-['Russo_One:Regular',sans-serif] not-italic shrink-0 ${isTop ? "leading-[24px] text-[20px] text-[#6eff46] tracking-[0.2px]" : reward.includes("\n") ? "leading-[16px] text-[14px] text-white tracking-[0.14px]" : "leading-[20px] text-[16px] text-white tracking-[0.16px]"} w-full`} style={{ whiteSpace: "pre-line" }}>
                        {reward}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Home indicator */}
        <div className="-translate-x-1/2 absolute bottom-0 h-[14px] left-1/2 w-[360px]">
          <div className="absolute bg-white h-[2px] left-[148px] rounded-[32px] top-[8px] w-[64px]" />
        </div>

        {/* Bottom buttons */}
        <div
          className="-translate-x-1/2 absolute bottom-0 flex flex-col items-center justify-center left-1/2 pb-[24px] pt-[40px] px-[16px] w-[360px]"
          style={{ background: "linear-gradient(180deg, rgba(22,22,22,0) 0%, #161616 24%)" }}
        >
          <div className="flex flex-col gap-[8px] items-start w-full">
            {/* WATCH VIDEO button */}
            <div
              className="flex h-[52px] items-center justify-center relative rounded-[16px] shrink-0 w-full cursor-pointer"
              style={{
                backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 328 52\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(32.8 -5.2 18.963 10.569 -0.0000097752 52)\\'><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.2\\'/><stop stop-color=\\'rgba(210,255,197,1)\\' offset=\\'0.4\\'/><stop stop-color=\\'rgba(164,255,139,1)\\' offset=\\'0.6\\'/><stop stop-color=\\'rgba(210,207,193,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(255,159,247,1)\\' offset=\\'0.9\\'/></radialGradient></defs></svg>')",
              }}
              data-name="Button"
            >
              <p className="font-['Russo_One:Regular',sans-serif] leading-[16px] not-italic shrink-0 text-[#161616] text-[12px] text-center tracking-[0.72px] uppercase whitespace-nowrap">Watch Video</p>
            </div>
            {/* CONDITIONS button */}
            <div
              className="border border-[rgba(255,255,255,0.3)] border-solid flex h-[52px] items-center justify-center relative rounded-[16px] shrink-0 w-full cursor-pointer"
              data-name="Button"
            >
              <p className="font-['Russo_One:Regular',sans-serif] leading-[16px] not-italic shrink-0 text-[12px] text-[#6eff46] text-center tracking-[0.72px] uppercase whitespace-nowrap">Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
