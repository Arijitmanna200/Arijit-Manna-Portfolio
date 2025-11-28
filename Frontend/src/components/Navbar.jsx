import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import logo from "../assets/Logo/logo.png";
import logo_without_background from "../assets/Logo/logo_without_background.png";


const Navbar = () => {

    const [isMenuOpen, setisMenuOpen] = useState(false);

    return (
        <>
            <div className="sticky top-0 z-50 w-11/12 rounded-2xl flex flex-col m-auto bg-transparent backdrop-blur-2xl">
                <div className="shadow-md rounded-2xl flex flex-row h-20 w-full">
                    <div className=" w-2/12 h-20 my-auto ms-5 "><img src={logo_without_background} alt="" height="100px" width="60px" className="my-auto pt-3" /></div>
                    <div className=" overflow-hidden flex justify-end w-full">
                        <ul className="lg:flex lg:flex-row lg:gap-5 p-5 md:hidden hidden">
                            <li className=" cursor-pointer  menu flex justify-center flex-row my-auto px-3 py-2 "><a className="rounded-xl link_item transition duration-300 ease-in-out" href="#">Home</a> <div className="underline bg-linear-to-r from-blue-600 via-purple-600 to-red-600"></div></li>
                            <li className=" cursor-pointer  menu flex justify-center flex-row my-auto px-3 py-2 "><a className="rounded-xl link_item transition duration-300 ease-in-out" href="#">About</a> <div className="underline bg-linear-to-r from-blue-600 via-purple-600 to-red-600"></div></li>
                            <li className=" cursor-pointer  menu flex justify-center flex-row my-auto px-3 py-2 "><a className="rounded-xl link_item transition duration-300 ease-in-out" href="#">Education</a> <div className="underline bg-linear-to-r from-blue-600 via-purple-600 to-red-600"></div></li>
                            <li className=" cursor-pointer  menu flex justify-center flex-row my-auto px-3 py-2 "><a className="rounded-xl link_item transition duration-300 ease-in-out" href="#">Skills</a> <div className="underline bg-linear-to-r from-blue-600 via-purple-600 to-red-600"></div></li>
                            <li className=" cursor-pointer  menu flex justify-center flex-row my-auto px-3 py-2 "><a className="rounded-xl link_item transition duration-300 ease-in-out" href="#">Projects</a> <div className="underline bg-linear-to-r from-blue-600 via-purple-600 to-red-600"></div></li>
                            <li className="btn rounded-xl bg-linear-to-r from-blue-600 to-purple-600 hover:bg-linear-to-r hover:from-purple-600 hover:to-blue-600  text-white hover:shadow-lg hover:shadow-blue-200 hover:scale-105 active:scale-95 transition duration-300 ease-in-out">Let's Talk</li>
                        </ul>
                        {isMenuOpen ? (
                            <button onClick={() => setisMenuOpen(false)} className="text-blue-500 active:scale-95 block lg:hidden  md:block my-auto me-5"><IoClose size={30} /></button>
                        ) : (
                            <button onClick={() => setisMenuOpen(true)} className="text-blue-500 active:scale-95 block lg:hidden  md:block my-auto me-5"><TiThMenu size={30} /></button>
                        )}
                    </div>
                </div>
                {/* mobile nav */}
                {isMenuOpen &&
                    (<div className="fixed w-full top-22 rounded-xl flex flex-col border-2 border-blue-500 bg-sky-100 backdrop-blur-2xl transition-transform duration-300 ease-in-out">
                        <div className=" flex justify-start w-full">
                            <ul className="flex flex-col gap-2 w-full ">
                                <li className=" cursor-pointer rounded-xl hover:bg-blue-50 w-full my-auto ps-4 mx-0 py-4 h-15 active:scale-98 transition duration-300 ease-in-out "><a className="my-auto rounded-xl transition duration-300 ease-in-out text-blue-500" href="#">Home</a></li>
                                <li className=" cursor-pointer rounded-xl hover:bg-blue-50 w-full my-auto ps-4 mx-0 py-4 h-15 active:scale-98 transition duration-300 ease-in-out"><a className="my-auto rounded-xl transition duration-300 ease-in-out text-blue-500" href="#">About</a></li>
                                <li className=" cursor-pointer rounded-xl hover:bg-blue-50 w-full my-auto ps-4 mx-0 py-4 h-15 active:scale-98 transition duration-300 ease-in-out"><a className="my-auto rounded-xl transition duration-300 ease-in-out text-blue-500" href="#">Education</a></li>
                                <li className=" cursor-pointer rounded-xl hover:bg-blue-50 w-full my-auto ps-4 mx-0 py-4 h-15 active:scale-98 transition duration-300 ease-in-out"><a className="my-auto rounded-xl transition duration-300 ease-in-out text-blue-500" href="#">Skills</a></li>
                                <li className=" cursor-pointer rounded-xl hover:bg-blue-50 w-full my-auto ps-4 mx-0 py-4 h-15 active:scale-98 transition duration-300 ease-in-out"><a className="my-auto rounded-xl transition duration-300 ease-in-out text-blue-500" href="#">Projects</a></li>
                                <li className="btn rounded-xl bg-linear-to-r from-blue-600 to-purple-600 hover:bg-linear-to-r hover:from-purple-600 hover:to-blue-600   text-white hover:shadow-lg hover:shadow-blue-200 active:scale-98 transition duration-300 ease-in-out">Let's Talk</li>
                            </ul>
                        </div>
                    </div>)}

            </div>
        </>
    )
}

export default Navbar