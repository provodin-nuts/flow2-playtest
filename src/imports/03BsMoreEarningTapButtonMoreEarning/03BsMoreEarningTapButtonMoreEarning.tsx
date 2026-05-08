import svgPaths from "./svg-387ly1e5ha";

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-w-px not-italic relative text-white" data-name="Text">
      <p className="font-['Russo_One:Regular',sans-serif] leading-[20px] overflow-hidden relative shrink-0 text-[16px] text-ellipsis tracking-[0.16px] w-full">ALPHA MODE</p>
      <p className="font-['Montserrat:Medium',sans-serif] leading-[16px] overflow-hidden relative shrink-0 text-[14px] text-ellipsis tracking-[0.14px] w-full">All the best — in one subscription</p>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center px-[6px] py-[4px] relative rounded-[10px] shrink-0 w-[40px]" style={{ backgroundImage: "linear-gradient(149.036deg, rgb(194, 239, 67) 0%, rgb(110, 255, 70) 100%)" }} data-name="Left">
      <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(255,255,255,0.7)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Russo_One:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#161616] text-[12px] text-center tracking-[0.12px] whitespace-nowrap">OFF</p>
    </div>
  );
}

function LabelContent() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 text-white w-full" data-name="Label Content">
      <p className="font-['Russo_One:Regular',sans-serif] leading-[24px] relative shrink-0 text-[20px] tracking-[0.2px] w-full">{`More income `}</p>
      <p className="font-['Montserrat:Medium',sans-serif] leading-[16px] min-h-[48px] relative shrink-0 text-[14px] tracking-[0.14px] w-full">activate earning boost</p>
    </div>
  );
}

function LabelContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 text-white w-full" data-name="Label Content">
      <p className="font-['Russo_One:Regular',sans-serif] leading-[20px] relative shrink-0 text-[16px] tracking-[0.16px] w-full">Task rewards</p>
      <p className="font-['Montserrat:Medium',sans-serif] leading-[16px] min-h-[48px] relative shrink-0 text-[14px] tracking-[0.14px] w-full">complete tasks for rewards</p>
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[400px] items-start justify-center min-w-px relative" data-name="Left">
      <div className="flex-[1_0_0] min-h-px relative rounded-[20px] w-full" style={{ backgroundImage: "linear-gradient(232.988deg, rgba(253, 0, 233, 0.05) 0%, rgba(255, 255, 255, 0.05) 39.629%, rgba(0, 255, 237, 0.1) 79.257%)" }} data-name="Tile">
        <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-end justify-between p-[12px] relative size-full">
            <LabelContent />
            <div className="relative shrink-0 size-[20px]" data-name="Icon">
              <div className="absolute inset-[20%_29.71%_20%_35%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.05834 12">
                  <path d={svgPaths.p21ad5200} fill="var(--fill-0, white)" id="vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-[20px] shadow-[0px_-4px_10px_0px_rgba(0,0,0,0.15)]" />
      </div>
      <div className="bg-[rgba(255,255,255,0.1)] flex-[1_0_0] min-h-px relative rounded-[20px] shadow-[0px_-4px_10px_0px_rgba(0,0,0,0.15)] w-full" data-name="Tile">
        <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-end justify-between p-[12px] relative size-full">
            <LabelContent1 />
            <div className="relative shrink-0 size-[20px]" data-name="Icon">
              <div className="absolute inset-[20%_29.71%_20%_35%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.05834 12">
                  <path d={svgPaths.p21ad5200} fill="var(--fill-0, white)" id="vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LabelContent2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 text-white w-full" data-name="Label Content">
      <p className="font-['Russo_One:Regular',sans-serif] leading-[20px] relative shrink-0 text-[16px] tracking-[0.16px] w-full">Up to $15 per friend</p>
      <p className="font-['Montserrat:Medium',sans-serif] leading-[16px] min-h-[48px] relative shrink-0 text-[14px] tracking-[0.14px] w-full">invite — earn</p>
    </div>
  );
}

function LabelContent3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 text-white w-full" data-name="Label Content">
      <p className="font-['Russo_One:Regular',sans-serif] leading-[20px] relative shrink-0 text-[16px] tracking-[0.16px] w-full">Share and earn</p>
      <p className="font-['Montserrat:Medium',sans-serif] leading-[16px] min-h-[48px] relative shrink-0 text-[14px] tracking-[0.14px] w-full whitespace-pre-wrap">
        {`post stories `}
        <br aria-hidden="true" />and boost your earnings
      </p>
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[400px] items-start min-w-px relative" data-name="Right">
      <div className="bg-[rgba(255,255,255,0.1)] flex-[1_0_0] min-h-px relative rounded-[20px] shadow-[0px_-4px_10px_0px_rgba(0,0,0,0.15)] w-full" data-name="Tile">
        <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-end justify-between p-[12px] relative size-full">
            <LabelContent2 />
            <div className="relative shrink-0 size-[20px]" data-name="Icon">
              <div className="absolute inset-[20%_29.71%_20%_35%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.05834 12">
                  <path d={svgPaths.p21ad5200} fill="var(--fill-0, white)" id="vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.1)] flex-[1_0_0] min-h-px relative rounded-[20px] shadow-[0px_-4px_10px_0px_rgba(0,0,0,0.15)] w-full" data-name="Tile">
        <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-end justify-between p-[12px] relative size-full">
            <LabelContent3 />
            <div className="relative shrink-0 size-[20px]" data-name="Icon">
              <div className="absolute inset-[20%_29.71%_20%_35%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.05834 12">
                  <path d={svgPaths.p21ad5200} fill="var(--fill-0, white)" id="vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Blocks() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] relative rounded-[16px] shrink-0 w-[360px]" data-name="Blocks">
      <Left1 />
      <Right />
    </div>
  );
}

function BottomSheet() {
  return (
    <div className="-translate-x-1/2 absolute backdrop-blur-[50px] bg-gradient-to-b bottom-0 content-stretch flex flex-col from-[#323232] gap-[20px] items-center justify-end left-1/2 pb-[32px] pt-[8px] rounded-tl-[28px] rounded-tr-[28px] to-[#161616] to-[30%] w-[360px]" data-name="Bottom Sheet">
      <div className="bg-[rgba(171,155,253,0.15)] h-[4px] rounded-[40px] shrink-0 w-[52px]" data-name="Drawer" />
      <p className="font-['Russo_One:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-center text-white tracking-[0.2px] whitespace-nowrap">More earnings</p>
      <div className="content-stretch flex gap-[8px] items-center p-[16px] relative rounded-[20px] shrink-0 w-[328px]" style={{ backgroundImage: "linear-gradient(142.847deg, rgba(110, 255, 70, 0.7) 0%, rgba(110, 255, 70, 0.3) 100%)" }} data-name="Big Banner">
        <Text />
        <div className="bg-gradient-to-b content-stretch drop-shadow-[0px_2px_4px_rgba(0,0,0,0.2)] flex from-[rgba(255,255,255,0.1)] gap-[6px] items-center pl-[4px] pr-[8px] py-[4px] relative rounded-[12px] shrink-0 to-[rgba(255,255,255,0.3)]" data-name="Subscription">
          <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(255,255,255,0.7)] border-solid inset-0 pointer-events-none rounded-[12px]" />
          <Left />
          <p className="font-['Russo_One:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#6eff46] text-[12px] text-right tracking-[0.12px] whitespace-nowrap">ALPHA</p>
        </div>
      </div>
      <Blocks />
      <div className="content-stretch flex h-[52px] items-center justify-center overflow-clip px-[16px] py-[20px] relative rounded-[20px] shrink-0 w-[328px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 328 52\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(32.8 -5.2 18.963 10.569 -0.0000097752 52)\\'><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.2\\'/><stop stop-color=\\'rgba(210,255,197,1)\\' offset=\\'0.4\\'/><stop stop-color=\\'rgba(164,255,139,1)\\' offset=\\'0.6\\'/><stop stop-color=\\'rgba(210,207,193,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(255,159,247,1)\\' offset=\\'0.9\\'/></radialGradient></defs></svg>')" }} data-name="Button">
        <p className="font-['Russo_One:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[12px] text-center tracking-[0.72px] uppercase whitespace-nowrap">OK</p>
      </div>
    </div>
  );
}

export default function Component03BsMoreEarningTapButtonMoreEarning() {
  return (
    <div className="bg-[rgba(0,0,0,0.72)] relative size-full" data-name="03_BS — More Earning [tap: Button More earning]">
      <BottomSheet />
    </div>
  );
}