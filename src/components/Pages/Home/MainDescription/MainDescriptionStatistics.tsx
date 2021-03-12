/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { IconType } from 'react-icons/lib';
import { IoEasel, IoTrophy, IoPeople } from 'react-icons/io5';

interface IMainDescriptionStatisticsProps {}

interface StatElement {
  count: number;
  description: string;
  Icon: IconType;
}

const statElementFactory = (
  count: number,
  description: string,
  Icon: IconType,
): StatElement => ({ count, description, Icon });

const stats = [
  statElementFactory(500, `Members`, IoPeople),
  statElementFactory(100, `Activities`, IoEasel),
  statElementFactory(100, `Awards`, IoTrophy),
];

const MainDescriptionStatistics: React.FC<IMainDescriptionStatisticsProps> = () => {
  return (
    <div className="grid w-full text-left md:grid-cols-3 gap-x-24">
      {stats.map(({ description, Icon, count }) => (
        <div
          className="px-6 pb-3 mt-4 md:mt-0 border-sb-blue-main-500"
          key={description}
        >
          <div className="flex items-center text-sb-blue-main-500">
            <div className="text-7xl">
              {/* <Icon /> */}
              <Icon />
            </div>

            <div className="ml-4 ">
              <p className="text-5xl font-black ">{`+${count}`}</p>
              <p className="italic leading-3 tracking-wide text-right uppercase ">
                {description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainDescriptionStatistics;
