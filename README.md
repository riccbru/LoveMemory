<p align="center">
  <img src="public/img/logo.png" alt="LoveMemory logo" />
</p>

<p align="center">
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white" /></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB" /></a>
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-black?style=flat&logo=next.js&logoColor=white" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" /></a>
  <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white" /></a>
  <a href="https://fireworks.js.org/"><img src="https://img.shields.io/badge/Fireworks.js-FF0040?style=flat&logo=fireworks&logoColor=white" /></a>
</p>

Love Memory is an interactive memory game featuring a unique geometric heart-shaped grid using your beloved photos. When all pairs are matched, a surprise with cute animations and effects for Valentine's Day is revealed.

## Getting Started 🚀

1. Clone the repository:
```bash
git clone https://github.com/riccbru/LoveMemory.git
```

2. Install dependencies:
```bash
cd LoveMemory; npm install
```

3. Start the development server on [http://localhost:3000](http://localhost:3000):
```bash
npm run dev
```

## Customization 🎨

### Photos
- Number photos from 1 to 36
- Move photos in AVIF format in `/public/img/game`
- Edit photos configuration in `/data/images.ts`

### Text
- Change game instructions in `components/TextFooter.tsx`
- Edit proposal messages in `components/ValentinesProposal.tsx`