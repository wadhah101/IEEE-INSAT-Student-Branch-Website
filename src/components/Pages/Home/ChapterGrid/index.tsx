/* eslint-disable implicit-arrow-linebreak */
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
    chapters.find((e1) => e1.acronym === e),
  );
  const wie = chapters.find((e1) => e1.acronym === `WIE`);

  return (
    <div className="py-12 md:py-24 bg-sb-blue-main-500">
      {/* <h2 className="mb-10 text-3xl font-bold text-center text-white md:mb-4 md:text-5xl">
        OUR CHAPTERS
      </h2> */}
      <div
        className={clsx(
          `grid items-center md:grid-cols-12 gap-3 justify-items-center c-container `,
          style.gridAutoRaw,
        )}
      >
        {data.map((e, ind) => (
          // eslint-disable-next-line react/no-array-index-key
          <ChapterElement
            className={clsx(
              `px-4 pt-4 pb-12 md:pt-6 md:pb-12`,
              ind <= 2 ? `col-span-4 md:px-10 ` : `col-span-3 md:px-8`,
            )}
            data={e}
            key={e.id}
          />
        ))}
        <ChapterElement
          className="col-span-3 px-4 pt-4 pb-12 md:px-14 md:pt-6 md:pb-12 "
          data={wie}
        />
      </div>
    </div>
  );
};

export default ChapterGrid;
