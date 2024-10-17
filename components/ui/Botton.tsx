import React from 'react'

const Botton = ({title, icon, position, handleClick, moreClasses} : 
    { title: string, icon: React.ReactNode, position: string, handleClick?: () => void; moreClasses?:string}) => {
    return (
        <button className="relative inline-flex h-12  w-full overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2  md:w-60 md:mt-10">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 py-1 text-sm gap-2 font-medium text-white backdrop-blur-3xl ${moreClasses}`}>
                {position === "left" && icon}
                {title}
                {position === "right" && icon}

            </span>
        </button>
    )
}

export default Botton