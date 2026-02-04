# LoveMemory Game

This web application features a memory card game in a heart shape, where matching all pairs reveals a special Valentine's proposal with cute animations and effects. Live demo of the game available [here](https://love-memory-rgv.vercel.app).

## Getting Started 🚀

1. Clone the repository:
```bash
git clone https://github.com/riccbru/LoveMemory.git
cd LoveMemory
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization 🎨

### Changing Photos
- Number photos from 1 to 36
- Use AVIF format and move them in `/public/img/game`

### Modifying Text
- Change game instructions in `components/TextFooter.tsx`
- Edit proposal messages in `components/ValentinesProposal.tsx`

## Tech Stack 💻

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Fireworks.js](https://fireworks.js.org/)