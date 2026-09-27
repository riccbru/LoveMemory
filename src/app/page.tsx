"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import TextFooter from "@/components/TextFooter";
import PhotoPairGame from "../components/PhotoPairGame";
import ValentinesProposal from "@/components/ValentinesProposal";
import RomanticSpinner from "@/components/RomanticSpinner";

const PARTNER_NAME = process.env.PARTNER_NAME;
const ANIM_DURATION = Number(process.env.NEXT_PUBLIC_ANIM_DURATION);
const LOADING_DELAY = Number(process.env.NEXT_PUBLIC_LOADING_DELAY);

export default function Home() {

  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showValentinesProposal, setShowValentinesProposal] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileDevice = /mobile|tablet|ipad|iphone|android/.test(userAgent);
      setIsMobile(width < 1024 || isMobileDevice);
    };

    checkDevice();

    // Show spinner for at least LOADING_DELAY ms
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, LOADING_DELAY);

    return () => clearTimeout(timer);
  }, []);

  const handleShowProposal = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowValentinesProposal(true);
    }, ANIM_DURATION * 1000);
  };

  // Show romantic spinner while loading
  if (isLoading) {
    return <RomanticSpinner />;
  }

  // Show message for mobile users
  if (isMobile) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black px-6">
        <div className="text-center text-white">
          <p className="text-lg">
            Ti avevo detto di aprirlo da PC, ${PARTNER_NAME}...
            <br></br>

          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black relative px-10">
      {!showValentinesProposal ? (
        <motion.div
          initial={{ opacity: 1 }}
          transition={{ duration: ANIM_DURATION }}
          animate={{ opacity: isTransitioning ? 0 : 1 }}
        >
          <PhotoPairGame handleShowProposal={handleShowProposal} />
          <TextFooter />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: ANIM_DURATION }}
        >
          <ValentinesProposal />
        </motion.div>
      )}
    </div>
  );
}