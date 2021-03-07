/* eslint-disable object-curly-newline */
import clsx from 'clsx';
import React from 'react';

interface IBannerButtonProps {
  hollow?: boolean;
}

const BannerButton: React.FC<
  IBannerButtonProps & React.ButtonHTMLAttributes<any>
> = ({ hollow, children, className, ...props }) => {
  return (
    <button
      {...{ props }}
      type="button"
      className={clsx(
        `px-8 py-2 font-semibold tracking-wide  border-2 border-white`,
        hollow ? `text-white` : `bg-white text-black text-opacity-80`,
        className,
      )}
    >
      {children}
    </button>
  );
};

export default BannerButton;
