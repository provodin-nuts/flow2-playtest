const imgIconWatch   = "https://www.figma.com/api/mcp/asset/b022cf06-9905-4097-beb5-aca8eccba7a9";
const imgIconCreate  = "https://www.figma.com/api/mcp/asset/7be1250c-b004-4e00-9a74-e25604eede74";
const imgIconEarn    = "https://www.figma.com/api/mcp/asset/cd3b0eb4-4de4-40b2-a3d6-42c19a5527cc";
const imgIconMarket  = "https://www.figma.com/api/mcp/asset/dc8ca80d-98d8-40c7-8b65-8096104c27f1";
const imgIconProfile = "https://www.figma.com/api/mcp/asset/d12e21c5-12cf-4240-8d98-0a78caa35bd2";

const TABS = [
  { icon: imgIconWatch,   label: "Watch"   },
  { icon: imgIconCreate,  label: "Create"  },
  { icon: imgIconEarn,    label: "Earn"    },
  { icon: imgIconMarket,  label: "Market"  },
  { icon: imgIconProfile, label: "Profile" },
];

const ACTIVE_TAB = "Watch";

export default function AlienTabBar() {
  return (
    <div
      className="flex flex-col items-start justify-end pt-[8px] rounded-tl-[28px] rounded-tr-[28px] w-full"
      style={{ background: "rgba(22,22,22,0.85)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}
    >
      <div className="flex items-center w-full">
        {TABS.map(({ icon, label }) => {
          const isActive = label === ACTIVE_TAB;
          return (
            <div key={label} className="flex flex-1 flex-col gap-[2px] items-center min-w-0 py-[4px]">
              <div className="relative shrink-0 size-[24px]" style={{ opacity: isActive ? 1 : 0.45 }}>
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={icon} />
              </div>
              <p style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 500,
                fontSize: 12,
                lineHeight: "12px",
                color: "#ffffff",
                opacity: isActive ? 1 : 0.5,
                textAlign: "center",
                whiteSpace: "nowrap",
              }}>
                {label}
              </p>
            </div>
          );
        })}
      </div>
      <div className="h-[14px] relative w-full">
        <div className="absolute bg-white h-[2px] left-1/2 -translate-x-1/2 rounded-[32px] top-[8px] w-[64px]" />
      </div>
    </div>
  );
}
