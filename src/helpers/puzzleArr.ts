import SillyGooseError from './SillyGooseError';

export const getSortedPuzzleArr = (): puzzleArray => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null];

export const puzzleToString = (arr: puzzleArray): string => arr.map(valToString).join('');
export const stringToPuzzle = (str: string): puzzleArray => str.split('').map(stringToVal);

export const valToString = (n: number | null): string => n?.toString(16) || '0';
export const stringToVal = (s: string): number | null => {
  const n = parseInt(s, 16);
  if (!n) return null;
  return n;
};

export const getShuffledPuzzleArr = (): puzzleArray => {
  console.time('egg');
  let a = getSortedPuzzleArr();
  for (let i = 0; i < 10_000; i++) {
    a = randomMove(a);
  }
  console.timeEnd('egg');
  return a;
};

export const moveSquare = (puzzleArr: puzzleArray, i: number): puzzleArray => {
  const emptyIndex = puzzleArr.indexOf(null);
  if (!isAdjacentIdx(emptyIndex, i)) return puzzleArr;
  const newPuzzleArr = [...puzzleArr];
  newPuzzleArr[emptyIndex] = puzzleArr[i];
  newPuzzleArr[i] = null;
  return newPuzzleArr;
};

export const randomMove = (puzzleArr: puzzleArray): puzzleArray => {
  return moveSquare(puzzleArr, randElement(getMovableIndices(puzzleArr)));
};

export const canMoveSquare = (puzzleArr: puzzleArray, i: number): boolean => {
  const emptyIndex = puzzleArr.indexOf(null);
  return isAdjacentIdx(emptyIndex, i);
};

export const getMovableIndices = (puzzleArr: puzzleArray): number[] => {
  const movableIndices: number[] = [];
  const emptyIndex = puzzleArr.indexOf(null);
  const emptyCoord = getCoords(emptyIndex);
  for (let i = 0; i < puzzleArr.length; i++) {
    if (isAdjacentCoord(getCoords(i), emptyCoord)) {
      movableIndices.push(i);
    }
  }
  return movableIndices;
};

export type puzzleArray = (number | null)[];
export type coord = [number, number];

export const getRow = (i: number): number => Math.floor(i / 4);
export const getColumn = (i: number): number => i % 4;
export const getCoords = (i: number): coord => [getColumn(i), getRow(i)];
export const isAdjacentCoord = (a: coord, b: coord): boolean => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) === 1;
export const isAdjacentIdx = (a: number, b: number): boolean => isAdjacentCoord(getCoords(a), getCoords(b));

export const isSorted = (arr: puzzleArray): boolean => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== i + 1) {
      return false;
    }
  }
  return true;
};

export const randInt = (min = 0, max = 9): number => {
  if (max < min) throw new SillyGooseError('Max cannot be less than min, you silly goose.');
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randElement = <T>(a: T[]): T => a[randInt(0, a.length - 1)];

export const reverseArr = <T>(array: T[]): T[] => array.slice().reverse();

export const isObjectEmpty = (obj: Record<string, unknown>): boolean => {
  for (const i in obj) return false;
  return true;
};
