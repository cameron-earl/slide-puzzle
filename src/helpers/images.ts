import { randElement } from './puzzleArr';

export interface Image {
  fileName: string;
  attribution: string;
}

export const images: Image[] = [
  {
    fileName: 'intricate-explorer-nSk4ko0uUjA-unsplash.jpg',
    attribution: 'Intricate Explorer on Unsplash',
  },
  {
    fileName: 'neven-krcmarek-9dTg44Qhx1Q-unsplash.jpg',
    attribution: 'Neven Krcmarek',
  },
];

export const getRandomImage = (): Image => randElement(images);
