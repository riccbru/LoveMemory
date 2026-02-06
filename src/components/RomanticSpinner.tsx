import { motion } from "framer-motion";

export default function RomanticSpinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden">
      {/* Center spinner with pulsing heart */}
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Spinning circle */}
        <motion.div
          className="absolute inset-0 border-4 border-transparent border-t-pink-500 border-r-pink-500 rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Pulsing heart at center */}
        <motion.div
          className="text-5xl leading-none flex items-center justify-center"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ❤️
        </motion.div>
      </div>

      {/* Loading text */}
      <motion.p
        className="mt-8 text-pink-400 text-xl font-mono"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        Loading...
      </motion.p>
    </div>
  );
}