import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { IStatelessHeaderProps } from './StatelessHeader';

const HeaderLogoHeight = 50;

const HeaderLogo: React.FC<IStatelessHeaderProps> = ({ isTransparent }) => {
  // TODO fix sb.webp optimzations
  return (
    <Link className="flex" to="/">
      {isTransparent ? (
        <StaticImage
          alt="App Logo"
          src="../../../../assets/logos/sb/sb-white.png"
          height={HeaderLogoHeight}
          placeholder="none"
        />
      ) : (
        <StaticImage
          alt="App Logo"
          placeholder="none"
          src="../../../../assets/logos/sb/sb.webp"
          height={HeaderLogoHeight}
        />
      )}
    </Link>
  );
};

export default HeaderLogo;
