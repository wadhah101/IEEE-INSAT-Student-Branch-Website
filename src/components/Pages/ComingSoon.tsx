import React from 'react'

interface IComingSoonProps {}

const ComingSoon: React.FC<IComingSoonProps> = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-black ">
            <p className="p-8 text-3xl font-bold text-center border-8 border-sb-blue-main-500 text-sb-blue-main-500 md:text-7xl">
                #COMING SOON
            </p>
        </div>
    )
}

export default ComingSoon
