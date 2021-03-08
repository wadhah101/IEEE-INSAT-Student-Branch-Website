import MyButton from '@/components/Shared/MyButton';
import { Link } from 'gatsby';
import React from 'react';

interface IHomeBannerButtonBlockProps {}

const HomeBannerButtonBlock: React.FC<IHomeBannerButtonBlockProps> = () => {
  return (
    <div>
      <div className="grid items-start gap-4 text-sm md:inline-grid md:justify-start md:grid-cols-2">
        <Link to="/JOIN">
          <MyButton colored className="w-full">
            JOIN US
          </MyButton>
        </Link>

        <Link to="/contact">
          <MyButton className="w-full" hollow>
            LEARN MORE
          </MyButton>
        </Link>
      </div>
    </div>
  );
};

export default HomeBannerButtonBlock;
