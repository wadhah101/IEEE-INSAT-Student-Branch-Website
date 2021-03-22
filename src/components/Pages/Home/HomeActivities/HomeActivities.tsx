import clsx from 'clsx';
import React from 'react';
import * as styles from './HomeActivities.module.css';
import 'swiper/swiper.scss';
import HomeActivitiesElement from './HomeActivitiesElement';

export interface IHomeActivitiesProps {
  data: (GatsbyTypes.ContentfulActivity & { area: string })[];
}

const HomeActivities: React.FC<IHomeActivitiesProps> = ({ data }) => {
  return (
    <div>
      <h2 className="text-4xl font-semibold tracking-wide text-center text-black md:mb-8 text-opacity-80 ">
        OUR LATEST HIGHLIGHTS
      </h2>
      <div
        className={clsx(`flex flex-col md:grid md:grid-cols-3 `, styles.demo)}
      >
        {/* TODO change key with id */}
        {data.map((e) => (
          <div style={{ gridArea: e.area }} key={e.id}>
            <HomeActivitiesElement className="w-full h-full" data={e} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeActivities;
