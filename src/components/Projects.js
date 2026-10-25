import React from "react";
import "../styles/index.css";
import "../styles/tailwind.css";
import code from "../assets/icons/code.png";
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


                </div>
            </div>
        </section>
    );
};

export default Projects;
