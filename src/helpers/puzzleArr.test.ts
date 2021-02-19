import { getSortedPuzzleArr, puzzleToString, stringToPuzzle, valToString } from './puzzleArr';

describe('valToString', () => {
  it('should return "f" for 15', () => {
    expect(valToString(15)).toBe('f');
  });

  it('should return "0" for null', () => {
    expect(valToString(null)).toBe('0');
  });
});

describe('puzzleToString', () => {
  it('should return the correct value for a sorted array', () => {
    expect(puzzleToString(getSortedPuzzleArr())).toBe('123456789abcdef0');
  });

  it('should return the correct value for the reverse sorted array', () => {
    expect(puzzleToString(getSortedPuzzleArr().reverse())).toBe('0fedcba987654321');
  });
});

describe('stringToPuzzle', () => {
  it('should return the correct array for "0fedcba987654321"', () => {
    expect(stringToPuzzle('0fedcba987654321')).toStrictEqual([null, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });
});