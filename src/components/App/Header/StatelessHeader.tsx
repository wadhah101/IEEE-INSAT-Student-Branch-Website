/* eslint-disable object-curly-newline */
import clsx from 'clsx';
import React from 'react';
import { HeaderLinkData } from './Header.data';
import HeaderLink from './HeaderLink';
import HeaderLogo from './HeaderLogo';

export interface IStatelessHeaderProps {
  isTransparent?: boolean;
  isFixed?: boolean;
  isBig?: boolean;
}

interface HeaderData {
  navLinks: HeaderLinkData[];
}

const StatelessHeader: React.FC<IStatelessHeaderProps & HeaderData> = ({
  navLinks,
  ...props
}) => {
  const { isFixed, isTransparent, isBig } = props;
  return (
    <header
      className={clsx(
        ` flex transition-all duration-300 ease-in-out items-center  top-0 left-0 z-50 w-full  `,
        isTransparent ? `bg-transparent ` : `bg-white bg-opacity-95 shadow `,
        isFixed ? `fixed` : `sticky`,
        isBig ? `md:h-36 h-20` : `h-20`,
      )}
    >
      <div className="flex items-center w-full h-full c-container">
        <HeaderLogo {...props} />
        <div className="flex-row-reverse flex-grow hidden md:flex">
          <ul className="flex items-center">
            {navLinks.map((e) => (
              <li className="mb-0" key={e.link.to}>
                <HeaderLink {...props} data={e} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default StatelessHeader;
