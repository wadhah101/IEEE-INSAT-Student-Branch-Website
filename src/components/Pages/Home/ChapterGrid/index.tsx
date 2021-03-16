/* eslint-disable function-paren-newline */
import React from 'react';
import ChapterElement from '../ChapterElement/ChapterElement';

interface IindexProps {
  chapters: GatsbyTypes.ContentfulChapter[];
}

const chaptersOrder = [`PES`, `RAS`, `IAS`, `NPSS`, `EMBS`, `CS`];

const ChapterGrid: React.FC<IindexProps> = ({ chapters }) => {
  const data = chaptersOrder.map((e) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    chapters.find((e1) => e1.acronym === e),
  );
  return (
    <div className="py-20 bg-sb-blue-main-500">
      {/* <h2 className="mb-12 text-5xl font-bold tracking-wider text-center text-white ">
        OUR CHAPTERS
      </h2> */}
      <div
        style={{ gridAutoRows: `1fr` }}
        className="grid items-center grid-cols-3 gap-x-20 gap-y-16 justify-items-center c-container "
      >
        {data.map((e) => (
          // eslint-disable-next-line react/no-array-index-key
          <ChapterElement data={e} key={e.id} />
        ))}
      </div>
    </div>
  );
};

export default ChapterGrid;
