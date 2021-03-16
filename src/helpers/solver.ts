import {
  getMovableIndices,
  getSortedPuzzleArr,
  moveSquare,
  puzzleArray,
  puzzleToString,
  reverseArr,
  stringToPuzzle,
} from './puzzleArr';

const solutionMap: { [key: string]: number[] } = {};

type permutation = [puzzleArray, number[]];

const sortedStr = puzzleToString(getSortedPuzzleArr());
const isSolutionMapPopulated = () => solutionMap[sortedStr] !== undefined;

export const populateSolutionMap = (): void => {
  if (isSolutionMapPopulated()) {
    return;
  }
  console.time('populateSolutionMap');
  solutionMap[sortedStr] = [];
  const permutations: permutation[] = Object.entries(solutionMap).map((e) => [stringToPuzzle(e[0]), e[1]]);

  for (let i = 0; permutations[i][1].length < 15 /* alt: i < permutations.length */; i++) {
    const emptyIndex = permutations[i][0].indexOf(null);
    const availableMoves = getMovableIndices(permutations[i][0], emptyIndex);
    for (const move of availableMoves) {
      const newArr = moveSquare(permutations[i][0], move);
      const str = puzzleToString(newArr);
      if (solutionMap[str]) continue;
      const steps = [...permutations[i][1], emptyIndex];
      permutations.push([newArr, steps]);
      solutionMap[str] = steps;
    }
  }
  console.timeEnd('populateSolutionMap');
  console.log(permutations.length);
};

export const solve = (arr: puzzleArray): number[] => {
  console.time('solve');
  const str = puzzleToString(arr);
  let solution: number[] = [];
  if (solutionMap[str]) {
    solution = reverseArr(solutionMap[str]);
  } else {
    const explorationMap: { [key: string]: number[] } = {};
    const permutations: permutation[] = [[arr, []]];
    for (let i = 0; !solution.length && i < permutations.length && i < 100_000; i++) {
      const availableMoves = getMovableIndices(permutations[i][0]);
      for (const move of availableMoves) {
        const newArr = moveSquare(permutations[i][0], move);
        const str = puzzleToString(newArr);
        if (explorationMap[str]) continue;
        const steps = [...permutations[i][1], move];
        if (solutionMap[str]) {
          solution = [...steps, ...reverseArr(solutionMap[str])];
          break;
        }
        permutations.push([newArr, steps]);
        explorationMap[str] = steps;
      }
    }
  }

  console.timeEnd('solve');
  return solution;
};
