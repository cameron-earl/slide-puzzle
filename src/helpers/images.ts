import { randElement } from './puzzleArr';

export interface Image {
  fileName: string;
  attribution: string;
}

export const images: Image[] = [
  {
    fileName: 'intricate-explorer-nSk4ko0uUjA-unsplash.jpg',
    attribution:
      'Photo by <a href="https://unsplash.com/@intricateexplorer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Intricate Explorer</a> on <a href="/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  },
  {
    fileName: 'neven-krcmarek-9dTg44Qhx1Q-unsplash.jpg',
    attribution:
      'Photo by <a href="https://unsplash.com/@nevenkrcmarek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Neven Krcmarek</a> on <a href="/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  },
  {
    fileName: 'michael-payne-2lQKpLMJpvw-unsplash.jpeg',
    attribution:
      'Photo by <a href="https://unsplash.com/@mpayne66?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michael Payne</a> on <a href="/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  },
];

export const getRandomImage = (): Image => randElement(images);
