import BannerButton from '@/components/Shared/BannerButton';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

interface IHomeBannerProps {}

const HomeBanner: React.FC<IHomeBannerProps> = () => {
  return (
    <div className="relative ">
      <div className="absolute top-0 left-0 w-full h-full ">
        <StaticImage
          style={{ height: `100vh` }}
          src="../../../../assets/pages/home/banner.jpg"
          alt="homeBanner"
          placeholder="dominantColor"
          layout="fullWidth"
          objectPosition="50% 80%"
        />
      </div>
      <div className="absolute top-0 left-0 z-10 w-full h-full bg-black bg-opacity-60 " />
      {/* content */}
      <div className="relative z-20 flex items-center min-h-screen text-white ">
        <div className="container pb-10 mx-auto ">
          {/* title block */}
          <div className="inline-block mb-6 md:mb-10 ">
            <h1 className="text-5xl font-bold text-center text-white md:text-left md:text-8xl">
              IEEE INSAT
              <br />
              STUDENT BRANCH
            </h1>
            <h2 className="mt-4 text-xl font-semibold text-center text-white md:mt-0 md:text-right ">
              Advancing technology for humanity
            </h2>
          </div>

          {/* button block */}
          <div className="grid gap-4 md:justify-start md:grid-flow-col-dense">
            <BannerButton>JOIN US</BannerButton>
            <BannerButton hollow>REACH US</BannerButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
