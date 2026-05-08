import imgGlasses from "./f1c379cd3fb4874ca931a7456f583f5ad621b164.png";

function Pic() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] opacity-50 place-items-start relative shrink-0" data-name="Pic">
      <div className="col-1 ml-0 mt-0 overflow-clip relative row-1 size-[130px]" data-name="Glasses">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGlasses} />
      </div>
      <div className="col-1 h-[37.143px] ml-0 mt-[92.86px] rounded-[20px] row-1 w-[130px]" data-name="Darken" />
      <p className="col-1 font-['Montserrat:Medium',sans-serif] leading-[11.143px] ml-[7.43px] mt-[113.29px] not-italic relative row-1 text-[9.286px] text-[transparent] tracking-[0.0464px] whitespace-nowrap">ID:4444444</p>
      <div className="col-1 flex flex-col font-['Montserrat:Bold',sans-serif] justify-end ml-[7.43px] mt-[102.14px] not-italic relative row-1 text-[9.286px] text-[transparent] tracking-[0.3714px] uppercase whitespace-nowrap">
        <p className="leading-[11.143px]">smart</p>
      </div>
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full" data-name="Progress Bar">
      <div className="bg-gradient-to-r col-1 from-[#fd00e9] h-[4px] ml-0 mt-0 rounded-[100px] row-1 to-[#00ffed] w-full" data-name="Active Segment" />
      <div className="bg-[rgba(255,255,255,0.1)] col-1 h-[4px] ml-0 mt-0 rounded-[100px] row-1 w-[95.56%]" data-name="Active Segment" />
    </div>
  );
}

function Value() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Value">
      <p className="font-['Russo_One:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap">100% done</p>
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-end opacity-50 relative shrink-0 w-full" data-name="Top">
      <p className="font-['Montserrat:Medium',sans-serif] leading-[14px] min-w-full not-italic relative shrink-0 text-[12px] text-white tracking-[0.06px] w-[min-content]">Earning boost</p>
      <ProgressBar />
      <Value />
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[20px]" style={{ backgroundImage: "linear-gradient(215.41deg, rgba(253, 0, 233, 0.05) 0%, rgba(255, 255, 255, 0.05) 39.629%, rgba(0, 255, 237, 0.1) 79.257%)" }} data-name="Content">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between p-[12px] relative size-full">
          <Top />
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

export default function StockGlasses() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[24px] size-full" data-name="Stock Glasses">
      <Pic />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Content />
      </div>
    </div>
  );
}