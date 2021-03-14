import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

interface IChapterElementProps {
  data: GatsbyTypes.ContentfulChapter;
}

const ChapterElement: React.FC<IChapterElementProps> = ({ data }) => {
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <GatsbyImage
        image={getImage(data.logos[0].localFile as any)}
        alt={data.title}
      />

      {isHovering && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          mollitia molestias reprehenderit sequi qui minus illum placeat ex
          provident ab, quia animi eum temporibus nemo excepturi dolore,
          expedita quasi cumque!
        </p>
      )}
    </div>
  );
};

export default ChapterElement;
