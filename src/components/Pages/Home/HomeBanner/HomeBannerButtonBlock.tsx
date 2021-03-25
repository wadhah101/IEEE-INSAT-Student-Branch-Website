import MyButton from '@/components/Shared/MyButton'
import { Link } from 'gatsby'
import React from 'react'

interface IHomeBannerButtonBlockProps {}

const HomeBannerButtonBlock: React.FC<IHomeBannerButtonBlockProps> = () => {
    return (
        <div>
            <div className="grid items-start gap-2 text-sm md:gap-4 md:inline-grid md:justify-start md:grid-cols-2">
                <Link title="Join Form" to="/join">
                    <MyButton colored className="w-full">
                        JOIN US
                    </MyButton>
                </Link>

                <Link title="Contact Page" to="/contact">
                    <MyButton className="w-full" empty>
                        CONTACT US
                    </MyButton>
                </Link>
            </div>
        </div>
    )
}

export default HomeBannerButtonBlock
