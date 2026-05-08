import svgPaths from "./svg-q13jqqr341";

function WidgetTitle() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Widget title">
      <p className="flex-[1_0_0] font-['Montserrat:Medium',sans-serif] leading-[14px] min-w-px not-italic relative text-[12px] text-white tracking-[0.06px]">Earned today</p>
      <div className="relative shrink-0 size-[16px]" data-name="question.Circle">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[13.333px] top-1/2" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path clipRule="evenodd" d={svgPaths.p2987a000} fill="var(--fill-0, #6E6E6E)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TitleContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title content">
      <WidgetTitle />
      <p className="font-['Russo_One:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.16px] whitespace-nowrap">$1,2</p>
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="Progress Bar">
      <div className="bg-gradient-to-r col-1 from-[#fd00e9] h-[4px] ml-0 mt-0 rounded-[100px] row-1 to-[#00ffed] w-[43.63%]" data-name="Active Segment" />
      <div className="bg-[rgba(255,255,255,0.1)] col-1 h-[4px] ml-0 mt-0 rounded-[100px] row-1 w-full" data-name="Active Segment" />
    </div>
  );
}

export default function Component06TooltipEarnedTodayTapEarnedTodayWidget() {
  return (
    <div className="bg-[rgba(22,22,22,0.95)] relative size-full" data-name="06_Tooltip — Earned today [tap: Earned today widget]">
      <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch drop-shadow-[0px_4px_5px_rgba(0,0,0,0.15)] flex flex-col gap-[4px] items-start justify-center left-[16px] p-[12px] rounded-[20px] top-[346px] w-[160px]" data-name="Earned today widget">
        <TitleContent />
        <ProgressBar />
        <div className="font-['Montserrat:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#b9b9b9] text-[10px] tracking-[0.05px] w-full whitespace-pre-wrap">
          <p className="leading-[12px] mb-0">{`Daily max `}</p>
          <p className="leading-[12px]">$2.05</p>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start justify-center left-[24px] top-[470px] w-[312px]" data-name="Tip">
        <div className="flex items-center justify-center relative shrink-0">
          <div className="-scale-y-100 flex-none">
            <div className="content-stretch flex flex-col items-center px-[32px] relative" data-name="x / Pointer">
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none rotate-180">
                  <div className="h-[20px] relative w-[60px]" data-name="Pointer">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 20">
                      <path clipRule="evenodd" d={svgPaths.p39a180} fill="var(--fill-0, white)" fillOpacity="0.1" fillRule="evenodd" id="Pointer" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[28px] shrink-0 w-full" data-name="x / Content">
          <div className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative size-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="x / Text Tips">
              <p className="font-['Russo_One:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-white tracking-[0.2px] w-full">Earned today</p>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="x / Description">
                <p className="font-['Montserrat:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.16px] w-[272px]">
                  <span className="leading-[24px]">{`See how much you've earned today. The daily limit refills `}</span>
                  <span className="font-['Montserrat:Bold',sans-serif] leading-[24px]">every 24 hours.</span>
                </p>
              </div>
            </div>
            <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="x / Buttons">
              <div className="flex-[1_0_0] h-[48px] min-w-px relative rounded-[16px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 272 48\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(27.2 -4.8 15.725 9.756 -0.0000081062 48)\\'><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.2\\'/><stop stop-color=\\'rgba(210,255,197,1)\\' offset=\\'0.4\\'/><stop stop-color=\\'rgba(164,255,139,1)\\' offset=\\'0.6\\'/><stop stop-color=\\'rgba(210,207,193,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(255,159,247,1)\\' offset=\\'0.9\\'/></radialGradient></defs></svg>')" }} data-name="Button">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative size-full">
                    <p className="font-['Russo_One:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[12px] text-center tracking-[0.72px] uppercase whitespace-nowrap">got it</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}