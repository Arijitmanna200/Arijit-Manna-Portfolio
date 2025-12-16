import React from 'react'
import { FaCode } from "react-icons/fa6";
import { BsDatabase } from "react-icons/bs";
import { FaServer } from "react-icons/fa";
import { VscTools } from "react-icons/vsc";
import { BsPalette } from "react-icons/bs";
import {Element} from "react-scroll";



const Skill = () => {


    const skills = [
        {
            title: "Frontend Development",
            icon: <BsPalette size={30} />,
            themeColor: "from-blue-600 to-cyan-500",
            skillsList: [
                { name: "HTML5", level: 90 },
                { name: "CSS3", level: 85 },
                { name: "JavaScript", level: 80 },
                { name: "React.js", level: 75 },
                { name: "Tailwind CSS", level: 70 },
                { name: "Bootstrap", level: 70 }

            ]
        },
        {
            title: "Backend Development",
            icon: <FaServer size={30} />,
            themeColor: "from-purple-600 to-pink-500",
            skillsList: [
                { name: "Node.js", level: 75 },
                { name: "Express.js", level: 70 },
                { name: "Django", level: 65 },
                { name: "Flask", level: 60 }
            ]
        },
        {
            title: "Tools & Platforms",
            icon: <VscTools size={30} />,
            themeColor: "from-pink-500 to-red-600",
            skillsList: [
                { name: "Git & GitHub", level: 85 },
                { name: "Postman", level: 75 },
                { name: "Vite", level: 70 },
                { name: "Vercel", level: 70 },
                { name: "Kaggle", level: 60 },
                { name: "Vs Code", level: 70 }
            ]
        },
        {
            title: "Database Management",
            icon: <BsDatabase size={30} />,
            themeColor: "from-orange-500 to-yellow-600",
            skillsList: [
                { name: "MongoDB", level: 80 },
                { name: "MySQL", level: 70 }
            ]
        },

        {
            title: "Programming Languages",
            icon: <FaCode size={30} />,
            themeColor: "from-blue-500 via-purple-500 to-red-400",
            skillsList: [
                { name: "c", level: 70 },
                { name: "Java", level: 65 },
                { name: "Python", level: 70 }
            ]
        }
    ]

    return (
        <Element name='Skill' id='SKill'>

            <div className="flex justify-center items-center w-full skill-domain m-auto flex-col px-5">
                <div className=" border border-cyan-200 bg-linear-to-r from-cyan-100 to-pink-100 rounded-3xl px-4 py-2 my-5"><h1 className="m-auto prof-color ">Skills & Expertise</h1></div>
                <div className=" flex flex-col justify-center w-full items-center m-auto gap-2 ">
                    <h1 className="text-3xl lg:text-5xl md:text-4xl prof-color ">My Technical</h1>
                    <h1 className="text-3xl lg:text-5xl md:text-4xl prof-color py-2">Skill Set</h1>
                </div>

                <div className=" grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-5 skill-grid  py-5 lg:w-4xl md:w-8/12 w-11/12">

                    {skills.map((skill) => (
                        <div key={skill.title} className=" rounded-2xl w-full flex flex-col p-5 skill-card">
                            <div className="flex flex-row pb-10">
                                <div className={` p-3 rounded-2xl bg-linear-to-br ${skill.themeColor}  text-white skill-icon `}>{skill.icon}</div>
                                <h1 className="lg:text-2xl md:text-2xl text-2xl  text-gray-600 font-mono mt-3 ms-2">{skill.title}</h1>
                            </div>

                            {skill.skillsList.map((item) => (
                                <><div key={item.name} className="flex flex-row justify-between mt-4 text-gray-600 font-mono">
                                    <p>{item.name}</p>
                                    <p>{item.level} %</p>
                                </div>
                                    <div className=" rounded-2xl overflow-hidden mt-2">
                                        <div className="h-3 bg-gray-200 rounded-2xl dark:bg-gray-700 overflow-hidden">
                                            <div className={`bg-linear-to-r ${skill.themeColor} h-3 rounded-2xl`} style={{ width: `${item.level}%` }}></div>
                                        </div>
                                    </div></>
                            ))}


                        </div>

                    ))}



                </div>

            </div>

        </Element>
    )
}

export default Skill