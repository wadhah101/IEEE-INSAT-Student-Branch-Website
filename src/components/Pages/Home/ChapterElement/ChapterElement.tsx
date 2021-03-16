/* eslint-disable implicit-arrow-linebreak */
import clsx from 'clsx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';

interface IChapterElementProps {
  data: GatsbyTypes.ContentfulChapter;
}

const ChapterElement: React.FC<IChapterElementProps> = ({ data }) => {
  const [isHoveringMulti, setIsHoveringMulti] = useState({
    out: false,
    in: false,
  });
  const isHovering = isHoveringMulti.in || isHoveringMulti.out;

  return (
    <div
      className={clsx(`flex h-full  items-center  p-6 cursor-pointer`)}
      onMouseEnter={() => setIsHoveringMulti((e) => ({ ...e, out: true }))}
      onMouseLeave={() => setIsHoveringMulti((e) => ({ ...e, out: false }))}
    >
      <div className="relative ">
        <GatsbyImage
          className={clsx(
            isHovering ? `opacity-0` : `opacity-100`,
            `duration-300 ease-in-out transition-opacity`,
          )}
          image={getImage(data.logos[1].localFile as any)}
          alt={`${data.title} logo monochrome`}
        />

        <div
          className={clsx(
            `absolute duration-300 ease-in-out transition-opacity top-0 left-0 z-10 w-full h-full `,
            [isHovering ? `opacity-100` : `opacity-0`],
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
