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
    fileName: 'intricate-explorer-T5b_pS1z8l4-unsplash.jpg',
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
  {
    fileName: 'michael-payne-GaMjSsrVU0k-unsplash.jpg',
    attribution:
      'Photo by <a href="https://unsplash.com/@mpayne66?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Michael Payne</a> on <a href="/t/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  },
  {
    fileName: 'gidon-wessner-y9xEvswXxEA-unsplash.jpg',
    attribution:
      'Photo by <a href="https://unsplash.com/@gidooon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Gidon Wessner</a> on <a href="/t/animals?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',
  },
];

export const getRandomImage = (current?: Image): Image => {
  let img: Image;
  do {
    img = randElement(images);
  } while (img.fileName === current?.fileName);
  return img;
};
