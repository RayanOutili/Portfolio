import useReveal from "../useReveal";
import "../styles/index.css";
import "../styles/tailwind.css";

// icônes skillicons.dev : id de l'icône + libellé affiché au survol
const stacks = [
    { title: "Back-end", reveal: "revealx1", icons: [["java", "Java"], ["spring", "Spring Boot"], ["python", "Python"], ["cs", "C#"]] },
    { title: "Front-end", reveal: "revealx2", icons: [["angular", "Angular"], ["ts", "TypeScript"], ["js", "JavaScript"]] },
    { title: "DevOps / Observabilité", reveal: "revealx1", icons: [["docker", "Docker"], ["kubernetes", "Kubernetes"], ["githubactions", "GitHub Actions"], ["grafana", "Grafana"]] },
    { title: "Outils", reveal: "revealx2", icons: [["git", "Git"], ["maven", "Maven"], ["idea", "IntelliJ IDEA"], ["linux", "Linux"]] },
];

const concepts = [
    "Architecture logicielle", "Microservices", "API REST", "SOAP", "Programmation orientée aspect",
    "Communication asynchrone", "Tests unitaires et de charge", "CI/CD", "Green IT", "UML", "Méthodes agiles",
];

// développement assisté par IA
const aiPractices = [
    { title: "Spec-driven development", text: "OpenSpec : proposition, design et tâches rédigés et validés avant l'implémentation." },
    { title: "Agents et multi-agents", text: "Orchestration d'un agent principal et de sous-agents dans un harness comme Claude Code." },
    { title: "Skills", text: "Conventions et procédures du projet packagées en skills réutilisables." },
    { title: "MCP", text: "Connexion des agents à des outils et des sources de données via le Model Context Protocol." },
    { title: "Choix des modèles", text: "Comparaison des modèles en coût, latence et qualité selon la tâche." },
]

const timeline = [
    { side: "left", title: "Baccalauréat général · 2022", lines: ["Lycée Thierry Maulnier", "Spécialités Mathématiques et NSI", "Mention très bien"] },
    { side: "right", title: "BUT Informatique · 2022 – 2024", lines: ["IUT Nice Côte d'Azur", "Parcours réalisation d'applications", "Major de promotion"] },
    { side: "left", title: "Diplôme d'ingénieur · 2024 – 2027", lines: ["Polytech Nice Sophia, en alternance", "Spécialité Sustainable Software Engineering"] },
    { side: "right", title: "Master MAE · 2026 – 2027", lines: ["IAE Nice", "Double diplôme en management", "Cours du soir et le samedi"] },
];

const About = () => {
    useReveal();

    const age = () => new Date().getFullYear() - 2005;

    return (
        <>
            <section id="about">
                {/* #f2f7fc */}
                <div className="bg-[white] padleft">
                    <h1 className="title-trait text-4xl font-bold text-left ml-10 mt-24 pt-4 mb-2">À propos</h1>

                    <div className="about-p-t flex">

                        <div className="about-p pl-[20px] pr-[20px] pb-[20px] w-[40%] h-[80%] ml-[2%] mr-[5%] mt-[10px] revealx1">
                            <p>Étudiant ingénieur logiciel de {age()} ans, je m'intéresse surtout à la conception d'architecture : services REST, microservices et communication asynchrone.</p>
                            <p>Après un BUT Informatique terminé major de promotion, j'ai rejoint Polytech Nice Sophia en alternance chez PRO BTP, où je conçois des services Spring Boot. J'ai aussi travaillé sur une plateforme de provisioning télécom chez Monaco Telecom.</p>
                            <p>En dernière année, je suis la spécialité Sustainable Software Engineering et, en parallèle, un double diplôme en management (Master MAE) à l'IAE Nice.</p>
                        </div>

                        <div className="timeline reveal">
                            {timeline.map((step, index) => (
                                <div key={index} className={`timeline-item timeline-${step.side}`}>
                                    <div className="rond"></div>
                                    <div className={`box ${step.side === "left" ? "b1" : "b2"}`}>
                                        <h2>{step.title}</h2>
                                        {step.lines.map((line, i) => <p key={i}>{line}</p>)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="padleft overflow-hidden pb-12">
                    <h1 className="title-trait text-4xl font-bold text-left ml-10 mt-24 pt-4 mb-2">Skills / Tools</h1>

                    {stacks.map(stack => (
                        <div key={stack.title}>
                            <h2 className="text-xl font-bold text-center mb-2 mt-6">{stack.title}</h2>
                            <div className={`stacks flex justify-center items-center w-[full] m-auto ${stack.reveal}`}>
                                <ul className="flex gap-6">
                                    {stack.icons.map(([id, label]) => (
                                        <li key={id} data-label={label}>
                                            <img src={`https://skillicons.dev/icons?i=${id}`} alt={label}></img>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}

                    <h2 className="text-xl font-bold text-center mb-2 mt-10">Concepts</h2>
                    <div className="concepts reveal">
                        {concepts.map(concept => <span key={concept}>{concept}</span>)}
                    </div>

                    <h2 className="text-xl font-bold text-center mb-2 mt-10">Développement assisté par IA</h2>
                    <p className="ia-intro">Outils et pratiques que j'utilise pour développer avec des agents IA.</p>
                    <div className="ia-grid">
                        {aiPractices.map(practice => (
                            <div key={practice.title} className="ia-card reveal">
                                <h3>{practice.title}</h3>
                                <p>{practice.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section >
        </>
    );
};



export default About;
