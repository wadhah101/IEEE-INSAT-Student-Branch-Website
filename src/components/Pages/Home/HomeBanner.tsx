import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

interface IHomeBannerProps {}

const HomeBanner: React.FC<IHomeBannerProps> = () => {
  return (
    <div className="relative ">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <StaticImage
          src="../../../../assets/pages/home/banner.jpg"
          alt="homeBanner"
          placeholder="blurred"
          width={1920}
          layout="fixed"
          className=""
        />
      </div>

      <div className="absolute top-0 left-0 z-10 w-full h-full bg-black bg-opacity-50 " />

      <div className="relative z-20 min-h-screen text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorem
        commodi eaque voluptas ipsum, impedit facilis error soluta autem nihil
        pariatur est sunt minima! Eius veritatis cumque doloribus voluptatum
        eaque.
      </div>
    </div>
  );
};

export default HomeBanner;
