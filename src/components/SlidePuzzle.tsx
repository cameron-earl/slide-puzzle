import React, { useState } from 'react';

import { canMoveSquare, getShuffledPuzzleArr, getSortedPuzzleArr, isSorted, moveSquare } from '../helpers/puzzleArr';
import { solve } from '../helpers/solver';
import NumberSquare from './NumberSquare';
import styles from './SlidePuzzle.module.css';

const SlidePuzzle: React.FC = () => {
  const [puzzleArr, setPuzzleArr] = useState(() => getShuffledPuzzleArr());

  console.log('render');

  const solution = solve(puzzleArr);

  if (isSorted(puzzleArr)) {
    console.log('sorted!');
  } else {
    console.log(solution);
  }

  const handleClick = (i: number) => {
    if (canMoveSquare(puzzleArr, i)) {
      return () => {
        setPuzzleArr(moveSquare(puzzleArr, i));
      };
    } else return undefined;
  };

  const squares = puzzleArr.map((n, i) => (
    <NumberSquare key={`numSquare-${i}-${n}`} handleClick={handleClick(i)} isInPlace={i + 1 === n}>
      {n ? n : ''}
    </NumberSquare>
  ));

  return <div className={styles.slidePuzzle + ' square'}>{<div className="content">{squares}</div>}</div>;
};

export default SlidePuzzle;
