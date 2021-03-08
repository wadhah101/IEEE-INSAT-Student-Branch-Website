/* eslint-disable indent */
/* eslint-disable object-curly-newline */
import clsx from 'clsx';
import React from 'react';

interface IBannerButtonProps {
  hollow?: boolean;
  colored?: boolean;
}

const MyButton: React.FC<
  IBannerButtonProps & React.ButtonHTMLAttributes<any>
> = ({ colored, hollow, children, className, ...props }) => {
  return (
    <button
      {...{ props }}
      type="button"
      className={clsx(
        `px-8 py-2.5 font-semibold tracking-wider border-2 transition-colors duration-300 ease-in-out`,
        hollow
          ? [
              `text-white border-white` && colored
                ? `hover:text-sb-blue-main-500  hover:border-sb-blue-main-500 `
                : `hover:text-black hover:text-opacity-80 hover:bg-white `,
            ]
          : [
              colored
                ? `bg-sb-blue-main-500 border-sb-blue-main-500 text-white hover:border-white  hover:bg-white hover:text-black hover:text-opacity-80`
                : `bg-white border-white hover:bg-sb-blue-main-500  hover:border-sb-blue-main-500 hover:text-white text-black text-opacity-80`,
            ],
        className,
      )}
    >
      {children}
    </button>
  );
};

export default MyButton;
