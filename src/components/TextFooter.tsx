import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

export default function TextFooter() {
  return (
    <>
      {/* Left Text */}
      <h1
        className={`absolute left-10 bottom-5 transform -translate-y-1/2 text-white text-5xl font-bold leading-tight ${playfairDisplay.className}`}
      >
        <span className="text-gray-400">Completa</span> <br /> il gioco
      </h1>

      {/* Right Text */}
      <h1
        className={`absolute right-10 bottom-5 transform -translate-y-1/2 text-white text-5xl font-bold leading-tight text-right ${playfairDisplay.className}`}
      >
        per rivelare <br /> <span className="text-gray-400">la sorpresa</span>
      </h1>

      {/* Copyright */}
      <p className="absolute bottom-5 right-5 text-white text-sm opacity-15 hover:opacity-50">
        San Valentino {new Date().getFullYear()}{" "}
      </p>
    </>
  );
}
