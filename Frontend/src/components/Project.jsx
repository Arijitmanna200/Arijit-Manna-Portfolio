import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";
import { LuGithub } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";
import SPORTSENSE from '../assets/project/SPORTSENSE.jpg';
import SOCIALSPHERE from '../assets/project/SOCIALSPHERE.jpg';
import NOTEVERSE from '../assets/project/NOTEVERSE.jpg';
import CODEXLEARN from '../assets/project/CODEXLEARN.jpg';
import {Element} from "react-scroll";

const Project = () => {
    const autoplayRef = useRef(null);

    const [items, setItems] = useState([
       
        {
            id: 1,
            img: SPORTSENSE,
            title: "SPORTSENSE",
            description: "A predictive system that forecasts whether parents would support their child in pursuing a sports career using survey data and machine learning.",
            TechStack: ["React", "Flask", "Python"],
            githubLink: "https://github.com/Arijitmanna200/SportSense.git",
        },
        /* {
            id: 2,
            img: SOCIALSPHERE ,
            title: "SOCIALSPHERE",
            description: "This is a description for SocialSphere ",
            TechStack: ["React", "Node.js", "Express", "MongoDB"],
            githubLink: "#",

        },
        {
            id: 3,
            img: NOTEVERSE,
            title: "NOTEVERSE",
            description: "This is a description for NoteVerse",
            TechStack: ["React", "Node.js", "Express", "MongoDB"],
            githubLink: "#",
        },
        {
            id: 4,
            img: CODEXLEARN,
            title: "CODEXLEARN",
            description: "This is a description for CodeXLearn",
            TechStack: ["React", "Node.js", "Express", "MongoDB"],
            githubLink: "#",
        },*/

    ]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(null);

    const handleNext = () => {
        setPrevIndex(currentIndex);
        setCurrentIndex((prev) => (prev + 1) % items.length);
        setItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
    };

    const handlePrev = () => {
        setPrevIndex(currentIndex);
        setCurrentIndex((prev) =>
            prev === 0 ? items.length - 1 : prev - 1
        );

        setItems((prevItems) => [prevItems[prevItems.length - 1], ...prevItems.slice(0, -1)]);
    };

    function getGap(width) {
        if (width < 500) return 115;
        if (width <= 800) return 115;
        if (width <= 1250) return 170;
        return 220;
    }

    function getWidthPercentage(width) {
        if (width < 500) return 50;
        if (width <= 600) return 140;
        if (width <= 800) return 270;
        if (width <= 900) return 150;
        if (width <= 1250) return 170;
        if (width <= 1350) return 120;
        return 150;
    }
    const [widthPercentage, setWidthPercentage] = useState(getWidthPercentage(window.innerWidth));
    const [gap, setGap] = useState(getGap(window.innerWidth));

    useEffect(() => {
       autoplayRef.current = setInterval(handleNext, 4000);
        function handleResize() {
            setGap(getGap(window.innerWidth));
            setWidthPercentage(getWidthPercentage(window.innerWidth));
        }
        window.addEventListener("resize", handleResize);

        return () => {
            clearInterval(autoplayRef.current);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const pauseAutoplay = () => clearInterval(autoplayRef.current);

    const resumeAutoplay = () => {
        autoplayRef.current = setInterval(handleNext, 4000);
    };

    return (
        <Element name='Project' id='Project'>
        <div className="flex justify-center items-center w-11/12 m-auto flex-col">
            <div className="border border-cyan-200 bg-linear-to-r from-cyan-100 to-pink-100 rounded-3xl px-4 py-2 my-5">
                <h1 className="m-auto prof-color">Projects</h1>
            </div>

            <div className="flex flex-col justify-center w-full items-center m-auto gap-2">
                <h1 className="text-3xl lg:text-5xl md:text-4xl prof-color">My Projects</h1>
                <p className="text-xl text-center mt-4 text-gray-600 lg:w-2/3 md:w-5/6">
                    A showcase of my recent work and creative solutions
                </p>
            </div>

            <div
                className="shadow-lg rounded-xl lg:w-8/12 lg:h-130 md:w-10/12 md:h-110 h-90 w-11/12 my-5 relative overflow-hidden"
                onMouseEnter={pauseAutoplay}
                onMouseLeave={resumeAutoplay}
            >
                <ul className="slider h-full w-full relative">
                    {items.map((slide, index) => {
                        const GAP = gap;

                        const StartWidthPercentage = widthPercentage;

                        let style = {
                            backgroundImage: `url(${slide.img})`,
                        };

                        if (index > 1 && index < 4) {

                            const offsetIndex = index - 2;
                            let translateX = `calc(${StartWidthPercentage}% + ${GAP}px  + ${offsetIndex * GAP}px)`;

                            style.transform = `translate(${translateX}, -5%)`;

                        }

                        if (index >= 4) {
                            const offsetIndex = index - 1;
                            const translateX = `calc(${StartWidthPercentage}% + ${offsetIndex * GAP}px)`;
                            style.transform = `translate(${translateX}, -5%)`;
                        }

                        return (

                            <li
                                key={slide.id}
                                className="item shadow-2xl"
                                style={style}
                            >
                                <div className="content ps-5">
                                    <h1 className="lg:text-6xl md:text-5xl text-4xl text-start font-bold my-3 font-mono">{slide.title}</h1>
                                    <p className="lg:mt-5 md:mt-3 mt-1 lg:text-xl md:text-md text-sm">{slide.description}</p>
                                    <div className="lg:mt-5 md:mt-3 mt-2 grid lg:grid-cols-4 md:grid-cols-6 grid-cols-3 w-fit lg:gap-5 md:gap-5 gap-3 ">
                                        {slide.TechStack.map((tech, index) => (
                                            <div className="border border-cyan-200 bg-linear-to-r from-cyan-200 via-pink-200 to-purple-200 hover:bg-linear-to-r hover:from-purple-200 hover:via-pink-200 hover:to-cyan-200 rounded-3xl px-3 mt-1 py-1 font-mono transition-all duration-500 ease-in-out w-fit" key={index}>
                                                <h1 className="m-auto prof-color text-sm">{tech}</h1>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex lg:flex-row md:flex-row flex-col w-fit lg:gap-5 md:gap-4 gap-2 lg:mt-5 md:mt-3 mt-2 font-mono">
                                        <a href={slide.githubLink} target="_blank" rel="noopener noreferrer" className="project-link w-fit"><div className="flex gap-2 flex-row items-center justify-center w-fit"> Code <LuGithub size={20} /></div></a>
                                    </div>
                                </div>
                            </li>)
                    })}
                </ul>
                { items.length > 1 && (
            <div className="absolute flex flex-row justify-between items-center z-10 bottom-5 left-1/2 -translate-x-1/2 gap-5">
                    <IoMdArrowBack
                        className="cursor-pointer bg-transparent rounded-2xl text-blue-500 backdrop-blur-2xl border border-blue-500 transition-all duration-500 ease-in-out hover:bg-blue-400 hover:text-white hover:border-white hover:scale-110 active:scale-100 "
                        onClick={handlePrev}
                        size={40}

                    />

                    <IoMdArrowForward
                        className="cursor-pointer bg-transparent rounded-2xl text-blue-500 backdrop-blur-2xl border border-blue-500 transition-all duration-500 ease-in-out hover:bg-blue-400 hover:text-white hover:border-white hover:scale-110 active:scale-100 "
                        onClick={handleNext}
                        size={40}
                    />
                </div>
                )
                }
                
            </div>
        </div>
        </Element>
    );
};

export default Project;
