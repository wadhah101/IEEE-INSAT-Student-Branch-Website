/* eslint-disable implicit-arrow-linebreak */
import clsx from 'clsx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import { FaFacebook, FaGlobe, FaLinkedin } from 'react-icons/fa';
import { SocialMediaLinkFactory } from '../../types/SocialMediaLink';

interface IChapterElementProps {
  data: GatsbyTypes.ContentfulChapter;
}

const ChapterElement: React.FC<IChapterElementProps> = ({ data }) => {
  const [isHoveringMulti, setIsHoveringMulti] = useState({
    out: false,
    in: false,
  });
  const isHovering = isHoveringMulti.in || isHoveringMulti.out;
  const links = [
    SocialMediaLinkFactory(`facebook`, data.facebook, FaFacebook),
    SocialMediaLinkFactory(`linkedin`, data.linkedin, FaLinkedin),
    SocialMediaLinkFactory(`website`, data.site, FaGlobe),
  ];

  return (
    <div
      className={clsx(
        `flex h-full relative rounded items-center px-12 pt-8 pb-16 duration-300 `,
        { 'bg-white': isHovering },
      )}
      onMouseEnter={() => setIsHoveringMulti((e) => ({ ...e, out: true }))}
      onMouseLeave={() => setIsHoveringMulti((e) => ({ ...e, out: false }))}
    >
      {/* social media */}
      <div
        style={{ color: data.accent }}
        className={clsx(
          `absolute bottom-0 left-0 flex duration-300 items-center justify-center w-full h-16 gap-4 text-3xl text-opacity-95 transform`,
          isHovering ? `opacity-100 translate-y-0` : `opacity-0 translate-y-8`,
        )}
      >
        {links.map(({ Icon, href, title }) => (
          <a
            key={title}
            title={title}
            href={href}
            target="__blank"
            rel="noreoopener"
          >
            <Icon />
          </a>
        ))}
      </div>
      <div className="relative ">
        <div
          className={clsx(
            isHovering ? `opacity-0` : `opacity-100`,
            `duration-300 ease-in-out transition-opacity`,
          )}
        >
          <GatsbyImage
            image={getImage(data.logos[1].localFile as any)}
            alt={`${data.title} logo monochrome`}
          />
        </div>

        <div
          className={clsx(
            `absolute duration-300 ease-in-out transition-opacity top-0 left-0 z-10 w-full h-full `,
            [isHovering ? `opacity-100` : ` opacity-0`],
          )}
        >
          <GatsbyImage
            onMouseEnter={() => setIsHoveringMulti((e) => ({ ...e, in: true }))}
            onMouseLeave={
              () => setIsHoveringMulti((e) => ({ ...e, in: false }))
              // eslint-disable-next-line react/jsx-curly-newline
            }
            image={getImage(data.logos[0].localFile as any)}
            alt={`${data.title} logo color`}
          />
        </div>
      </div>
    </div>
  );
};

export default ChapterElement;
