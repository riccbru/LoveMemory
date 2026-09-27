// Total number of unique photos in the game (pairs will be created from these)
export const TOTAL_PHOTOS = 18;

// From env var NEXT_PUBLIC_FIXED_PHOTOS="1,2,3,4,5" (< 18)
// to variable fixedPhotoNumbers = [1, 2, 3, 4, 5];
const fixedPhotoNumbers: number[] = (process.env.NEXT_PUBLIC_FIXED_PHOTOS || "")
  .split(",")
  .map((id) => Number(id.trim()))
  .filter((n) => !isNaN(n));

// Photos that will ALWAYS appear in the game (your special memories!)

export const fixedPhotos = fixedPhotoNumbers.map(i => `/img/game/${i}.avif`);
export const allImages = [...Array(36)].map((_, i) => `/img/game/${i + 1}.avif`);

/**
 * Selects photos for the game:
 * - Includes all fixed photos
 * - Randomly selects remaining photos from the pool to reach TOTAL_PHOTOS
 */
export const getGamePhotos = (): string[] => {
  const numberOfFixedPhotos = fixedPhotos.length;
  const numberOfRandomPhotos = TOTAL_PHOTOS - numberOfFixedPhotos;

  if (numberOfFixedPhotos > TOTAL_PHOTOS) {
    console.warn(
      `You have ${numberOfFixedPhotos} fixed photos out of ${TOTAL_PHOTOS}. Using only the first ${TOTAL_PHOTOS} fixed photos.`
    );
    return fixedPhotos.slice(0, TOTAL_PHOTOS);
  }

  // Get available photos (excluding fixed ones)
  const availablePhotos = allImages.filter(
    (photo) => !fixedPhotos.includes(photo)
  );

  // Randomly select the remaining photos
  const shuffled = [...availablePhotos].sort(() => Math.random() - 0.5);
  const randomPhotos = shuffled.slice(0, numberOfRandomPhotos);

  // Combine fixed and random photos
  return [...fixedPhotos, ...randomPhotos];
};