import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SocialMediaLinkFactory } from '../../types/SocialMediaLink';

interface IHomeBannerMediaIconsProps {}

const links = [
  SocialMediaLinkFactory(
    `facebook`,
    `https://www.facebook.com/IeeeInsatStudentBranch/`,
    FaFacebook,
  ),
  SocialMediaLinkFactory(
    `Instagram`,
    `https://www.instagram.com/ieee.insat.sb/`,
    FaInstagram,
  ),
  SocialMediaLinkFactory(
    `linkedin`,
    `https://www.linkedin.com/school/national-institute-of-applied-science-and-technology/`,
    FaLinkedin,
  ),
];

const HomeBannerMediaIcons: React.FC<IHomeBannerMediaIconsProps> = () => {
  return (
    <div className="inline-grid grid-flow-col-dense gap-4 text-3xl ">
      {links.map(({ Icon, href, title }) => (
        <a
          key={title}
          target="__blank"
          href={href}
          rel="noreferrer"
          title={title}
          className="inline-block"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default HomeBannerMediaIcons;
