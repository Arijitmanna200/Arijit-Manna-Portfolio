import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { IoDownloadOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { Typewriter } from 'react-simple-typewriter';
import myself from '../assets/Myself/myself.jpg';




const Hero = () => {
    return (
        <>
            <div className="flex flex-col justify-center w-11/12 items-center m-auto mt-20 ">
                <div className="flex flex-col justify-center w-full items-center m-auto gap-2 ">
                    <h1 className="text-5xl lg:text-8xl md:text-7xl prof-color">Hi, I am</h1>
                    <h1 className="text-5xl lg:text-8xl md:text-7xl prof-color">Arijit Manna</h1>
                    <h1 className="text-4xl lg:text-7xl md:text-6x prof-color flex flex-row">& {' '}
                        <span className="">
                            <Typewriter
                                words={['Web Developer', 'Frontend Developer', 'Backend Developer']}
                                loop={0}
                                cursor = {false}
                                typeSpeed={150}
                                deleteSpeed={150}
                                delaySpeed={1500}
                            />
                        </span> <div className="ms-0.5 block lg:h-20 md:h-12 h-10 rounded-sm lg:w-3 md:w-2 w-2 blink-cursor"></div> </h1>
                    <p className="text-xl text-center mt-4 text-gray-600">I craft exceptional digital experiences that blend beatiful design with powerful</p>
                    <p className="text-xl text-center text-gray-600">functionality. Let's build something amazing together</p>
                    <div className="flex flex-row justify-center gap-4 my-5">
                        <div className="btn bg-linear-to-r from-blue-500 to-purple-500 text-white hover:bg-linear-to-r hover:from-purple-500 hover:to-blue-500 hover:scale-102 active:scale-98 transition duration-300 ease-in-out  rounded-xl lg:w-45 md:w-45 w-40 h-15 text-xl">  View Work <FaArrowRight size={20} /></div>
                        <div className="btn bg-linear-to-r from-sky-300 to-sky-50 text-gray-700 hover:bg-linear-to-r hover:from-sky-50 hover:to-sky-300 hover:scale-102 active:scale-98 transition duration-300 ease-in-out  rounded-xl lg:w-50 md:w-50 w-45 h-15 text-xl"><IoDownloadOutline size={24} />Download CV</div>
                    </div>
                </div>
                <div className="flex flex-row justify-center gap-10 my-5">
                    <div className="rounded-xl p-2 bg-white shadow-lg hover:bg-gray-900 hover:text-white hover:scale-110 active:scale-100 transition duration-300 ease-in-out border border-white"> <FiGithub size={30} /> </div>
                    <div className="rounded-xl p-2 bg-white shadow-lg hover:bg-blue-600 hover:text-white hover:scale-110 active:scale-100 transition duration-300 ease-in-out border border-white"> <FiLinkedin size={30} /> </div>
                    <div className="rounded-xl p-2 bg-white shadow-lg hover:bg-linear-to-tr from-purple-500 to-pink-500 hover:text-white hover:scale-110 active:scale-100 transition duration-300 ease-in-out border border-white"> <MdMailOutline size={30} /> </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-5 my-5">
                    <div className="rounded-full w-1/2 lg:w-2/3 md:w-2/3 p-1 myself aspect-square overflow-hidden flex justify-center items-center">
                        <img
                            src={myself}
                            className="w-full h-full rounded-full"
                            alt=""
                        />
                    </div>

                    <div className="rounded-full w-7 h-13 border-blue-400 border-2 overflow-hidden flex justify-center items-center">
                        <div className="w-1/4 h-1/6 bg-blue-500 rounded-full move-item"></div></div>
                </div>
            </div>

        </>
    )
}

export default Hero