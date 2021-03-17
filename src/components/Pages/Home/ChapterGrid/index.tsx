/* eslint-disable function-paren-newline */
import React from 'react';
import ChapterElement from '../ChapterElement/ChapterElement';

interface IindexProps {
  chapters: GatsbyTypes.ContentfulChapter[];
}

const chaptersOrder = [`RAS`, `CS`, `IAS`, `PES`, `EMBS`, `NPSS`];

const ChapterGrid: React.FC<IindexProps> = ({ chapters }) => {
  const data = chaptersOrder.map((e) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    chapters.find((e1) => e1.acronym === e),
  );
  const wie = chapters.find((e1) => e1.acronym === `WIE`);

  return (
    <div className="py-20 bg-sb-blue-main-500">
      <h2 className="mb-4 text-5xl font-bold leading-tight text-center text-white">
        OUR AFFINITY
        <br />
        GROUP
      </h2>
      <div className="grid items-center grid-cols-3 gap-x-4 gap-y-4 justify-items-center c-container">
        <div />
        <div className="px-4">
          <ChapterElement data={wie} />
        </div>
      </div>

      <h2 className="mt-8 mb-8 text-5xl font-bold text-center text-white">
        OUR CHAPTERS
      </h2>
      <div
        style={{ gridAutoRows: `1fr` }}
        className="grid items-center grid-cols-3 gap-x-4 gap-y-4 justify-items-center c-container "
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
