import React from 'react';
import { IconType } from 'react-icons';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface IHomeBannerMediaIconsProps {}

interface SocialMediaLink {
  title: string;
  href: string;
  Icon: IconType;
}

const SocialMediaLinkFactory = (
  title: string,
  href: string,
  Icon: IconType,
): SocialMediaLink => ({ title, href, Icon });

const links = [
  SocialMediaLinkFactory(`facebook`, ``, FaFacebook),
  SocialMediaLinkFactory(`Instagram`, ``, FaInstagram),
  SocialMediaLinkFactory(`linkedin`, ``, FaLinkedin),
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
