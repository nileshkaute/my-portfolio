import { motion } from "framer-motion";

export default function ScreenLoader() {
  const lines = [
    "Booting environment...",
    "Injecting core modules...",
    "Optimizing render pipeline...",
    "Finalizing interface...",
  ];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Animated grid */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.08)_1px,transparent_1px)] bg-[size:42px_42px]"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Glow core */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-purple-600/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Terminal */}
      <div className="z-10 font-mono text-purple-300 text-sm space-y-3">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.7 }}
            className="flex items-center gap-2"
          >
            <span className="text-purple-500">$</span>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: i * 0.7, duration: 0.6 }}
              className="overflow-hidden whitespace-nowrap"
            >
              {line}
            </motion.span>
          </motion.div>
        ))}

        {/* Cursor */}
        <motion.span
          className="inline-block w-2 h-4 bg-purple-400 ml-1"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.9, repeat: Infinity }}
        />
      </div>

      {/* Footer tag */}
      <motion.div
        className="absolute bottom-10 text-purple-400 text-xs tracking-[0.35em]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        ENGINEERING CLEAN EXPERIENCES
      </motion.div>
    </motion.div>
  );
}
