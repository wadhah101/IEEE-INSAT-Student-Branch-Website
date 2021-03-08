import clsx from 'clsx';
import { Link } from 'gatsby';
import React from 'react';
import HeaderLogo from './HeaderLogo';

export interface IStatelessHeaderProps {
  isTranspartent?: boolean;
  isFixed?: boolean;
}

const navLinks = [`home`, `blog`, `contact`, `about`, `activites`, `awards`];

const StatelessHeader: React.FC<IStatelessHeaderProps> = (props) => {
  const { isFixed, isTranspartent } = props;
  return (
    <header
      className={clsx(
        ` flex transition-all duration-300 ease-in-out items-center  top-0 left-0 z-50 w-full  `,
        isTranspartent ? `bg-transparent ` : `bg-white shadow `,
        isFixed ? `fixed h-36` : `sticky  h-20`,
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
                    isTranspartent ? `text-opacity-75` : `text-sb-blue-main-500`
                  }
                  className={clsx(
                    isTranspartent
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
