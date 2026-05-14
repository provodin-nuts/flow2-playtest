import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import MarketScreen from "../imports/MarketScreen/MarketScreen";
import BoostDetail from "../imports/BoostDetail/BoostDetail";

type BoostType = "standard" | "prime" | "elite";
type Screen = "market" | "boost-detail";

const FRAME_W = 360;

export default function App() {
  const [screen, setScreen] = useState<Screen>("market");
  const [selectedBoost, setSelectedBoost] = useState<BoostType>("standard");

  const openBoost = (boost: BoostType) => {
    setSelectedBoost(boost);
    setScreen("boost-detail");
  };

  return (
    <div className="size-full flex items-center justify-center bg-[#0a0a0a]" style={{ height: "100dvh" }}>
      <div
        className="relative overflow-hidden"
        style={{ width: "100%", maxWidth: FRAME_W, height: "100dvh", background: "#000" }}
      >
        <AnimatePresence mode="wait">
          {screen === "market" && (
            <motion.div
              key="market"
              className="absolute inset-0"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.25 } }}
            >
              <MarketScreen onBoostClick={openBoost} />
            </motion.div>
          )}

          {screen === "boost-detail" && (
            <motion.div
              key="boost-detail"
              className="absolute inset-0"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] } }}
              exit={{ x: "100%", opacity: 0, transition: { duration: 0.25 } }}
            >
              <BoostDetail boost={selectedBoost} onBack={() => setScreen("market")} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
