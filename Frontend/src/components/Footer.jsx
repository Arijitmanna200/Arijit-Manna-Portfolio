import { IoIosArrowUp } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";

import React from 'react'

const Footer = () => {

  const quick_link = [
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    { name: "Projects", link: "#" },
    { name: "Skills", link: "#" },
  ]


  const connect = [
    { name: "GitHub", link: "#" },
    { name: "Linkedin", link: "#" },
    { name: "Email", link: "#" },
  ]
  return (
    <>

      <div className="rounded-t-xl w-full bg-linear-to-r from-gray-900 via-blue-950 to-gray-900 text-white py-8 px-5 flex flex-col justify-center items-center gap-5  mt-5">
        <div className=" py-0 w-full bg-linear-to-r from-gray-900 via-blue-950 to-gray-900 text-white flex lg:flex-row md:flex-row flex-col gap-5">
          <div className="flex flex-col justify-start w-full self">
            <h1 className="prof-color text-3xl font-bold">Arijit Manna </h1>
            <p className="text-sm mt-4 text-gray-400">I craft exceptional digital experiences that blend beatiful design with powerful</p>
            <p className="text-sm text-gray-400">functionality. Let's build something amazing together</p>
            <div className="flex flex-row justify-start gap-10 my-5 ms-3">
              <div className="rounded-xl p-2 shadow-lg hover:bg-gray-900 hover:text-white hover:scale-110 active:scale-100 transition duration-300 ease-in-out w-fit bg-gray-800 text-gray-300"> <FiGithub size={25} /> </div>
              <div className="rounded-xl p-2 bg-gray-800 text-gray-300 shadow-lg hover:bg-blue-600 hover:text-white hover:scale-110 active:scale-100 transition duration-300 ease-in-out w-fit"> <FiLinkedin size={25} /> </div>
              <div className="rounded-xl p-2 bg-gray-800 text-gray-300 shadow-lg hover:bg-linear-to-tr from-purple-500 to-pink-500 hover:text-white hover:scale-110 active:scale-100 transition duration-300 ease-in-out w-fit"> <MdMailOutline size={25} /> </div>
            </div>
          </div>
          <div className="flex flex-row w-full">
          <div className="flex flex-col lg:items-center md:items-center items-center w-full quick-links">
            <h1 className="text-2xl font-bold mb-4 prof-color">Quick Links</h1>
            {quick_link.map((item, index) => (
              <a key={index} href={item.link} className="flex flex-row mb-3 gap-1  footer-link">
              <div className="footer-hov"></div>
              <div className="m-auto text-gray-400 transition duration-300 ease-in-out footer-item"> {item.name} </div>
            </a>
            ))}
          </div>
          <div className="flex flex-col lg:items-center md:items-center items-center w-full connect">
            <h1 className="text-2xl font-bold mb-4 prof-color">Connect</h1>
            {connect.map((item, index) => (
              <a key={index} href={item.link} className="flex flex-row mb-3 gap-1  footer-link">
              <div className="footer-hov"></div>
              <div className="m-auto text-gray-400 transition duration-300 ease-in-out footer-item"> {item.name} </div>
            </a>
            ))}
          </div>
          </div>
        </div>

        <div className="bg-gray-500 h-0.5 w-full"></div>
        <div className="flex lg:flex-row md:flex-row flex-col w-full lg:justify-between md:justify-between justify-center items-center text-sm text-gray-400 text-mono">

          <p>© 2025 Arijit Manna. Made with ❤️ All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>

        </div>


      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500
                  hover:scale-110 transition flex items-center justify-center text-white shadow-xl"
      >
        <IoIosArrowUp size={24} />
      </button>

    </>
  )
}

export default Footer
