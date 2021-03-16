import React, { ReactNode } from 'react';
import styles from './NumberSquare.module.css';
import classNames from 'classnames';
import { Image } from '../helpers/images';
import { Direction } from '../helpers/puzzleArr';

interface NumberSquareProps {
  handleClick?: () => void;
  children?: ReactNode;
  isInPlace: boolean;
  image: Image;
  position: number;
  movedDirection: Direction | null;
  sorted: boolean;
}

const emptyPostionValue = 16;

const NumberSquare: React.FC<NumberSquareProps> = (props: NumberSquareProps) => {
  const { children, handleClick, isInPlace, image, position, movedDirection, sorted } = props;

  const row = Math.floor((position - 1) / 4);
  const col = (position - 1) % 4;
  const animationClass = movedDirection !== null ? `slide${Direction[movedDirection]}` : '';

  const numberSquareClass = classNames(
    {
      clickable: !sorted && Boolean(handleClick),
      [styles.empty]: position === emptyPostionValue,
      [styles.inPlace]: isInPlace,
      [styles.slideFromBelow]: position === 15,
      [styles.sorted]: sorted,
    },
    styles.numberSquare,
    styles[animationClass],
  );

  const style = {
    backgroundImage: !!children ? `url("/images/${image.fileName}")` : '',
    backgroundSize: '400% 400%',
    backgroundPosition: `${col * 33.33}% ${row * 33.33}%`,
  };

  return (
    <div className={numberSquareClass} onClick={handleClick} style={style}>
      {children}
    </div>
  );
};

export default NumberSquare;
