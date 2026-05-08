// Icons exported from Figma via REST API → S3 (работают без аутентификации в продакшне)
const imgIconWatch   = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/efc47cb0-8e1f-4d84-93e9-4d7b2f2396cb";
const imgIconCreate  = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/add7921c-600e-4a96-811e-0aa94c31c5eb";
const imgIconEarn    = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1683456-868a-44b1-b0ac-504bd377aca2";
const imgIconMarket  = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/090b779c-3bd1-4130-84f8-8412eb1c2055";
const imgIconProfile = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6bcf7a19-cd1c-4fd3-b923-4ddeada2bcd5";

const TABS = [
  { icon: imgIconWatch,   label: "Watch",   active: true  },
  { icon: imgIconCreate,  label: "Create",  active: false },
  { icon: imgIconEarn,    label: "Earn",    active: false },
  { icon: imgIconMarket,  label: "Market",  active: false },
  { icon: imgIconProfile, label: "Profile", active: false },
];

export default function AlienTabBar() {
  return (
    <div style={{
      width: "100%",
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
    }}>
      {/* 8px top padding (matches Figma Tabs frame offset) */}
      <div style={{ paddingTop: 8, display: "flex", alignItems: "center", width: "100%" }}>
        {TABS.map(({ icon, label, active }) => (
          <div key={label} style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            paddingTop: 4,
            paddingBottom: 4,
            minWidth: 0,
          }}>
            <div style={{ width: 28, height: 28, flexShrink: 0, opacity: active ? 1 : 0.45 }}>
              <img
                alt={label}
                src={icon}
                style={{ display: "block", width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            <p style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
              fontSize: 12,
              lineHeight: "12px",
              color: "#ffffff",
              opacity: active ? 1 : 0.5,
              textAlign: "center",
              whiteSpace: "nowrap",
              margin: 0,
            }}>
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Home indicator: 64×2 white pill, centered */}
      <div style={{ height: 14, position: "relative", width: "100%" }}>
        <div style={{
          position: "absolute",
          left: "50%",
          top: 8,
          transform: "translateX(-50%)",
          width: 64,
          height: 2,
          borderRadius: 32,
          background: "#ffffff",
        }} />
      </div>
    </div>
  );
}
