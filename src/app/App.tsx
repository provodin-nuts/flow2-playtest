import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Component01Feed from "../imports/01Feed/01Feed";
import BoxStart from "../imports/BoxStart/BoxStart";
import BoxAnimation from "../imports/BoxAnimation/BoxAnimation";
import FirstReward from "../imports/FirstReward/FirstReward";
import SignUp from "../imports/SignUp/SignUp";

type Screen = "feed" | "box-start" | "box-animation" | "first-reward" | "sign-up";

const FRAME_W = 360;

export default function App() {
  const [screen, setScreen] = useState<Screen>("feed");
  const navigate = (s: string) => setScreen(s as Screen);

  return (
    <div className="size-full flex items-center justify-center bg-[#0a0a0a]" style={{ height: "100dvh" }}>
      <div
        className="relative overflow-hidden"
        style={{ width: "100%", maxWidth: FRAME_W, height: "100dvh", background: "#000" }}
      >
        <AnimatePresence mode="wait">
          {/* Feed */}
          {screen === "feed" && (
            <motion.div key="feed" className="absolute inset-0"
              initial={{ opacity: 1 }} animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.35, ease: [0, 0, 0.58, 1] } }}
            >
              <Component01Feed onNavigate={navigate} />
            </motion.div>
          )}

          {/* Box Start — "Tap to open" */}
          {screen === "box-start" && (
            <motion.div key="box-start" className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.35, ease: [0, 0, 0.58, 1] } }}
              exit={{ opacity: 0, transition: { duration: 0.25 } }}
            >
              <BoxStart onNavigate={navigate} />
            </motion.div>
          )}

          {/* Box Animation — glow explosion, auto-navigates after 800ms */}
          {screen === "box-animation" && (
            <motion.div key="box-animation" className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.15 } }}
              exit={{ opacity: 0, transition: { duration: 0.3, ease: [0, 0, 0.58, 1] } }}
            >
              <BoxAnimation onNavigate={navigate} />
            </motion.div>
          )}

          {/* First Reward — Sign up screen */}
          {screen === "first-reward" && (
            <motion.div key="first-reward" className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.3, ease: [0, 0, 0.58, 1] } }}
              exit={{ opacity: 0, transition: { duration: 0.25 } }}
            >
              <FirstReward onNavigate={navigate} />
            </motion.div>
          )}

          {/* Sign Up */}
          {screen === "sign-up" && (
            <motion.div key="sign-up" className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.3, ease: [0, 0, 0.58, 1] } }}
              exit={{ opacity: 0, transition: { duration: 0.25 } }}
            >
              <SignUp />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
