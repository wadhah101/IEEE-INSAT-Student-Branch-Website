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
        `flex justify-self-stretch  h-full w-full relative rounded md:bg-transparent bg-white items-center pt-4 pb-12  md:px-12 md:pt-6 md:pb-16 px-4 md:duration-300 `,
        [isHovering ? `md:bg-white` : `md:bg-transparent`],
      )}
      onMouseEnter={() => setIsHoveringMulti((e) => ({ ...e, out: true }))}
      onMouseLeave={() => setIsHoveringMulti((e) => ({ ...e, out: false }))}
    >
      {/* social media */}
      <div
        style={{ color: data.accent }}
        className={clsx(
          `absolute bottom-0 left-0 flex duration-300 items-center justify-center w-full h-12  md:h-16 md:gap-4 gap-3 text-2xl md:text-3xl text-opacity-95 transform`,
          isHovering
            ? `md:opacity-100 md:translate-y-0`
            : `md:opacity-0 md:translate-y-8`,
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
      <div className="relative">
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
            `absolute md:duration-300 md:ease-in-out md:transition-opacity top-0 left-0 h-full z-10 w-full  `,
            [isHovering ? `md:opacity-100` : ` md:opacity-0`],
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
