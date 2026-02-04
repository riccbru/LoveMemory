import Image from "next/image";
import Fireworks from "@fireworks-js/react";
import { useState, useEffect } from "react";
import { Playfair_Display } from "next/font/google";
// import { IMAGES_36 as images } from "@/data/images";
import { motion, AnimatePresence } from "framer-motion";

export const images = [
  "/img/game/1.avif",
  "/img/game/2.avif",
  "/img/game/3.avif",
  "/img/game/4.avif",
  "/img/game/5.avif",
  "/img/game/6.avif",
  "/img/game/7.avif",
  "/img/game/8.avif",
  "/img/game/9.avif",
  "/img/game/10.avif",
  "/img/game/11.avif",
  "/img/game/12.avif",
  "/img/game/13.avif",
  "/img/game/14.avif",
  "/img/game/15.avif",
  "/img/game/16.avif",
  "/img/game/17.avif",
  "/img/game/18.avif",
  "/img/game/19.avif",
  "/img/game/20.avif",
  "/img/game/21.avif",
  "/img/game/22.avif",
  "/img/game/23.avif",
  "/img/game/24.avif",
  "/img/game/25.avif",
  "/img/game/26.avif",
  "/img/game/27.avif",
  "/img/game/28.avif",
  "/img/game/29.avif",
  "/img/game/30.avif",
  "/img/game/31.avif",
  "/img/game/32.avif",
  "/img/game/33.avif",
  "/img/game/34.avif",
  "/img/game/35.avif",
  "/img/game/36.avif"
]

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

export default function ValentinesProposal() {
  const [step, setStep] = useState(0);
  const [position, setPosition] = useState<{
    top: string;
    left: string;
  } | null>(null);
  const [showFireworks, setShowFireworks] = useState(false);

  const getRandomPosition = () => {
    const randomTop = Math.random() * 80;
    const randomLeft = Math.random() * 80;
    return { top: `${randomTop}%`, left: `${randomLeft}%` };
  };

  useEffect(() => {
    if (step < 2) {
      // Change step after 5 seconds
      const timer = setTimeout(() => {
        setStep((prevStep) => prevStep + 1);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleYesClick = () => {
    setShowFireworks(true);
    setStep(3);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.h2
            key="step-0"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={`text-4xl font-semibold mb-4 ${playfairDisplay.className}`}
          >
            Bravissima amore! Allora ti ricordi del mio amore 😍
          </motion.h2>
        )}
        {step === 1 && (
          <motion.h2
            key="step-1"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className={`text-4xl font-semibold mb-4 ${playfairDisplay.className}`}
          >
            Ho una sorpresa per te!
          </motion.h2>
        )}
        {step === 2 && (
          <motion.div
            key="step-2"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className="flex flex-col items-center"
          >
            {/* Image Grid Background */}
            <div className="absolute inset-0 grid grid-cols-6 opacity-10">
              {images.slice(0, 36).map((src, index) => (
                <div key={index} className="relative h-full">
                  <Image
                    fill
                    src={src}
                    className="object-cover"
                    alt={`Memory ${index + 1}`}
                  />
                </div>
              ))}
            </div>

            <h2
              className={`text-5xl font-semibold mb-8 ${playfairDisplay.className}`}
            >
              Mi vuoi???
            </h2>
            <Image
              width={200}
              height={200}
              alt="Sad Narcy"
              src="/img/sad_narcy.png"
            />
            <div className="flex space-x-4 mt-10">
              <button
                className="px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl hover:from-pink-600 hover:to-rose-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={handleYesClick}
              >
                CERTO! 🤩
              </button>
              <button
                className="px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl hover:from-gray-600 hover:to-gray-700 transform hover:scale-95 transition-all duration-300 shadow-lg"
                style={
                  position
                    ? {
                        top: position.top,
                        left: position.left,
                        position: "absolute",
                      }
                    : {}
                }
                onMouseEnter={() => setPosition(getRandomPosition())}
              >
                Non lo so... 
              </button>
            </div>
          </motion.div>
        )}
        {step === 3 && (
          <motion.div
            key="step-3"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={`text-4xl font-semibold mb-4 flex flex-col justify-center items-center ${playfairDisplay.className}`}
          >
            Grazieee! Sei il mio amore
            <p className="text-sm mt-4">Ora chiamami 💌</p>
            <Image
              width={200}
              unoptimized
              height={200}
              alt="Happy Cat"
              src="/img/happy_cat.gif"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {showFireworks && (
        <div className="absolute w-full h-full">
          <Fireworks
            options={{
              autoresize: true,
            }}
            style={{
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
          />
        </div>
      )}
    </div>
  );
}
