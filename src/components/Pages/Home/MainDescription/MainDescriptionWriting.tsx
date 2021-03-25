import React from 'react'

interface IMainDescriptionWritingProps {}

const MainDescriptionWriting: React.FC<IMainDescriptionWritingProps> = () => {
    return (
        <div className="flex flex-col items-center text-center ">
            <h1 className="text-3xl font-bold text-black md:text-4xl text-opacity-80">
                MEET THE LARGEST REGION 8 STUDENT BRANCH
            </h1>
            <p className="mt-2 text-black md:mt-4 text-opacity-70">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
                enim illo eius facilis Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Velit, enim illo eius facilis Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Velit, enim illo
                eius facilis
            </p>
        </div>
    )
}

export default MainDescriptionWriting
