import clsx from 'clsx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import * as styles from './HomeActivities.module.css';

export interface Meh {
  file: GatsbyTypes.FileEdge;
  class: string;
}

export interface IHomeActivitiesProps {
  data: Meh[];
}

const HomeActivities: React.FC<IHomeActivitiesProps> = ({ data }) => {
  console.log(data);

  return (
    <div className={clsx(`grid  md:grid-cols-3 `, styles.demo)}>
      {data.map((e) => (
        <div className="grid bg-red-50" style={{ gridArea: e.class }}>
          <GatsbyImage
            alt="ok"
            image={getImage(e.file.node)}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default HomeActivities;
