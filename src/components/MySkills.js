import React from 'react'
import htmli from "../assets/htmli.png"
const MySkills = () => {
    const myskills=[
        {
            id:1,
            src: htmli,
            title:'HTML',
            style:'shadow-orange-500',
        },
        {
            id:2,
            src:'https://source.unsplash.com/500x400/?nature,code',
            title:'CSS',
            style:'shadow-blue-500',
        },
        {
            id:3,
            src:'https://source.unsplash.com/500x400/?nature,animals',
            title:'JavaScript',
            style:'shadow-yellow-500',
        },
        {
            id:4,
            src:'https://source.unsplash.com/500x400/?nature,tiger',
            title:'React',
            style:'shadow-blue-600',
        },
        {
            id:5,
            src:'https://source.unsplash.com/500x400/?nature,fish',
            title:'tailwind',
            style:'shadow-sky-400',
        },
        {
            id:6,
            src:'https://source.unsplash.com/500x400/?nature,men',
            title:'next js',
            style:'shadow-white',
        },
        {
            id:7,
            src:'https://source.unsplash.com/500x400/?nature,women',
            title:'SQL',
            style:'shadow-blue-800',
        },
        {
            id:8,
            src:'https://source.unsplash.com/500x400/?baby,boy',
            title:'GitHub',
            style:'shadow-gray-400',
        },
    ]
  return (
    <div name='myskills' className=' bg-gradient-to-b from-gray-800 to-black w-full'>
        <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white mt-14">
            <div className="">
                <p className=' text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>My Skills</p>
                <p className=' py-6'>These are the technologies I've worked With</p>
            </div>
            <div className=' w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {myskills.map(({id,src,title,style})=>(
                    <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg '+style}>
                        <img src={src} alt="" className={'w-20 mx-auto'}/>
                        <p className=' mt-4'>{title}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MySkills