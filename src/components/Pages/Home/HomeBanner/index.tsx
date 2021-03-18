import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import HomeBannerButtonBlock from './HomeBannerButtonBlock';
import HomeBannerWriting from './HomeBannerWriting';
import HomeBannerMediaIcons from './HomeBannerMediaIcons';

interface IHomeBannerProps {}

const HomeBanner: React.FC<IHomeBannerProps> = () => {
  return (
    <div className="relative ">
      <div className="absolute top-0 left-0 w-full h-full ">
        <StaticImage
          style={{ height: `100vh` }}
          src="../../../../../assets/pages/home/banner.jpg"
          alt="homeBanner"
          placeholder="dominantColor"
          layout="fullWidth"
          objectPosition="50% 80%"
        />
      </div>
      <div className="absolute top-0 left-0 z-10 w-full h-full bg-black bg-opacity-60 " />
      {/* content */}
      <div className="relative z-20 flex flex-col min-h-screen text-white ">
        <div className="flex flex-col flex-grow w-full h-full c-container">
          <div />
          <div className="flex flex-col justify-center flex-grow w-full md:items-start ">
            {/* title block */}
            <HomeBannerWriting />

            {/* button block */}
            <div className="mt-3 md:mt-8 ">
              <HomeBannerButtonBlock />
            </div>
          </div>
          <div className="flex flex-col-reverse pb-4 md:pb-6">
            <div className="flex justify-center md:justify-start md:flex-row-reverse">
              <HomeBannerMediaIcons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
