import React, { ReactNode } from 'react';
import styles from './NumberSquare.module.css';
import classNames from 'classnames';

interface NumberSquareProps {
  handleClick?: () => void;
  children?: ReactNode;
  isInPlace: boolean;
}

const NumberSquare: React.FC<NumberSquareProps> = (props: NumberSquareProps) => {
  const { children, handleClick, isInPlace } = props;

  const numberSquareClass = classNames(
    { clickable: Boolean(handleClick), [styles.empty]: !children, [styles.inPlace]: isInPlace },
    styles.numberSquare,
  );

  return (
    <div className={numberSquareClass} onClick={handleClick}>
      {children}
    </div>
  );
};

export default NumberSquare;
