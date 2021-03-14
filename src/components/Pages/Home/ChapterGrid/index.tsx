import React from 'react';
import ChapterElement from '../ChapterElement/ChapterElement';

interface IindexProps {
  chapters: GatsbyTypes.ContentfulChapter[];
}

const ChapterGrid: React.FC<IindexProps> = ({ chapters }) => {
  return (
    <div className="grid grid-cols-3 py-10 gap-14 ">
      {chapters.map((e, ind) => (
        // eslint-disable-next-line react/no-array-index-key
        <ChapterElement data={e} key={ind} />
      ))}
    </div>
  );
};

export default ChapterGrid;
