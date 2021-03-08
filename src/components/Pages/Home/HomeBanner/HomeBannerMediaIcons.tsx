import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface IHomeBannerMediaIconsProps {}

const HomeBannerMediaIcons: React.FC<IHomeBannerMediaIconsProps> = () => {
  return (
    <div className="inline-grid grid-flow-col-dense gap-4 text-3xl ">
      <FaFacebook />
      <FaInstagram />
      <FaLinkedin />
    </div>
  );
};

export default HomeBannerMediaIcons;
