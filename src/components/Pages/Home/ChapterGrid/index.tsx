import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

interface IindexProps {
  chapters: GatsbyTypes.ContentfulChapter[];
}

const ChapterGrid: React.FC<IindexProps> = ({ chapters: demoChapters }) => {
  const chapters = new Array<GatsbyTypes.ContentfulChapter>(6).fill(
    demoChapters[0],
  );
  return (
    <div className="grid grid-cols-3 py-10 gap-14 ">
      {chapters.map((e, ind) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={ind}>
          <GatsbyImage
            image={getImage(e.logos[0].localFile as any)}
            alt={e.title}
          />
        </div>
      ))}
    </div>
  );
};

export default ChapterGrid;
