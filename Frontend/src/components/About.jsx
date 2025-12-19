import React from 'react'
import { FaCode } from "react-icons/fa6";
import { CgAwards } from "react-icons/cg";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { MdOutlineElectricBolt } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { LuBrain } from "react-icons/lu";
import {Element} from "react-scroll";

const About = () => {
    return (
        <Element name='About' id='About'>
            <div className="flex justify-center items-center w-11/12 m-auto flex-col">
                <div className=" border border-cyan-200 bg-linear-to-r from-cyan-100 to-pink-100 rounded-3xl px-4 py-2 my-5"><h1 className="m-auto prof-color ">About Me</h1></div>
                <div className="flex flex-col justify-center w-full items-center m-auto gap-2 ">
                    <h1 className="text-3xl lg:text-5xl md:text-4xl prof-color text-center">Passionate About Building</h1>
                    <h1 className="text-3xl lg:text-5xl md:text-4xl prof-color py-2 text-center">Digital Excellence</h1>
                    <p className="text-xl text-center mt-4 text-gray-600 lg:w-2/3 md:w-5/6">I'm a full-stack developer and designer with a passion for creating innovative digital solutions. I combine technical expertise with creative vision to deliver exceptional results.</p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 w-11/12 mt-5  py-5">
                    <div className="about-card my-3 rounded-2xl w-11/12 h-50 flex flex-col justify-center items-center m-auto bg-cyan-50 shadow-lg transition duration-500 ease-in-out hover:bg-linear-to-r hover:from-cyan-50 hover:to-cyan-100">
                        <div className="about-card-icon p-3 rounded-2xl bg-linear-to-br from-blue-300 via-blue-600 to-blue-700 text-white shadow-blue-400 shadow-lg"><FaCode size="40" /></div>
                        <h1 className="text-center text-2xl text-gray-600 font-semibold mt-3">Clean Code</h1>
                        <p className="lg:text-md md:text-md text-sm  text-center mt-4 text-gray-600 w-11/12">Writing maintainable and scalable solutions</p>
                    </div>
                    <div className="about-card my-3 rounded-2xl w-11/12 h-50 flex flex-col justify-center items-center m-auto bg-cyan-50 shadow-lg transition duration-500 ease-in-out hover:bg-linear-to-r hover:from-white hover:to-pink-100">
                        <div className="about-card-icon p-3 rounded-2xl bg-linear-to-br from-violet-500 via-pink-500 to-red-500 text-white shadow-pink-400 shadow-lg"><LuBrain size="40" /></div>
                        <h1 className="text-center text-2xl text-gray-600 font-semibold mt-3">Creative Design</h1>
                        <p className="lg:text-md md:text-md text-sm  text-center mt-4 text-gray-600 w-11/12">Crafting beautiful user experiences</p></div>
                    <div className="about-card my-3 rounded-2xl w-11/12 h-50 flex flex-col justify-center items-center m-auto bg-cyan-50 shadow-lg transition duration-500 ease-in-out hover:bg-linear-to-r hover:from-white hover:to-orange-100">
                        <div className="about-card-icon p-3 rounded-2xl bg-linear-to-br from-orange-500 via-orange-600 to-pink-500 text-white shadow-orange-400 shadow-lg"><HiOutlineRocketLaunch size="40" /></div>
                        <h1 className="text-center text-2xl text-gray-600 font-semibold mt-3">Fast Delivery</h1>
                        <p className="lg:text-md md:text-md text-sm  text-center mt-4 text-gray-600 w-11/12">Meeting deadlines with quality</p></div>
                    <div className="about-card my-3 rounded-2xl w-11/12 h-50 flex flex-col justify-center items-center m-auto bg-cyan-50 shadow-lg transition duration-500 ease-in-out hover:bg-linear-to-r hover:from-white hover:to-yellow-100">
                        <div className="about-card-icon p-3 rounded-2xl bg-linear-to-br from-yellow-300 via-orange-400 to-red-500 text-white shadow-yellow-400 shadow-lg"><MdOutlineElectricBolt size="40" /></div>
                        <h1 className="text-center text-2xl text-gray-600 font-semibold mt-3">Performance</h1>
                        <p className="lg:text-md md:text-md text-sm  text-center mt-4 text-gray-600 w-11/12">Optimized for speed and efficiency</p></div>
                    <div className="about-card my-3 rounded-2xl w-11/12 h-50 flex flex-col justify-center items-center m-auto bg-cyan-50 shadow-lg transition duration-500 ease-in-out hover:bg-linear-to-r hover:from-white hover:to-green-100">
                        <div className="about-card-icon p-3 rounded-2xl bg-linear-to-br from-green-400 via-green-600 to-green-300 text-white shadow-green-400 shadow-lg"><CgAwards size="40" /></div>
                        <h1 className="text-center text-2xl text-gray-600 font-semibold mt-3">Best Practices</h1>
                        <p className="lg:text-md md:text-md text-sm  text-center mt-4 text-gray-600 w-11/12">Following industry standards</p></div>
                    <div className="about-card my-3 rounded-2xl w-11/12 h-50 flex flex-col justify-center items-center m-auto bg-cyan-50 shadow-lg transition duration-500 ease-in-out hover:bg-linear-to-r hover:from-white hover:to-purple-100">
                        <div className="about-card-icon p-3 rounded-2xl bg-linear-to-br from-blue-500 via-purple-500 to-red-400 text-white shadow-purple-400 shadow-lg"><HiOutlineUserGroup size="40" /></div>
                        <h1 className="text-center text-2xl text-gray-600 font-semibold mt-3">Collaboration</h1>
                        <p className="lg:text-md md:text-md text-sm  text-center mt-4 text-gray-600 w-11/12">Team player with great communication</p></div>

                </div>
            </div>
        </Element>

    )
}

export default About