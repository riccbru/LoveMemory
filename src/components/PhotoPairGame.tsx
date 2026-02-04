"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { IMAGES_18 as images } from "@/data/images";

// Create 18 pairs of images (36 images in total)
const imagePairs = images.flatMap((image) => [image, image]);

const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const heartLayout = [
  [null, null, 0, 1, null, 2, 3, null, null],
  [null, 4, 5, 6, 7, 8, 9, 10, null],
  [11, 12, 13, 14, 15, 16, 17, 18, 19],
  [null, 20, 21, 22, 23, 24, 25, 26, null],
  [null, null, 27, 28, 29, 30, 31, null, null],
  [null, null, null, 32, 33, 34, null, null, null],
  [null, null, null, null, 35, null, null, null, null],
];

type ValentinesProposalProps = {
  handleShowProposal: () => void;
};

export default function PhotoPairGame({
  handleShowProposal,
}: ValentinesProposalProps) {
  const [images, setImages] = useState<string[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [incorrect, setIncorrect] = useState<number[]>([]);

  useEffect(() => {
    // Shuffle the images when the component mounts
    setImages(shuffleArray([...imagePairs]));
  }, []);

  const handleClick = async (index: number) => {
    if (selected.length === 2 || matched.includes(index)) return;

    setSelected((prev) => [...prev, index]);

    if (selected.length === 1) {
      const firstIndex = selected[0];
      if (images[firstIndex] === images[index]) {
        setMatched((prev) => [...prev, firstIndex, index]);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 900)); // Wait 0.9 second
        setIncorrect([firstIndex, index]);
        setTimeout(() => setIncorrect([]), 750); // Clear incorrect after 0.75 second
      }
      setTimeout(() => setSelected([]), 900);
    }
  };

  // Check if game is won
  useEffect(() => {
    if (matched.length === imagePairs.length) {
      handleShowProposal();
    }
  }, [matched, handleShowProposal]);

  return (
    <div className="grid grid-cols-9 gap-2">
      {/* Image preload */}
      <div className="hidden">
        {images.map((image, i) => (
          <Image
            key={i}
            priority
            src={image}
            layout="fill"
            objectFit="cover"
            alt={`Image ${i + 1}`}
          />
        ))}
      </div>

      {heartLayout.flat().map((index, i) =>
        index !== null ? (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            style={{ perspective: "1000px" }} // Add perspective for 3D effect
            onClick={() => handleClick(index)}
            className="w-20 h-20 relative cursor-pointer"
          >
            {/* Back of the card */}
            {!selected.includes(index) && !matched.includes(index) && (
              <motion.div
              initial={{ rotateY: 0 }}
              transition={{ duration: 0.5 }}
              style={{ backfaceVisibility: "hidden" }}
              className="w-full h-full bg-gray-300 rounded-md absolute"
                animate={{
                  rotateY:
                    selected.includes(index) || matched.includes(index)
                      ? 180
                      : 0,
                }}
              />
            )}

            {/* Front of the card (image) */}
            {(selected.includes(index) || matched.includes(index)) && (
              <motion.div
              animate={{ rotateY: 0 }}
              initial={{ rotateY: -180 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full absolute"
                style={{ backfaceVisibility: "hidden" }}
              >
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={images[index]}
                  className="rounded-md"
                  alt={`Image ${index + 1}`}
                />
              </motion.div>
            )}

            {/* Incorrect animation */}
            {incorrect.includes(index) && (
              <motion.div
                className="absolute inset-0"
                transition={{ duration: 0.5 }}
                animate={{ scale: [1, 1.1, 1], opacity: [1, 0, 1] }}
              >
                <div className="w-full h-full bg-red-500 rounded-md"></div>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <div key={i} className="w-20 h-20"></div>
        )
      )}
    </div>
  );
}
