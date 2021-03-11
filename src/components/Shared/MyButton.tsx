/* eslint-disable indent */
/* eslint-disable object-curly-newline */
import clsx from 'clsx';
import React from 'react';
import cond from 'lodash.cond';

// TODO define button states and transitions

const shared = `px-8 py-3 font-semibold tracking-wider border-2 transition-colors duration-300 ease-in-out`;

const emptyColorToFilledColor = clsx(
  shared,
  `border-sb-blue-main-500 text-sb-blue-main-500 hover:bg-sb-blue-main-500 hover:text-white`,
);

const emptyToFilledWhite = clsx(
  shared,
  `text-white border-white hover:bg-white hover:text-black hover:text-opacity-80 `,
);

const filledColorToBgWhite = clsx(
  shared,
  ` bg-sb-blue-main-500 text-white border-sb-blue-main-500 hover:bg-white  hover:text-black hover:text-opacity-80 hover:border-white`,
);

interface IBannerButtonProps {
  empty?: boolean;
  colored?: boolean;
  initialColor?: boolean;
}

const MyButton: React.FC<
  IBannerButtonProps & React.ButtonHTMLAttributes<any>
> = ({ colored, empty, children, className, ...props }) => {
  return (
    <button
      {...{ props }}
      type="button"
      className={clsx(
        cond([
          [() => empty && colored, () => emptyColorToFilledColor],
          [() => empty, () => emptyToFilledWhite],
          [() => true, () => filledColorToBgWhite],
        ])(),
        className,
      )}
    >
      {children}
    </button>
  );
};

export default MyButton;
