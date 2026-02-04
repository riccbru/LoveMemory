# Valentine's Memory Game

A romantic and interactive way to ask your special someone to be your Valentine! This web application features a memory card game in a heart shape, where matching all pairs reveals a special Valentine's proposal with cute animations and effects.

## Demo 🎮

A live demo of the game available [here](https://love-memory.vercel.app).

## Features ✨

- Interactive memory card game in a heart shape layout
- Animations and transitions using Framer Motion
- Customizable with your own photos
- Romantic proposal screen with:
  - Fireworks animation on acceptance
  - Playful "No" button that moves away when hovered
  - Cute hamster GIFs and images
- Elegant design with Playfair Display font
- Fully responsive layout
- Built with Next.js & Tailwind CSS

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

3. Replace the photos:
   - Navigate to the `public/img/game` directory
   - Populate with 36 numbered AVIF images (best result: use square images of the same size)

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization 🎨

### Changing Photos
- Add your photos to `public/img/game`
- Name them from 1.avif to 36.avif
- For best results, use square images of the same size
- Convert your images to .avif format for better performance

### Modifying Text
- Change game instructions in `components/TextFooter.tsx`
- Edit proposal messages in `components/ValentinesProposal.tsx`

## Tech Stack 💻

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Fireworks.js](https://fireworks.js.org/)