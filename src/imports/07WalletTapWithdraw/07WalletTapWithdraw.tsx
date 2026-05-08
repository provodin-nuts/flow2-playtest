// Remote Figma assets (valid ~7 days)
const imgHeaderBg = "https://www.figma.com/api/mcp/asset/eac59dbf-35bb-462b-b23e-f5763ac7a9f4";
const imgFireEmoji = "https://www.figma.com/api/mcp/asset/8eadf5b9-dfcf-4b22-afd1-806e463151dd";
const imgCoinsDoppy = "https://www.figma.com/api/mcp/asset/0622c05e-ad50-4941-92a4-1483efd17bed";
const imgCheel = "https://www.figma.com/api/mcp/asset/fec955df-ebc7-4daa-9467-ce440c3d3023";
const imgCoinsBnh = "https://www.figma.com/api/mcp/asset/bef7bb48-2450-4528-a782-4519068cc9d1";
const imgCoinsLumy = "https://www.figma.com/api/mcp/asset/3c268c5e-c94a-4960-8af9-c53df5a569d1";
const imgArrowLeft = "https://www.figma.com/api/mcp/asset/f64d69d4-5dd0-402e-97fc-2566f6af6e12";
const imgQuestionCircle = "https://www.figma.com/api/mcp/asset/2a54846d-0027-44e7-ac76-bb23eb60cfc2";
const imgInfoCircle = "https://www.figma.com/api/mcp/asset/8d17b068-0dcd-41fd-85b8-caf496889cd2";
const imgPolygon = "https://www.figma.com/api/mcp/asset/d7387022-f733-4c35-9fe6-c4ff1bb008ee";
const imgBluetooth = "https://www.figma.com/api/mcp/asset/8494baf0-03ec-4feb-b038-93dd4486d338";
const imgWifi = "https://www.figma.com/api/mcp/asset/7e273a08-a19a-47aa-ac42-d2808bed406a";
const imgSignal = "https://www.figma.com/api/mcp/asset/a692f17b-4686-449e-b3b7-f4703da6d88e";
const imgBattery = "https://www.figma.com/api/mcp/asset/9182b521-74f4-4c83-a177-5e7ce71c6a41";

const ACTIVATE_BTN_STYLE = {
  backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 264 40\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(26.4 -4 12 9 0 40)\\'><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.2\\'/><stop stop-color=\\'rgba(210,255,197,1)\\' offset=\\'0.4\\'/><stop stop-color=\\'rgba(164,255,139,1)\\' offset=\\'0.6\\'/><stop stop-color=\\'rgba(210,207,193,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(255,159,247,1)\\' offset=\\'0.9\\'/></radialGradient></defs></svg>')",
};

function StatusBar() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[360px]">
      <div className="absolute flex font-['Roboto:Regular',sans-serif] font-normal items-start leading-normal left-[16px] text-[12px] text-white top-[5px] whitespace-nowrap">
        <span style={{ fontVariationSettings: "'wdth' 100" }}>09</span>
        <span style={{ fontVariationSettings: "'wdth' 100" }}>:</span>
        <span style={{ fontVariationSettings: "'wdth' 100" }}>30</span>
      </div>
      <span className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-normal left-[49px] text-[12px] text-white top-[5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>PM</span>
      <div className="-translate-y-1/2 absolute flex gap-[8px] items-center justify-end right-[16px] top-1/2 w-[89px]">
        <div className="relative shrink-0 size-[14px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBluetooth} /></div>
        <div className="h-[14px] relative shrink-0 w-[15px]"><div className="absolute inset-[0_-6.67%_-1.73%_-6.67%]"><img alt="" className="block max-w-none size-full" src={imgWifi} /></div></div>
        <div className="h-[16px] overflow-clip relative shrink-0 w-[18px]">
          <span className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[0_55.56%_56.25%_0] leading-normal text-[6px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>5G</span>
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSignal} />
        </div>
        <div className="h-[11px] relative shrink-0 w-[18.5px]"><div className="absolute inset-[-4.55%_-2.7%]"><img alt="" className="block max-w-none size-full" src={imgBattery} /></div></div>
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <div className="absolute flex h-[64px] items-center justify-between left-0 top-[24px] w-[360px]">
      <div className="flex items-center pl-[16px] shrink-0 w-[127.5px]">
        <div className="relative shrink-0 size-[24px]" data-name="Arrow.Left">
          <div className="absolute flex inset-[21.92%_16.67%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]">
              <div className="relative size-full"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrowLeft} /></div>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Russo_One:Regular',sans-serif] leading-[16px] not-italic shrink-0 text-[14px] text-white text-center tracking-[0.14px] whitespace-nowrap">Wallet</p>
      <div className="flex items-end justify-end pr-[16px] shrink-0 w-[127.5px]">
        <div className="relative shrink-0 size-[24px]">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgQuestionCircle} />
          </div>
        </div>
      </div>
    </div>
  );
}

function StreakWidget() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] flex flex-col gap-[12px] items-center justify-center px-[12px] py-[20px] relative rounded-[24px] shrink-0 w-full" data-name="Widget_Streak">
      <p className="font-['Russo_One:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[20px] text-center text-white tracking-[0.2px] w-full">Unlock DOPPY Withdrawal</p>
      <div className="flex flex-col gap-[12px] items-center py-[8px] shrink-0 w-full">
        <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[14px] text-white text-center tracking-[0.14px] w-full">
          Visit the feed every day and collect 3 rewards — 3 days in a row, and withdrawal unlocks!
        </p>
        <div className="flex gap-[12px] items-start shrink-0">
          {[
            { label: "Day 1", done: true },
            { label: "Day 2", done: false },
            { label: "Day 3", done: false },
          ].map(({ label, done }) => (
            <div key={label} className="flex flex-col gap-[4px] items-center shrink-0">
              {done ? (
                <div className="overflow-clip relative shrink-0 size-[32px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFireEmoji} />
                </div>
              ) : (
                <div className="border-[2.667px] border-[#6e6e6e] border-solid relative rounded-full shrink-0 size-[32px]" />
              )}
              <p className="font-['Russo_One:Regular',sans-serif] leading-[16px] not-italic shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap">{label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.7)] border-solid flex flex-col gap-[8px] items-center justify-center px-[8px] py-[12px] relative rounded-[20px] shrink-0 w-full" data-name="Offer">
        <p className="font-['Russo_One:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-center text-white tracking-[0.32px] w-full">
          or activate the earnings boost<br aria-hidden="true" />and unlock withdrawal right away
        </p>
        <div className="h-[40px] relative rounded-[12px] shrink-0 w-full" style={ACTIVATE_BTN_STYLE} data-name="Button">
          <div className="flex items-center justify-center size-full">
            <p className="font-['Russo_One:Regular',sans-serif] leading-[16px] not-italic shrink-0 text-[#161616] text-[10px] text-center tracking-[0.8px] uppercase whitespace-nowrap">Activate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BalanceCard() {
  const rows = [
    { name: "DOPPY", sub: "1 ~ $2.63", amount: "144", usd: "~$378.72", icon: imgCoinsDoppy, iconStyle: {} },
    { name: "BNH", sub: "1 ~ $10.64", amount: "6", usd: "~$63.84", icon: imgCheel, iconStyle: {} },
    { name: "LUMY", sub: "", amount: "2", usd: "~$462.28", icon: imgCoinsLumy, iconStyle: {} },
  ];
  return (
    <div className="bg-[#242424] flex flex-col gap-[20px] items-start py-[24px] relative rounded-[32px] shrink-0 w-full" data-name="Balance">
      <div className="flex flex-col gap-[4px] items-start justify-center px-[16px] shrink-0">
        <div className="flex gap-[8px] items-center shrink-0">
          <p className="font-['Russo_One:Regular',sans-serif] leading-[28px] shrink-0 text-[24px] text-white tracking-[0.24px] whitespace-nowrap">≈$955.84</p>
          <div className="relative shrink-0 size-[24px]">
            <div className="absolute inset-[8.33%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgInfoCircle} /></div>
          </div>
        </div>
        <p className="font-['Russo_One:Regular',sans-serif] leading-[16px] not-italic shrink-0 text-[#b9b9b9] text-[14px] tracking-[0.28px] whitespace-nowrap">Balance</p>
      </div>
      <div className="flex flex-col gap-[8px] items-start shrink-0 w-full">
        {rows.map(({ name, sub, amount, usd, icon }) => (
          <div key={name} className="flex flex-col items-start shrink-0 w-full">
            <div className="flex gap-[12px] h-[52px] items-center pr-[16px] py-[6px] shrink-0 w-full">
              <div className="flex items-center pl-[12px] shrink-0">
                <div className="overflow-clip relative shrink-0 size-[40px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={icon} />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[2px] items-start justify-center min-w-0">
                <p className="font-['Russo_One:Regular',sans-serif] leading-[16px] not-italic shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap">{name}</p>
                {sub && <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[16px] shrink-0 text-[#b9b9b9] text-[14px] tracking-[0.14px] whitespace-nowrap">{sub}</p>}
              </div>
              <div className="flex flex-col gap-[2px] items-end justify-center leading-[16px] shrink-0 text-[14px] tracking-[0.14px] whitespace-nowrap">
                <p className="font-['Russo_One:Regular',sans-serif] not-italic shrink-0 text-white">{amount}</p>
                <p className="font-['Montserrat:Medium',sans-serif] font-medium shrink-0 text-[#b9b9b9]">{usd}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Banner365() {
  const rewards = [
    { label: "$7", active: false },
    { label: "$30", active: false },
    { label: "$500", active: false },
    { label: "$1500", active: true },
  ];
  return (
    <div
      className="border-[0.5px] border-[rgba(255,255,255,0.7)] border-solid flex flex-col gap-[12px] items-start justify-center overflow-clip p-[16px] relative rounded-[24px] shrink-0 w-full cursor-pointer"
      style={{ backgroundImage: "linear-gradient(121deg, rgba(110,255,70,0.7) 0%, rgba(110,255,70,0.3) 100%)" }}
      data-name="Banner 365"
    >
      <div className="flex flex-col gap-[2px] items-center shrink-0 w-full">
        <div className="flex gap-[8px] items-center justify-center shrink-0 w-full">
          <p className="font-['Russo_One:Regular',sans-serif] leading-[24px] not-italic shrink-0 text-[20px] text-center text-white tracking-[0.2px] whitespace-nowrap">Get </p>
          <div className="bg-[#e61515] flex items-center justify-center px-[12px] py-[4px] relative rounded-[12px] shrink-0">
            <p className="font-['Russo_One:Regular',sans-serif] leading-[28px] not-italic shrink-0 text-[24px] text-center text-white tracking-[0.24px] whitespace-nowrap">$1500 </p>
          </div>
        </div>
        <p className="font-['Russo_One:Regular',sans-serif] leading-[24px] not-italic shrink-0 text-[20px] text-center text-white tracking-[0.2px] whitespace-nowrap">in Doppy coin</p>
      </div>
      <div className="flex gap-[8px] items-center justify-center shrink-0 text-white w-full">
        <p className="flex-1 font-['Russo_One:Regular',sans-serif] leading-[16px] min-w-0 not-italic relative text-[14px] tracking-[0.14px]">Earn 3 rewards daily</p>
        <div className="flex gap-[2px] items-center shrink-0 whitespace-nowrap">
          <p className="font-['Russo_One:Regular',sans-serif] leading-[16px] not-italic shrink-0 text-[14px] tracking-[0.14px]">30</p>
          <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[14px] shrink-0 text-[12px] tracking-[0.06px]">/</p>
          <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[14px] shrink-0 text-[12px] tracking-[0.06px]">365 days</p>
        </div>
      </div>
      <div className="flex flex-col gap-[4px] items-start shrink-0 w-full">
        <div className="flex h-[28px] items-center justify-between overflow-clip py-[12px] shrink-0 w-full">
          <div className="absolute flex items-center left-[16px] w-[296px]">
            {rewards.map(({ label, active }) => (
              <div key={label} className="flex flex-1 flex-col items-center min-w-0">
                <div
                  className={`border-[0.536px] border-[rgba(255,255,255,0.7)] border-solid flex items-center px-[6px] py-[4px] relative rounded-[12px] shrink-0 ${active ? "bg-white" : "bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0.3)]"}`}
                >
                  <p className={`font-['Russo_One:Regular',sans-serif] leading-[16px] not-italic shrink-0 text-[14px] tracking-[0.14px] whitespace-nowrap ${active ? "text-[#161616]" : "text-white"}`}>{label}</p>
                </div>
                <div className="h-[4px] relative shrink-0 w-[6px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPolygon} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[4px] relative shrink-0 w-full">
          <div className="-translate-y-1/2 absolute bg-[rgba(255,255,255,0.1)] h-[4px] left-0 rounded-[100px] top-1/2 w-full" />
          <div className="-translate-y-1/2 absolute bg-white h-[4px] left-0 rounded-[100px] top-1/2 w-[6%]" />
        </div>
      </div>
    </div>
  );
}

export default function Component07WalletTapWithdraw() {
  return (
    <div className="bg-[#161616] overflow-clip relative size-full">
      {/* Header background */}
      <div className="-translate-x-1/2 absolute h-[160px] left-1/2 overflow-clip top-0 w-[360px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeaderBg} />
      </div>

      <StatusBar />
      <NavBar />

      {/* Scrollable content */}
      <div
        className="absolute left-0 right-0 bottom-0 overflow-x-hidden overflow-y-auto px-[16px] pt-[8px] pb-[24px]"
        style={{ top: 88, scrollbarWidth: "none" }}
      >
        <style>{`[data-wallet-scroll]::-webkit-scrollbar{display:none}`}</style>
        <div className="flex flex-col gap-[20px] items-center w-full">
          <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[20px] shrink-0 text-[14px] text-white tracking-[0.14px] w-full">
            Here's your wallet. All your earnings go to this account.
          </p>
          <StreakWidget />
          <BalanceCard />
          <Banner365 />
        </div>
      </div>
    </div>
  );
}
