import svgPaths from "./svg-8a7k471g9k";
import imgBackgroundBalance from "./660710f2d8ee5f471454465a75ece0359e81cbb2.png";
import imgCoins from "./70aac96d9ca5e80b010a6ffb99f6b5af56034fa2.png";
import imgCoins1 from "./cd03d61c12621224b8441f3352e08e9cf40d64ef.png";
import imgGlasses from "./976c15a1a00cfd02e86a04bad8a500efdf5d4139.png";
import imgIcon from "./161bb5b3f6c5a1cbc6c6ec97b124a653ea25cd1d.png";
import imgGlasses1 from "./c0e0183c2c6a6825d8a7ad38511b755d3b5f583e.png";
import imgGlasses2 from "./f1c379cd3fb4874ca931a7456f583f5ad621b164.png";

// Banner carousel tile icons (Figma CDN, valid ~7 days)
const imgTile1 = "https://www.figma.com/api/mcp/asset/5eab0d30-067a-475d-9c22-420dee46e310";
const imgTile2 = "https://www.figma.com/api/mcp/asset/e8b9cb09-2c4f-4dbc-8139-39473ed2d0c0";
const imgTile3 = "https://www.figma.com/api/mcp/asset/406d273d-d848-4e08-9b7a-8af791025a82";
const imgTile4 = "https://www.figma.com/api/mcp/asset/47c5d376-c7c8-4ebe-abf7-16f03d110e24";

const CAROUSEL_TILES = [
  { title: "How to earn Doppy", sub: "Instructions here", icon: imgTile1 },
  { title: "Become famous", sub: "Free video promotion", icon: imgTile2 },
  { title: "Withdraw DOPPY", sub: "to your card or wallet", icon: imgTile3 },
  { title: "Up to $15 per friend", sub: "invite & earn", icon: imgTile4 },
];

function BannerCarousel() {
  return (
    <div
      className="relative shrink-0 w-full"
      style={{ overflowX: "auto", scrollbarWidth: "none" } as React.CSSProperties}
      data-name="Tiles"
    >
      <div className="flex gap-[6px] items-stretch pl-[16px] pr-[16px]" style={{ width: "max-content" }}>
        {CAROUSEL_TILES.map(({ title, sub, icon }) => (
          <div
            key={title}
            className="bg-[rgba(255,255,255,0.1)] drop-shadow-[0px_0px_6px_rgba(0,0,0,0.25)] flex flex-col gap-[4px] items-start pb-[44px] pt-[12px] px-[12px] relative rounded-[24px] shrink-0 w-[150px]"
          >
            <p className="font-['Russo_One:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.14px] w-full">{title}</p>
            <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[12px] text-white tracking-[0.06px] w-full">{sub}</p>
            <div className="absolute bottom-0 flex items-start p-[4px] right-0 rounded-[20px] w-[50px]">
              <div className="aspect-square flex-1 min-w-0 relative rounded-[12px] overflow-hidden">
                <img alt="" className="absolute left-[-16.67%] max-w-none size-[133.33%] top-[-16.67%]" src={icon} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DoppyCoin() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="DOPPY_coin">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Coins">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCoins} />
      </div>
      <p className="font-['Russo_One:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[12px] text-shadow-[0px_0px_2px_rgba(0,0,0,0.3)] text-white tracking-[0.12px] whitespace-nowrap">47,5</p>
    </div>
  );
}

function LumyCoin() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="LUMY_coin">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Coins">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCoins1} />
      </div>
      <p className="font-['Russo_One:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[12px] text-shadow-[0px_0px_2px_rgba(0,0,0,0.3)] text-white tracking-[0.12px] whitespace-nowrap">47,5</p>
    </div>
  );
}

function Coins() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Coins">
      <DoppyCoin />
      <LumyCoin />
    </div>
  );
}

function Top() {
  return (
    <div className="relative shrink-0 w-full" data-name="Top">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative size-full">
          <div className="bg-[rgba(22,22,22,0.8)] relative rounded-[20px] shrink-0 w-full" data-name="TopBar_component">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between pl-[8px] pr-[6px] py-[6px] relative size-full">
                <Coins />
                <div className="content-stretch flex h-[40px] items-center justify-center px-[16px] py-[12px] relative rounded-[16px] shrink-0" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 82 40\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(8.2 -4 4.7407 8.13 -0.0000024438 40)\\'><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.2\\'/><stop stop-color=\\'rgba(210,255,197,1)\\' offset=\\'0.4\\'/><stop stop-color=\\'rgba(164,255,139,1)\\' offset=\\'0.6\\'/><stop stop-color=\\'rgba(210,207,193,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(255,159,247,1)\\' offset=\\'0.9\\'/></radialGradient></defs></svg>')" }} data-name="Button">
                  <p className="font-['Russo_One:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#161616] text-[12px] text-center tracking-[0.72px] uppercase whitespace-nowrap">withdraw</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Top1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Top">
      <p className="font-['Russo_One:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-white tracking-[0.2px] whitespace-nowrap">My income</p>
    </div>
  );
}

function TitleContent() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Title content">
      <p className="flex-[1_0_0] font-['Montserrat:Medium',sans-serif] leading-[14px] min-w-px not-italic relative text-[12px] text-white tracking-[0.06px]">Earnings boost</p>
      <div className="relative shrink-0 size-[16px]" data-name="question.Circle">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[13.333px] top-1/2" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path clipRule="evenodd" d={svgPaths.p2987a000} fill="var(--fill-0, #B9B9B9)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
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

function Value() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Value">
      <p className="font-['Russo_One:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap">50% used</p>
    </div>
  );
}

function ProgressBarBoostUsing() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0 w-full" data-name="Progress bar boost using">
      <TitleContent />
      <ProgressBar />
      <Value />
    </div>
  );
}

function Info() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[20px]" data-name="Info">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between py-[16px] relative size-full">
          <ProgressBarBoostUsing />
          <div className="bg-[rgba(255,255,255,0.15)] h-[32px] relative rounded-[12px] shrink-0 w-full" data-name="Button">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[16px] py-[10px] relative size-full">
                <p className="font-['Russo_One:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[10px] text-center text-white tracking-[0.8px] uppercase whitespace-nowrap">What is a boost?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Circle() {
  return (
    <div className="content-stretch flex h-[24px] items-center p-[4px] relative rounded-[10px] shrink-0" style={{ backgroundImage: "linear-gradient(98.4244deg, rgb(0, 149, 255) 0%, rgb(42, 195, 0) 100%)" }} data-name="Circle">
      <div className="relative shrink-0 size-[16px]" data-name="x / Disclosure">
        <div className="absolute inset-[20%_29.71%_20%_35%]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.64667 9.6">
            <path d={svgPaths.p118089f0} fill="var(--fill-0, white)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonMoreEarning() {
  return (
    <div className="bg-[#161616] flex-[1_0_0] min-w-px relative rounded-[14px]" data-name="Button [More earning]">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[12px] pr-[8px] py-[8px] relative size-full">
          <p className="font-['Russo_One:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[10px] text-white tracking-[0.8px] uppercase whitespace-nowrap">Earn more</p>
          <Circle />
        </div>
      </div>
    </div>
  );
}

function ActionButton() {
  return (
    <div className="relative shrink-0 w-full" data-name="Action Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <ButtonMoreEarning />
        </div>
      </div>
    </div>
  );
}

function BoostCard() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col gap-[12px] items-center pb-[12px] relative rounded-[20px] shrink-0 w-full" data-name="Boost card">
      <div className="bg-[rgba(255,255,255,0.05)] relative rounded-[20px] shrink-0 w-full" data-name="Equipped Card">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-center pr-[12px] relative size-full">
            <div className="relative rounded-[20px] shrink-0 size-[130px]" data-name="Pic">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[130px] top-1/2" data-name="Glasses">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGlasses} />
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
              <Info />
            </div>
          </div>
        </div>
      </div>
      <ActionButton />
    </div>
  );
}

function WidgetTitle() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Widget title">
      <div className="flex-[1_0_0] font-['Montserrat:Medium',sans-serif] leading-[0] min-w-px not-italic relative text-[12px] text-white tracking-[0.06px]">
        <p className="leading-[14px] mb-0">Earned</p>
        <p className="leading-[14px]">today</p>
      </div>
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

function TitleContent1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title content">
      <WidgetTitle />
      <p className="font-['Russo_One:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.16px] whitespace-nowrap">$1,2</p>
    </div>
  );
}

function ProgressBar1() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="Progress Bar">
      <div className="bg-gradient-to-r col-1 from-[#fd00e9] h-[4px] ml-0 mt-0 rounded-[100px] row-1 to-[#00ffed] w-[43.63%]" data-name="Active Segment" />
      <div className="bg-[rgba(255,255,255,0.1)] col-1 h-[4px] ml-0 mt-0 rounded-[100px] row-1 w-full" data-name="Active Segment" />
    </div>
  );
}

function WidgetTitle1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Widget title">
      <div className="flex-[1_0_0] font-['Montserrat:Medium',sans-serif] leading-[0] min-w-px not-italic relative text-[12px] text-white tracking-[0.06px]">
        <p className="leading-[14px] mb-0">Available</p>
        <p className="leading-[14px]">minutes</p>
      </div>
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

function Slash() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Slash">
      <p className="relative shrink-0">/</p>
      <p className="relative shrink-0">5 minutes</p>
    </div>
  );
}

function Amount() {
  return (
    <div className="content-center flex flex-wrap font-['Russo_One:Regular',sans-serif] gap-[4px] items-center leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[0.16px] whitespace-nowrap" data-name="Amount">
      <p className="relative shrink-0">2</p>
      <Slash />
    </div>
  );
}

function TitleContent2() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Title content">
      <WidgetTitle1 />
      <Amount />
    </div>
  );
}

function ProgressBar2() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="Progress Bar">
      <div className="bg-gradient-to-r col-1 from-[#fd00e9] h-[4px] ml-0 mt-0 rounded-[100px] row-1 to-[#00ffed] w-[43.63%]" data-name="Active Segment" />
      <div className="bg-[rgba(255,255,255,0.1)] col-1 h-[4px] ml-0 mt-0 rounded-[100px] row-1 w-full" data-name="Active Segment" />
    </div>
  );
}

function Widgets() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Widgets">
      <div className="bg-[rgba(255,255,255,0.1)] drop-shadow-[0px_4px_5px_rgba(0,0,0,0.15)] flex-[1_0_0] min-w-px relative rounded-[20px]" data-name="Earned today widget">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[12px] relative size-full">
            <TitleContent1 />
            <ProgressBar1 />
            <p className="font-['Montserrat:Medium',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#b9b9b9] text-[10px] tracking-[0.05px] w-full">
              Daily max
              <br aria-hidden="true" />
              $2,05
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.1)] drop-shadow-[0px_4px_5px_rgba(0,0,0,0.15)] flex-[1_0_0] min-w-px relative rounded-[20px]" data-name="Available minutes widget">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[12px] relative size-full">
            <TitleContent2 />
            <ProgressBar2 />
            <div className="font-['Montserrat:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#b9b9b9] text-[10px] tracking-[0.05px] w-full">
              <p className="leading-[12px] mb-0">+4 minutes</p>
              <p className="leading-[12px]">in 6 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BoostInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Boost Info">
      <BoostCard />
      <Widgets />
    </div>
  );
}

function MyGlasses() {
  return (
    <div className="relative shrink-0 w-full" data-name="My Glasses">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] relative size-full">
        <Top1 />
        <BoostInfo />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative text-white" data-name="Text">
      <p className="font-['Russo_One:Regular',sans-serif] leading-[20px] relative shrink-0 text-[16px] tracking-[0.16px] w-full">How to earn DOPPY</p>
      <p className="font-['Montserrat:Medium',sans-serif] leading-[16px] overflow-hidden relative shrink-0 text-[14px] text-ellipsis tracking-[0.14px] w-full">Instructions here</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px not-italic relative text-white" data-name="Text">
      <p className="font-['Russo_One:Regular',sans-serif] leading-[20px] relative shrink-0 text-[16px] tracking-[0.16px] w-full">Become famous</p>
      <p className="font-['Montserrat:Medium',sans-serif] leading-[16px] overflow-hidden relative shrink-0 text-[14px] text-ellipsis tracking-[0.14px] w-full">Free video promotion</p>
    </div>
  );
}

function AmountLable() {
  return (
    <div className="bg-[#fd0065] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="AmountLable">
      <p className="font-['Russo_One:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[0.24px] whitespace-nowrap">{`$1500 `}</p>
    </div>
  );
}

function Lable() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="Lable">
      <p className="font-['Russo_One:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-center text-white tracking-[0.2px] whitespace-nowrap">{`Get `}</p>
      <AmountLable />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-full">
      <Lable />
      <p className="font-['Russo_One:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-center text-white tracking-[0.2px] whitespace-nowrap">in Doppy coin</p>
    </div>
  );
}

function TaskDescription() {
  return (
    <div className="content-stretch flex gap-[8px] items-center leading-[16px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.14px] w-full" data-name="Task_Description">
      <p className="flex-[1_0_0] font-['Montserrat:Medium',sans-serif] min-w-px relative">Catch 3 rewards in the feed every day</p>
      <p className="font-['Russo_One:Regular',sans-serif] relative shrink-0 text-right whitespace-nowrap">1/365 days</p>
    </div>
  );
}

function Segmet() {
  return (
    <div className="flex-[1_0_0] grid-rows-[max-content] inline-grid leading-[0] min-w-px place-items-start relative" data-name="Segmet 1">
      <div className="bg-[rgba(255,255,255,0.15)] col-1 h-[8px] ml-0 mt-0 rounded-[100px] row-1 w-full" data-name="Idle" />
      <div className="bg-white col-1 h-[8px] ml-0 mt-0 rounded-[100px] row-1 w-[7px]" data-name="Done" />
    </div>
  );
}

function TaskContent() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center py-[8px] relative shrink-0 w-full" data-name="Task_Content_1">
      <TaskDescription />
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Progress Bar">
        <Segmet />
      </div>
    </div>
  );
}

function Bubbles() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bubbles">
      <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] relative size-full">
        <div className="hidden" data-name="Big Banner">
          <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] p-[16px] relative size-full">
              <div className="bg-[rgba(255,255,255,0.05)] content-stretch flex items-start p-[12px] relative rounded-[20px] shrink-0" data-name="Icon block">
                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="DOPPY">
                  <div className="-translate-x-1/2 absolute aspect-[1000/1000] bottom-[7.5%] left-1/2 top-[7.5%]" data-name="Coins DOPPY">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCoins} />
                  </div>
                </div>
              </div>
              <Text />
              <div className="relative shrink-0 size-[16px]" data-name="x / Disclosure">
                <div className="absolute inset-[20%_29.71%_20%_35%]" data-name="vector">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.64667 9.6">
                    <path d={svgPaths.p118089f0} fill="var(--fill-0, white)" id="vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden" data-name="Big Banner">
          <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] p-[16px] relative size-full">
              <div className="bg-gradient-to-b content-stretch flex from-[rgba(255,255,255,0.1)] items-start p-[4px] relative rounded-[20px] shrink-0 to-[rgba(255,255,255,0.3)]" data-name="Icon block">
                <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(255,255,255,0.7)] border-solid inset-0 pointer-events-none rounded-[20px]" />
                <div className="relative shrink-0 size-[40px]" data-name="Icon">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute left-[-16.67%] max-w-none size-[133.33%] top-[-16.67%]" src={imgIcon} />
                  </div>
                </div>
              </div>
              <Text1 />
              <div className="relative shrink-0 size-[16px]" data-name="x / Disclosure">
                <div className="absolute inset-[20%_29.71%_20%_35%]" data-name="vector">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.64667 9.6">
                    <path d={svgPaths.p118089f0} fill="var(--fill-0, white)" id="vector" />
                  </svg>
                </div>
              </div>
              <div className="absolute content-stretch flex gap-[4px] h-[20px] items-center justify-center px-[16px] py-[2px] right-0 rounded-bl-[20px] rounded-tr-[20px] top-0" style={{ backgroundImage: "linear-gradient(18.8918deg, rgb(255, 255, 255) 22.075%, rgba(255, 255, 255, 0.72) 74.302%)" }} data-name="Text Badge">
                <div className="flex flex-col font-['Russo_One:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161616] text-[12px] text-center tracking-[0.12px] whitespace-nowrap">
                  <p className="leading-[14px]">New</p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[0.5px] border-[rgba(255,255,255,0.7)] border-solid inset-0 pointer-events-none rounded-[20px]" />
        </div>
        <div className="relative rounded-[24px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(121.948deg, rgba(110, 255, 70, 0.7) 0%, rgba(110, 255, 70, 0.3) 100%)" }} data-name="Widget_Streak">
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col gap-[12px] items-center justify-center px-[12px] py-[20px] relative size-full">
              <Frame />
              <TaskContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PurchaseHistory() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Purchase History">
      <div className="flex flex-col font-['Russo_One:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b9b9b9] text-[14px] tracking-[0.14px] whitespace-nowrap">
        <p className="leading-[16px]">History</p>
      </div>
      <div className="relative shrink-0 size-[16px]" data-name="x / Disclosure">
        <div className="absolute inset-[20%_29.71%_20%_35%]" data-name="vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.64667 9.6">
            <path d={svgPaths.p118089f0} fill="var(--fill-0, #B9B9B9)" id="vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Top2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Top">
      <p className="font-['Russo_One:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-white tracking-[0.2px] whitespace-nowrap">Boosts</p>
      <PurchaseHistory />
    </div>
  );
}

function Pic() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Pic">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[130px]" data-name="Glasses">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGlasses1} />
      </div>
      <div className="col-1 h-[37.143px] ml-0 mt-[92.86px] rounded-[20px] row-1 w-[130px]" data-name="Darken" />
      <p className="col-1 font-['Montserrat:Medium',sans-serif] leading-[11.143px] ml-[7.43px] mt-[113.29px] not-italic relative row-1 text-[9.286px] text-[transparent] tracking-[0.0464px] whitespace-nowrap">ID:4444444</p>
      <div className="col-1 flex flex-col font-['Montserrat:Bold',sans-serif] justify-end ml-[7.43px] mt-[102.14px] not-italic relative row-1 text-[9.286px] text-[transparent] tracking-[0.3714px] uppercase whitespace-nowrap">
        <p className="leading-[11.143px]">smart</p>
      </div>
    </div>
  );
}

function ProgressBar3() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="Progress Bar">
      <div className="bg-gradient-to-r col-1 from-[#fd00e9] h-[4px] ml-0 mt-0 rounded-[100px] row-1 to-[#00ffed] w-[43.63%]" data-name="Active Segment" />
      <div className="bg-[rgba(255,255,255,0.1)] col-1 h-[4px] ml-0 mt-0 rounded-[100px] row-1 w-full" data-name="Active Segment" />
    </div>
  );
}

function Value1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Value">
      <p className="font-['Russo_One:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap">50% done</p>
    </div>
  );
}

function Top3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end relative shrink-0 w-full" data-name="Top">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[14px] min-w-full not-italic relative shrink-0 text-[12px] text-white tracking-[0.06px] w-[min-content]">Earnings boost</p>
      <ProgressBar3 />
      <Value1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[20px]" style={{ backgroundImage: "linear-gradient(215.41deg, rgba(253, 0, 233, 0.05) 0%, rgba(255, 255, 255, 0.05) 39.629%, rgba(0, 255, 237, 0.1) 79.257%)" }} data-name="Content">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[12px] relative size-full">
          <Top3 />
          <div className="h-[32px] relative rounded-[12px] shrink-0 w-full" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 174 32\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(17.4 -3.2 10.06 6.504 -0.0000051856 32)\\'><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.2\\'/><stop stop-color=\\'rgba(210,255,197,1)\\' offset=\\'0.4\\'/><stop stop-color=\\'rgba(164,255,139,1)\\' offset=\\'0.6\\'/><stop stop-color=\\'rgba(210,207,193,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(255,159,247,1)\\' offset=\\'0.9\\'/></radialGradient></defs></svg>')" }} data-name="Button">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[16px] py-[10px] relative size-full">
                <p className="font-['Russo_One:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[10px] text-black text-center tracking-[0.8px] uppercase whitespace-nowrap">activate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Pic1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] opacity-50 place-items-start relative shrink-0" data-name="Pic">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[130px]" data-name="Glasses">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGlasses2} />
      </div>
      <div className="col-1 h-[37.143px] ml-0 mt-[92.86px] rounded-[20px] row-1 w-[130px]" data-name="Darken" />
      <p className="col-1 font-['Montserrat:Medium',sans-serif] leading-[11.143px] ml-[7.43px] mt-[113.29px] not-italic relative row-1 text-[9.286px] text-[transparent] tracking-[0.0464px] whitespace-nowrap">ID:4444444</p>
      <div className="col-1 flex flex-col font-['Montserrat:Bold',sans-serif] justify-end ml-[7.43px] mt-[102.14px] not-italic relative row-1 text-[9.286px] text-[transparent] tracking-[0.3714px] uppercase whitespace-nowrap">
        <p className="leading-[11.143px]">smart</p>
      </div>
    </div>
  );
}

function ProgressBar4() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="Progress Bar">
      <div className="bg-gradient-to-r col-1 from-[#fd00e9] h-[4px] ml-0 mt-0 rounded-[100px] row-1 to-[#00ffed] w-full" data-name="Active Segment" />
      <div className="bg-[rgba(255,255,255,0.1)] col-1 h-[4px] ml-0 mt-0 rounded-[100px] row-1 w-[95.56%]" data-name="Active Segment" />
    </div>
  );
}

function Value2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Value">
      <p className="font-['Russo_One:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap">100% done</p>
    </div>
  );
}

function Top4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end opacity-50 relative shrink-0 w-full" data-name="Top">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[14px] min-w-full not-italic relative shrink-0 text-[12px] text-white tracking-[0.06px] w-[min-content]">Earnings boost</p>
      <ProgressBar4 />
      <Value2 />
    </div>
  );
}

function Content2() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[20px]" style={{ backgroundImage: "linear-gradient(215.41deg, rgba(253, 0, 233, 0.05) 0%, rgba(255, 255, 255, 0.05) 39.629%, rgba(0, 255, 237, 0.1) 79.257%)" }} data-name="Content">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[12px] relative size-full">
          <Top4 />
          <div className="h-[32px] opacity-50 relative shrink-0 w-full" data-name="Button">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[16px] py-[10px] relative size-full">
                <p className="font-['Russo_One:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[#b9b9b9] text-[10px] text-center tracking-[0.8px] uppercase whitespace-nowrap">Expired</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stock() {
  return (
    <div className="relative shrink-0 w-full" data-name="Stock">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] relative size-full">
        <Top2 />
        <div className="content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 w-full" data-name="Stock Glasses">
          <Pic />
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Content1 />
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 w-full" data-name="Stock Glasses">
          <Pic1 />
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Content2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function SegmentName() {
  return (
    <div className="relative shrink-0 w-full" data-name="Segment Name">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['Russo_One:Regular',sans-serif] leading-[24px] min-w-px not-italic relative text-[20px] text-white tracking-[0.2px]">More</p>
        </div>
      </div>
    </div>
  );
}

function Cells() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Cells">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Cell">
        <div className="content-stretch flex gap-[12px] h-[52px] items-center py-[6px] relative shrink-0 w-full" data-name="x / Content">
          <div className="content-stretch flex items-center pl-[20px] relative shrink-0" data-name="x / Left Item">
            <div className="relative shrink-0 size-[24px]" data-name="Heart.Rounded">
              <div className="-translate-x-1/2 absolute aspect-[20/18] bottom-[10.42%] left-1/2 top-[10.42%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 19">
                  <path d={svgPaths.p226d03f0} fill="var(--fill-0, #B9B9B9)" id="vector" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative" data-name="x / Text">
            <p className="font-['Montserrat:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap">Support</p>
          </div>
          <div className="content-stretch flex items-center justify-end pr-[16px] relative shrink-0" data-name="x / Right Item">
            <div className="relative shrink-0 size-[20px]" data-name="x / Disclosure">
              <div className="absolute inset-[20%_29.71%_20%_35%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.05834 12">
                  <path d={svgPaths.p21ad5200} fill="var(--fill-0, #B9B9B9)" id="vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Cell">
        <div className="content-stretch flex gap-[12px] h-[52px] items-center py-[6px] relative shrink-0 w-full" data-name="x / Content">
          <div className="content-stretch flex items-center pl-[20px] relative shrink-0" data-name="x / Left Item">
            <div className="relative shrink-0 size-[24px]" data-name="Arrow.Round.Back">
              <div className="absolute inset-[8.33%_8.33%_8.33%_8.47%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9673 20">
                  <g id="vector">
                    <path d={svgPaths.p28cf5f00} fill="var(--fill-0, #B9B9B9)" />
                    <path d={svgPaths.p643b400} fill="var(--fill-0, #B9B9B9)" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative" data-name="x / Text">
            <p className="font-['Montserrat:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap">Purchase history</p>
          </div>
          <div className="content-stretch flex items-center justify-end pr-[16px] relative shrink-0" data-name="x / Right Item">
            <div className="relative shrink-0 size-[20px]" data-name="x / Disclosure">
              <div className="absolute inset-[20%_29.71%_20%_35%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.05834 12">
                  <path d={svgPaths.p21ad5200} fill="var(--fill-0, #B9B9B9)" id="vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Cell">
        <div className="content-stretch flex gap-[12px] h-[52px] items-center py-[6px] relative shrink-0 w-full" data-name="x / Content">
          <div className="content-stretch flex items-center pl-[20px] relative shrink-0" data-name="x / Left Item">
            <div className="relative shrink-0 size-[24px]" data-name="Paper.Plane">
              <div className="absolute inset-[12.5%_8.33%_12.68%_8.33%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17.956">
                  <path clipRule="evenodd" d={svgPaths.p3f23f700} fill="var(--fill-0, #B9B9B9)" fillRule="evenodd" id="vector" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative" data-name="x / Text">
            <p className="font-['Montserrat:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap">Telegram</p>
          </div>
          <div className="content-stretch flex items-center justify-end pr-[16px] relative shrink-0" data-name="x / Right Item">
            <div className="relative shrink-0 size-[20px]" data-name="x / Disclosure">
              <div className="absolute inset-[20%_29.71%_20%_35%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.05834 12">
                  <path d={svgPaths.p21ad5200} fill="var(--fill-0, #B9B9B9)" id="vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Cell">
        <div className="content-stretch flex gap-[12px] h-[52px] items-center py-[6px] relative shrink-0 w-full" data-name="x / Content">
          <div className="content-stretch flex items-center pl-[20px] relative shrink-0" data-name="x / Left Item">
            <div className="relative shrink-0 size-[24px]" data-name="Triangle.In.Square">
              <div className="absolute inset-[8.33%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g id="vector">
                    <path clipRule="evenodd" d={svgPaths.p22983d00} fill="var(--fill-0, #B9B9B9)" fillRule="evenodd" />
                    <path d={svgPaths.p139a6e00} fill="var(--fill-0, #B9B9B9)" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative" data-name="x / Text">
            <p className="font-['Montserrat:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap">WTF</p>
          </div>
          <div className="content-stretch flex items-center justify-end pr-[16px] relative shrink-0" data-name="x / Right Item">
            <div className="relative shrink-0 size-[20px]" data-name="x / Disclosure">
              <div className="absolute inset-[20%_29.71%_20%_35%]" data-name="vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.05834 12">
                  <path d={svgPaths.p21ad5200} fill="var(--fill-0, #B9B9B9)" id="vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function More1() {
  return (
    <div className="bg-[#242424] content-stretch flex flex-col items-center pb-[8px] pt-[20px] relative rounded-[24px] shrink-0 w-full" data-name="More">
      <SegmentName />
      <Cells />
    </div>
  );
}

function More() {
  return (
    <div className="relative shrink-0 w-full" data-name="More">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative size-full">
          <More1 />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-0 pt-[8px] right-0 top-[24px]" data-name="Content">
      <Top />
      <BannerCarousel />
      <MyGlasses />
      <Bubbles />
      <Stock />
      <More />
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Tabs">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-center min-w-px relative" data-name="x / Item">
        <div className="relative shrink-0 size-[28px]" data-name="Tabbar / Feed">
          <div className="absolute inset-[17.86%_0_19.2%_0]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 17.6253">
              <g id="Vector">
                <path d={svgPaths.p38962300} fill="white" />
                <path d={svgPaths.p170bd800} fill="white" />
              </g>
            </svg>
          </div>
        </div>
        <p className="font-['Montserrat:Medium',sans-serif] leading-[12px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.12px] whitespace-nowrap">Watch</p>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-center min-w-px relative" data-name="x / Item">
        <div className="relative shrink-0 size-[28px]" data-name="Tabbar / Add">
          <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
            <div className="-rotate-180 -scale-x-100 flex-none h-[100cqh] w-[100cqw]">
              <div className="relative size-full" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                  <path d={svgPaths.p2092c1f0} fill="var(--fill-0, white)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className="font-['Montserrat:Medium',sans-serif] leading-[12px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.12px] whitespace-nowrap">Create</p>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-center min-w-px relative" data-name="x / Item">
        <div className="relative shrink-0 size-[28px]" data-name="Tabbar / Earn">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[23px] left-1/2 top-1/2 w-[20px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 23">
              <g id="Vector">
                <path d={svgPaths.p12ddee00} fill="var(--fill-0, #6EFF46)" />
                <path d={svgPaths.p11052a00} fill="var(--fill-0, #6EFF46)" />
                <path d={svgPaths.p2d161b80} fill="var(--fill-0, #6EFF46)" />
                <path d={svgPaths.p3fab7180} fill="var(--fill-0, #6EFF46)" />
                <path d={svgPaths.p4db1a50} fill="var(--fill-0, #6EFF46)" />
              </g>
            </svg>
          </div>
        </div>
        <p className="font-['Montserrat:Medium',sans-serif] leading-[12px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.12px] whitespace-nowrap">Balance</p>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-center min-w-px relative" data-name="x / Item">
        <div className="relative shrink-0 size-[28px]" data-name="Tabbar / Market">
          <div className="absolute inset-[5.36%_5.36%_8.93%_5.36%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 24">
              <g id="Vector">
                <path d={svgPaths.p2d9f4100} fill="white" />
                <path d={svgPaths.p2e391d00} fill="white" />
                <path d={svgPaths.p2551ba00} fill="white" />
                <path d={svgPaths.p3eda1050} fill="white" />
                <path d={svgPaths.p27a2f600} fill="white" />
                <path d={svgPaths.p2c38b800} fill="white" />
                <path d={svgPaths.p1fb45680} fill="white" />
              </g>
            </svg>
          </div>
        </div>
        <p className="font-['Montserrat:Medium',sans-serif] leading-[12px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.12px] whitespace-nowrap">Market</p>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-center min-w-px relative" data-name="x / Item">
        <div className="relative shrink-0 size-[28px]" data-name="Tabbar / Profile 2">
          <div className="absolute inset-[10.71%_14.29%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
              <g id="Vector">
                <path d={svgPaths.p3d328c80} fill="var(--fill-0, white)" />
                <path d={svgPaths.p3e9af00} fill="var(--fill-0, white)" />
              </g>
            </svg>
          </div>
        </div>
        <p className="font-['Montserrat:Medium',sans-serif] leading-[12px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.12px] whitespace-nowrap">Profile</p>
      </div>
    </div>
  );
}

function Clock() {
  return (
    <div className="absolute content-stretch flex font-['Roboto:Regular',sans-serif] font-normal items-start leading-[normal] left-[16px] text-[12px] text-white top-[5px] whitespace-nowrap" data-name="clock">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        09
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        :
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        30
      </p>
    </div>
  );
}

function AndroidBluetooth() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Android/Bluetooth">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Android/Bluetooth">
          <path d={svgPaths.p13bfe232} fill="var(--fill-0, white)" id="bluetooth" />
        </g>
      </svg>
    </div>
  );
}

function AndroidWiFi() {
  return (
    <div className="h-[14px] relative shrink-0 w-[15px]" data-name="Android/WiFi">
      <div className="absolute inset-[0_-6.67%_-1.73%_-6.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 14.2439">
          <g id="Android/WiFi">
            <path d={svgPaths.p7b6dac0} fill="var(--fill-0, white)" id="Bar 1" />
            <path d={svgPaths.p215fdf00} id="Bar 2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p174b01c0} id="Bar 3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p6277d00} id="Bar 4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function AndroidCellularSignal() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-[18px]" data-name="Android/Cellular Signal">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[0_55.56%_56.25%_0] leading-[normal] text-[6px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        5G
      </p>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
        <g id="bars">
          <path d={svgPaths.p2f573f40} fill="var(--fill-0, white)" id="Bar 1" />
          <path d={svgPaths.p34c12480} fill="var(--fill-0, white)" id="Bar 2" />
          <path d={svgPaths.pd464480} fill="var(--fill-0, white)" id="Bar 3" />
          <path d={svgPaths.p8b3fe00} fill="var(--fill-0, white)" id="Bar 4" />
        </g>
      </svg>
    </div>
  );
}

function AndroidBattery() {
  return (
    <div className="h-[11px] relative shrink-0 w-[18.5px]" data-name="Android/Battery">
      <div className="absolute inset-[-4.55%_-2.7%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 12">
          <g id="Android/Battery">
            <path d={svgPaths.p189ab772} id="outline" stroke="var(--stroke-0, white)" />
            <rect fill="var(--fill-0, white)" height="8" id="indicator" rx="2" width="14" x="2" y="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icons() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[8px] items-center justify-end right-[16px] top-1/2 w-[89px]" data-name="Icons">
      <AndroidBluetooth />
      <AndroidWiFi />
      <AndroidCellularSignal />
      <AndroidBattery />
    </div>
  );
}

export default function Component01MainBalance() {
  return (
    <div className="bg-[#161616] overflow-clip relative rounded-[32px] size-full" data-name="01_Main — Balance">
      <div className="absolute h-[800px] left-0 top-0 w-[620px]" data-name="Background_Balance">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBackgroundBalance} />
      </div>
      <Content />
      <div className="absolute backdrop-blur-[10px] bg-[rgba(22,22,22,0.22)] bottom-0 content-stretch flex flex-col gap-[4px] items-start justify-end left-0 pt-[8px] right-0 rounded-tl-[28px] rounded-tr-[28px]" data-name="Doppy Tab Bar">
        <Tabs />
        <div className="h-[14px] relative shrink-0 w-full" data-name="Android / Home Indicator">
          <div className="absolute bg-white h-[2px] left-[148px] rounded-[32px] top-[8px] w-[64px]" data-name="Rectangle" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[24px] left-1/2 top-0 w-[360px]" data-name="Android / Status Bar">
        <Clock />
        <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[49px] text-[12px] text-white top-[5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          PM
        </p>
        <Icons />
      </div>
    </div>
  );
}