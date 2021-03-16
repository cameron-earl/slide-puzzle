import React, { useEffect, useState } from 'react';
import { getRandomImage } from '../helpers/images';

import {
  canMoveSquare,
  getBarelyShuffledPuzzleArr,
  getMoveRecord,
  getShuffledPuzzleArr,
  // getSortedPuzzleArr,
  isSorted,
  MoveRecord,
  moveSquare,
  puzzleArray,
} from '../helpers/puzzleArr';
// import { solve } from '../helpers/solver';
import NumberSquare from './NumberSquare';
import styles from './SlidePuzzle.module.css';

const SlidePuzzle: React.FC = () => {
  const [puzzleArr, setPuzzleArr] = useState(() => getBarelyShuffledPuzzleArr() as puzzleArray);
  const [image, setImage] = useState(() => getRandomImage());
  const [lastMove, setLastMove] = useState(() => null as MoveRecord | null);

  const sorted = isSorted(puzzleArr);

  // console.log('lastMove', lastMove);

  const handleClick = (i: number) => {
    if (sorted) {
      return reset;
    } else if (canMoveSquare(puzzleArr, i)) {
      return () => {
        setLastMove(getMoveRecord(puzzleArr, i));
        setPuzzleArr(moveSquare(puzzleArr, i));
      };
    } else return undefined;
  };

  const reset = () => {
    console.log('reset!');
    setImage(getRandomImage(image));
    setLastMove(null);
    setPuzzleArr(getBarelyShuffledPuzzleArr());
  };

  const squares = puzzleArr.map((n, i) => (
    <NumberSquare
      key={`numSquare-${i}-${n}`}
      handleClick={handleClick(i)}
      isInPlace={i + 1 === n}
      image={image}
      position={n === null ? 16 : n}
      movedDirection={n === lastMove?.position ? lastMove.direction : null}
      sorted={sorted}
    >
      {n ? n : ''}
    </NumberSquare>
  ));

  useEffect(() => {
    if (sorted) {
      console.log('sorted!');
    } else {
      // console.log(solve(puzzleArr));
    }
  }, [puzzleArr, sorted]);

  const style = sorted
    ? {
        backgroundImage: `url("/images/${image.fileName}")`,
        backgroundSize: 'contain',
      }
    : {};

  return (
    <div>
      <div className={styles.slidePuzzle + ' square'} style={style}>
        {sorted && <div className={styles.playAgain}>click to play again</div>}
        <div className="content">{squares}</div>
      </div>
      <div className={styles.attribution} dangerouslySetInnerHTML={{ __html: image.attribution }}></div>
    </div>
  );
};

export default SlidePuzzle;
