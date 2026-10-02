import React from "react";
import "../styles/index.css";
import "../styles/tailwind.css";
import css from "../assets/icons/css.png";
import html from "../assets/icons/html.png";
import js from "../assets/icons/js.png";
import code from "../assets/icons/code.png";
import link from "../assets/icons/link.png";
import c from "../assets/icons/c.png";
import python from "../assets/icons/python.png";
import react from "../assets/icons/react.png";
import node from "../assets/icons/node.png";
import tailwind from "../assets/icons/tailwindcss.png";
import geometrydash from "../assets/img/geometrydash.png";
import erp from "../assets/img/erp_station_service.png";
import proftracker from "../assets/img/proftracker.png";
import java from "../assets/icons/java.png";
import php from "../assets/icons/php.png";
import sql from "../assets/icons/sql.png";
import reseausocial from "../assets/img/reseau_social.png";
import useReveal from "../useReveal";

// projets récents (Polytech) : pas de site en ligne, vignette avec la stack
const recentProjectsData = [
    {
        title: "LetsGoBiking",
        description: "Calculateur d'itinéraires vélo et marche basé sur l'API JCDecaux : services .NET auto-hébergés (proxy, cache, routeur) qui communiquent par message broker.",
        githubUrl: "https://github.com/RayanOUTILI/LetsGoBiking",
        stack: "cs,dotnet",
        tags: ["C#", ".NET", "ActiveMQ", "Systèmes distribués"]
    },
    {
        title: "SophiaEats",
        description: "Plateforme de commande de repas développée en équipe de 5. Rôle : qualité et support Product Owner (stratégie de tests, user stories, suivi en Kanban).",
        githubUrl: "https://github.com/RayanOUTILI/pns-ste-25-26-team-g-1",
        stack: "java,angular",
        tags: ["Java 21", "Angular", "Maven", "Scrum"]
    },
    {
        title: "Jeu de Nim",
        description: "Application web où l'on joue au Nim contre une IA qui apprend par renforcement. API documentée, conteneurisée avec Docker Compose.",
        githubUrl: "https://github.com/RayanOUTILI/pns-algo2-terranumerica",
        stack: "js,docker",
        tags: ["JavaScript", "Docker", "Apprentissage par renforcement"]
    },
    {
        title: "Ticket to Ride",
        description: "Adaptation des Aventuriers du Rail en Java, avec des bots aux stratégies différentes comparés sur 2 000 parties simulées.",
        githubUrl: "https://github.com/RayanOUTILI/TicketToRide",
        stack: "java,maven",
        tags: ["Java", "Maven", "IA de jeu"]
    }
];

const projectsData = [
    {
        title: "WorldLearning",
        description: "Projet sous forme de site web proposant de nombreux mini-jeux basés sur les pays du monde.",
        url: "https://rayanoutili.github.io/WorldLearning/",
        githubUrl: "https://github.com/RayanOUTILI/WorldLearning",
        imageSrc: "/assets/img/worldlearning.png",
        techno: [html, css, js]
    },
    {
        title: "Convertisseur d'images",
        description: "Page web permettant à l'utilisateur de sélectionner une image et lui appliquer un traitement.",
        url: "https://rayanoutili.github.io/convertisseurImages/",
        githubUrl: "https://github.com/RayanOUTILI/convertisseurImages",
        techno: [html, css, c, python]
    },
    {
        title: "Enquête écologique",
        description: "Site web proposant une enquête aux entreprises de Nice sur leurs pratiques écologiques - réalisé en collaboration.",
        url: "https://rayanoutili.github.io/site-ecologie/",
        githubUrl: "https://github.com/RayanOUTILI/site-ecologie",
        techno: [html, css]
    },
    {
        title: "Moviedle",
        description: "Page web permettant de deviner des films à partir d'une affiche floutée - réalisé en collaboration.",
        url: "https://ThomasPorteletteGit.github.io/MoviedleREWORK/",
        githubUrl: "https://github.com/ThomasPorteletteGit/MoviedleREWORK",
        techno: [html, css, js]
    },
    {
        title: "Portfolio",
        description: "Ce portfolio, développé en React et Tailwind.",
        url: "https://rayan-outili.fr",
        githubUrl: "https://github.com/RayanOUTILI/Portfolio",
        techno: [react, tailwind]
    }
];

const NoIframeProjectsData = [
    {
        title: "Réseau social",
        description: "Réseau social développé en PHP, JS, CSS et SQL respectant le modèle MVC.",
        url: [reseausocial],
        githubUrl: "https://github.com/RayanOUTILI/ReseauSocial",
        techno: [php, js, css, sql]
    },
    {
        title: " ERP station service",
        description: "Application web permettant de gérer les stocks, les ventes, les fournisseurs d'une station service.",
        url: [erp],
        githubUrl: "https://github.com/RayanOUTILI/ERP_station_service",
        techno: [html, css, js, react, node]
    },
    {
        title: "ProfTracker",
        description: "Application mobile Android mettant en relation des élèves et des professeurs pour des cours personnalisés.",
        url: [proftracker],
        site: "https://www.youtube.com/watch?v=ohB31Cl6fMw",
        githubUrl: "https://github.com/RayanOUTILI/ProfTracker",
        techno: [java]
    },
    {
        title: "Geometry dash",
        description: "Programme utilisant le module Turtle de Python pour réaliser un visuel du jeu Geometry Dash.",
        url: [geometrydash],
        githubUrl: "https://github.com/RayanOUTILI/GeometryDashTurtle",
        techno: [python]
    }
]

const Projects = () => {
    useReveal();

    return (
        <section id="projets">
            {/* f9f9f9 */}
            <div className="projets-conteneur bg-[white]">
                <div className="padleft mt-20">
                    <h1 className="title-trait text-4xl font-bold text-left ml-14 mt-24 pt-4 mb-2">Projets</h1>
                    {recentProjectsData.map((project, index) => (
                        <div key={index} className={`reveal proj flex items-center border rounded-3xl gap-[5%] w-[60%] mt-[2%] m-auto bg-white`}>
                            {/* Partie gauche (vignette) */}
                            <div className="gauche w-65% relative">
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <div className="proj-visual">
                                        <img src={`https://skillicons.dev/icons?i=${project.stack}`} alt={project.tags.join(", ")} />
                                    </div>
                                </a>
                            </div>

                            {/* Partie droite (titre, descri, techno, liens) */}
                            <div className="droite w-40%">
                                <h2 className="text-2xl font-bold">{project.title}</h2>
                                <p className="text-gray-600 mt-2 justify-center flex items-center">{project.description}</p>
                                <div className="xp-tags">
                                    {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                                </div>
                                <div className="mt-6 flex items-center justify-start gap-4">
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link flex items-center">
                                        <img src={code} alt="code-icon" className="w-4 h-4 mr-1" />
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}

                    <h2 className="projets-sous-titre">Projets IUT et personnels</h2>
                    {projectsData.map((project, index) => (
                        //revealxINDEX pour alterner les anim revealx${index+1}
                        <div key={index} className={`reveal proj flex items-center border rounded-3xl gap-[5%] w-[60%] mt-[2%] m-auto bg-white`}>
                            {/* Partie gauche (iframe) */}
                            <div className="gauche w-65% relative">
                                <a href={project.url} target="_blank" rel="noopener noreferrer">
                                    <iframe id="iframe" loading="lazy" title={project.title} className="iframe w-[40vw] h-[40vh] m-[3%]" src={project.url} alt={project.title} />
                                </a>
                            </div>

                            {/* Partie droite (titre, descri, techno, liens) */}
                            <div className="droite w-40%">
                                <h2 className="text-2xl font-bold">{project.title}</h2>
                                <p className="text-gray-600 mt-2 justify-center flex items-center">{project.description}</p>
                                <div className="techno flex justify-start gap-4 mt-4">
                                    {project.techno.map((techno, index) => (
                                        <img className="h-[38px] w-[38px]" src={techno} alt="techno" key={index} />
                                    ))}
                                </div>
                                <div className="mt-6 flex items-center justify-start gap-4">
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="link  flex items-center">
                                        <img src={link} alt="link-icon" className="w-4 h-4 mr-1" />
                                        Site
                                    </a>
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link flex items-center">
                                        <img src={code} alt="code-icon" className="w-4 h-4 mr-1" />
                                        Code
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))}
                    {/* python project img /- iframe */}
                    {NoIframeProjectsData.map((project, index) => (
                        //revealxINDEX pour alterner les anim revealx${index+1}
                        <div key={index} className={`reveal proj flex items-center border rounded-3xl gap-[5%] w-[60%] mt-[2%] m-auto bg-white`}>
                            {/* Partie gauche (iframe) */}
                            <div className={`gauche w-65% relative ${project.title === "ProfTracker" ? 'h-[40vh] relative flex justify-center items-center' : ''}`}>
                                <a href={project.url} target="_blank" rel="noopener noreferrer">
                                    {project.title === "ProfTracker" ? (
                                        <img src={project.url} id="iframe" title={project.title} className="iframe w-[100vw] h-[15vh] m-[3%]" alt={project.title} />
                                    ) : (
                                        <img src={project.url} id="iframe" title={project.title} className="iframe w-[100vw] h-[40vh] m-[3%]" alt={project.title} />
                                    )}
                                    {/* {console.log(project.url)} */}
                                </a>
                            </div>

                            {/* Partie droite (titre, descri, techno, liens) */}
                            <div className="droite w-40%">
                                <h2 className="text-2xl font-bold">{project.title}</h2>
                                <p className="text-gray-600 mt-2 justify-center flex items-center">{project.description}</p>
                                <div className="techno flex justify-start gap-4 mt-4">
                                    {project.techno.map((techno, index) => (
                                        <img className="h-[38px] w-[38px]" src={techno} alt="techno" key={index} />
                                    ))}
                                </div>
                                <div className="mt-6 flex items-center justify-start gap-4">
                                    {project.site ? ( // si lien site différent de img
                                        <a href={project.site} target="_blank" rel="noopener noreferrer" className="link flex items-center">
                                            <img src={link} alt="link-icon" className="w-4 h-4 mr-1" />
                                            Site
                                        </a>
                                    ) : (
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link flex items-center">
                                            <img src={link} alt="link-icon" className="w-4 h-4 mr-1" />
                                            Site
                                        </a>
                                    )}
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link flex items-center">
                                        <img src={code} alt="code-icon" className="w-4 h-4 mr-1" />
                                        Code
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Projects;
