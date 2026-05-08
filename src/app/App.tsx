import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Component01Feed from "../imports/01Feed/01Feed";

type Screen = "feed" | "next";

const FRAME_W = 360;

export default function App() {
  const [screen, setScreen] = useState<Screen>("feed");

  const navigate = (s: string) => setScreen(s as Screen);

  return (
    <div className="size-full flex items-center justify-center bg-[#0a0a0a]" style={{ height: "100dvh" }}>
      <div
        className="relative overflow-hidden"
        style={{ width: "100%", maxWidth: FRAME_W, height: "100dvh", borderRadius: 0, background: "#000" }}
      >
        <AnimatePresence mode="wait">
          {screen === "feed" && (
            <motion.div
              key="feed"
              className="absolute inset-0"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.35, ease: [0, 0, 0.58, 1] } }}
            >
              <Component01Feed onNavigate={navigate} />
            </motion.div>
          )}

          {screen === "next" && (
            <motion.div
              key="next"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.35, ease: [0, 0, 0.58, 1] } }}
              style={{ background: "#161616" }}
            >
              {/* Заглушка — следующий экран будет добавлен позже */}
              <p style={{
                fontFamily: "'Russo One', sans-serif",
                fontSize: 18,
                color: "#6eff46",
                textAlign: "center",
              }}>
                Next screen placeholder
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
