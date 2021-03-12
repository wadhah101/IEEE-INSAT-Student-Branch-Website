import MyButton from '@/components/Shared/MyButton';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { FiPlay } from 'react-icons/fi';

interface IHomeDescriptionVideoProps {}

const HomeDescriptionVideo: React.FC<IHomeDescriptionVideoProps> = () => {
  return (
    <figure className="grid gap-x-24 gap-y-4 md:grid-cols-12">
      <div className="relative flex cursor-pointer md:col-span-7 ">
        <StaticImage
          className="relative shadow-xl "
          placeholder="blurred"
          src="https://source.unsplash.com/random/1600x1100"
          alt="HomeVideo"
          // height={600 * (11 / 16)}
        />
        <div className="absolute top-0 left-0 grid w-full h-full text-6xl text-white transition-colors duration-300 ease-in-out bg-black bg-opacity-25 hover:text-opacity-50 place-items-center">
          <FiPlay />
        </div>
      </div>
      <figcaption className="flex flex-col justify-center md:col-span-5">
        <h2 className="text-2xl font-medium text-black md:text-3xl text-opacity-80">
          Lorem ipsum dolor sit amel
        </h2>
        <p className="mt-1 text-black md:mt-4 text-opacity-60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          eveniet dignissimos beatae quaerat rerum molestiae, similique
          temporibus at dolor nihil
        </p>
        <div className="pb-2 mt-2 text-sm md:mt-6">
          <MyButton empty colored>
            WATCH ME
          </MyButton>

          {/* <MyButton hollow colored>
            WATCH ME
          </MyButton> */}
        </div>
      </figcaption>
    </figure>
  );
};

export default HomeDescriptionVideo;
