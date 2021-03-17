/* eslint-disable function-paren-newline */
import clsx from 'clsx';
import React from 'react';
import ChapterElement from '../ChapterElement/ChapterElement';
import * as style from './chapterGrid.module.css';

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
    <div className="py-12 md:py-24 bg-sb-blue-main-500">
      <h2 className="mb-10 text-3xl font-bold text-center text-white md:mb-4 md:text-5xl">
        OUR CHAPTERS
      </h2>
      <div
        className={clsx(
          `grid items-center md:grid-cols-3 gap-4 justify-items-center c-container `,
          style.gridAutoRaw,
        )}
      >
        {data.map((e) => (
          // eslint-disable-next-line react/no-array-index-key
          <ChapterElement data={e} key={e.id} />
        ))}
      </div>

      <h2 className="my-10 text-3xl font-bold leading-tight text-center text-white md:mt-8 md:mb-12 md:text-5xl">
        OUR AFFINITY
        <br />
        GROUP
      </h2>
      <div className="grid items-center md:grid-cols-3 md:gap-x-4 md:gap-y-4 justify-items-center c-container">
        <div />
        <div className="md:px-4">
          <ChapterElement data={wie} />
        </div>
      </div>
    </div>
  );
};

export default ChapterGrid;
