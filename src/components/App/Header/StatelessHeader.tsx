import clsx from 'clsx';
import { Link } from 'gatsby';
import React from 'react';
import HeaderLogo from './HeaderLogo';

export interface IStatelessHeaderProps {
  isTransparent?: boolean;
  isFixed?: boolean;
  isBig?: boolean;
}

const navLinks = [`home`, `blog`, `contact`, `about`, `activites`, `awards`];

const StatelessHeader: React.FC<IStatelessHeaderProps> = (props) => {
  const { isFixed, isTransparent, isBig } = props;
  return (
    <header
      className={clsx(
        ` flex transition-all duration-300 ease-in-out items-center  top-0 left-0 z-50 w-full  `,
        isTransparent ? `bg-transparent ` : `bg-white shadow `,
        isFixed ? `fixed` : `sticky`,
        isBig ? `h-36` : `h-20`,
      )}
    >
      <div className="flex items-center w-full h-full c-container">
        <HeaderLogo {...props} />
        <div className="flex flex-row-reverse flex-grow">
          <ul className="flex items-center">
            {navLinks.map((e) => (
              <li className="mb-0" key={e}>
                <Link
                  partiallyActive
                  activeClassName={
                    isTransparent ? `text-opacity-75` : `text-sb-blue-main-500`
                  }
                  className={clsx(
                    isTransparent
                      ? `text-white hover:text-opacity-75`
                      : `text-black text-opacity-75 hover:text-sb-blue-main-500 hover:text-opacity-100`,
                    `px-3 py-2 text-sm font-semibold tracking-wider uppercase transition-colors duration-300 rounded  `,
                  )}
                  to={`/${e}`}
                >
                  {e}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default StatelessHeader;
