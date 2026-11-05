import React from "react";
import "../styles/index.css";
import "../styles/tailwind.css";
import code from "../assets/icons/code.png";
import atlasParty from "../assets/img/atlas-party-ecrans.png";
import useReveal from "../useReveal";

// projets perso en ligne sur mon VPS avec une capture et un lien pour essayer
const personalProjectsData = [
    {
        title: "Atlas Party",
        description: "Jeu de soirée façon Jackbox sur la géographie : la TV affiche la partie, les téléphones servent de manette. 11 mini-jeux, de 2 à 8 joueurs, sans appli à installer. Testé jusqu'à 100 parties et 600 joueurs en même temps sur un serveur à 1 processeur.",
        url: "https://atlas.rayan-outili.fr",
        linkLabel: "Jouer",
        imageSrc: atlasParty,
        imageAlt: "L'accueil d'Atlas Party sur la TV et l'écran pour rejoindre sur téléphone",
        look: "screens",
        tags: ["TypeScript", "React", "Fastify", "Socket.IO", "PostgreSQL", "Docker", "VPS"]
    }
];

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

                    <h2 className="projets-sous-titre projets-sous-titre-premier">Projets personnels</h2>
                    {personalProjectsData.map((project) => (
                        <article key={project.title} className={`reveal feat feat-${project.look}`}>
                            <div className="feat-text">
                                <span className="feat-tag">En ligne</span>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <div className="xp-tags">
                                    {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                                </div>
                                <div className="feat-actions">
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="feat-btn">{project.linkLabel}</a>
                                    <span>Code sur demande</span>
                                </div>
                            </div>
                            {/* la capture des écrans à droite */}
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="feat-visual" tabIndex={-1}>
                                <img src={project.imageSrc} alt={project.imageAlt} loading="lazy" />
                            </a>
                        </article>
                    ))}

                    <h2 className="projets-sous-titre">Projets d'école · Polytech Nice Sophia</h2>
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
