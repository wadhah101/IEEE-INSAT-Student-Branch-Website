import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import HomeBannerButtonBlock from './HomeBannerButtonBlock';
import HomeBannerWriting from './HomeBannerWriting';

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
      <div className="relative z-20 flex items-center min-h-screen text-white ">
        <div className="w-full c-container ">
          {/* title block */}
          <HomeBannerWriting />

          {/* button block */}
          <div className="mt-6 md:mt-8 ">
            <div className="flex-grow mb-2 ">
              <HomeBannerButtonBlock />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
