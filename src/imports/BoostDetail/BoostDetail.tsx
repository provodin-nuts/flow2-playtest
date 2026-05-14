type BoostType = "standard" | "prime" | "elite";

const BOOST_INFO = {
  standard: { name: "Standard Boost", img: "/img/boost-standard.png", price: "$3.0", income: "up to $10" },
  prime: { name: "Prime Boost", img: "/img/boost-prime.png", price: "$6.18", income: "$20" },
  elite: { name: "Elite Boost", img: "/img/boost-elite.png", price: "$41.2", income: "up to $169", oldPrice: "$51.5", discount: "-20%" },
};

interface BoostDetailProps {
  boost: BoostType;
  onBack: () => void;
}

export default function BoostDetail({ boost, onBack }: BoostDetailProps) {
  const info = BOOST_INFO[boost];
  return (
    <div className="bg-[#161616] size-full flex flex-col items-center justify-center gap-[24px] p-[24px]">
      {/* Back button */}
      <button
        onClick={onBack}
        className="absolute top-[48px] left-[16px] flex items-center gap-[8px] bg-transparent border-0 cursor-pointer"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 6l-6 6 6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <p className="font-['Russo_One:Regular',sans-serif] text-white text-[16px]">Back</p>
      </button>

      <img src={info.img} alt={info.name} className="w-[200px] h-[200px] object-contain mt-[60px]" />
      <p className="font-['Russo_One:Regular',sans-serif] text-white text-[28px] text-center">{info.name}</p>
      <div className="flex flex-col items-center gap-[4px]">
        <p className="font-['Montserrat:Medium',sans-serif] text-[#b9b9b9] text-[14px]">Price</p>
        <p className="font-['Russo_One:Regular',sans-serif] text-white text-[36px]">{info.price}</p>
        {info.oldPrice && (
          <p className="font-['Montserrat:Medium',sans-serif] text-[#6e6e6e] text-[16px] line-through">{info.oldPrice}</p>
        )}
      </div>
      <div className="flex flex-col items-center gap-[4px]">
        <p className="font-['Montserrat:Medium',sans-serif] text-[#b9b9b9] text-[14px]">Possible income in 30 days</p>
        <p className="font-['Russo_One:Regular',sans-serif] text-white text-[24px]">{info.income}</p>
      </div>
      <div
        className="w-full py-[16px] rounded-[16px] flex items-center justify-center cursor-pointer mt-[16px]"
        style={{ background: "linear-gradient(135deg, #0095FF 0%, #2AC300 100%)" }}
      >
        <p className="font-['Russo_One:Regular',sans-serif] text-[#161616] text-[16px] tracking-[0.8px] uppercase">Buy Boost</p>
      </div>
    </div>
  );
}
