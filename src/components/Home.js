import React from 'react';
import "../styles/tailwind.css";
import "../styles/nav.css";
import "../styles/index.css";
import lk from '../assets/icons/linkedin.png';
import gh from '../assets/icons/github.png';
import About from './About';

const Home = () => {
    return (
        <>
            <section id="home">
                <div className='home-conteneur bg-[var(--background-color)]'>
                    <div className="h-screen flex flex-col justify-center items-center">
                        <div className='home-content w-2/3 text-left'>
                            <div className='main-content'>
                                <h2>Rayan Outili</h2>
                                <h1>Bienvenue sur mon portfolio 👋 </h1>
                                <p>Étudiant ingénieur logiciel à Polytech Nice Sophia, en alternance chez PRO BTP, et en double diplôme de management (MAE) à l'IAE Nice.</p>
                                <p className="mt-2 text-gray-600">Conception d'architecture logicielle, services REST, microservices.</p>
                                <span className="flex gap-4 mt-4">
                                    <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/rayan-outili/">
                                        <img className="w-10 h-10" src={lk} alt="LinkedIn Icon" />
                                    </a>
                                    <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/RayanOUTILI">
                                        <img className="w-10 h-10" src={gh} alt="Github Icon" />
                                    </a>
                                </span>
                            </div>


                            {/* stacks */}
                            <div className='list-technos flex justify-center items-center '>
                                <p className="border-r-2 border-solid border-gray-500 text-gray-700 font-mulish font-semibold mr-28 pr-8">
                                    Technos
                                </p>
                                <ul className='flex items-center justify-center gap-12 list-none'>
                                    <li>
                                        <img src="https://skillicons.dev/icons?i=java,spring" alt="Java Spring Icons" />
                                    </li>
                                    <li>
                                        <img src="https://skillicons.dev/icons?i=angular,ts" alt="Angular TypeScript Icons" />
                                    </li>
                                    <li>
                                        <img src="https://skillicons.dev/icons?i=docker,kubernetes" alt="Docker Kubernetes Icons" />
                                    </li>
                                </ul>
                            </div>


                        </div>



                    </div>

                </div>



            </section >
            <About />
        </>
    );
};

export default Home;
