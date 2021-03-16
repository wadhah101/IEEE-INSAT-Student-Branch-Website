import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

interface IChapterElementProps {
  data: GatsbyTypes.ContentfulChapter;
}

const ChapterElement: React.FC<IChapterElementProps> = ({ data }) => {
  return (
    <div className="flex p-6 ">
      <GatsbyImage
        image={getImage(data.logos[1].localFile as any)}
        alt={data.title}
      />
    </div>
  );
};

export default ChapterElement;
