import React from "react";
import "../styles/index.css";
import "../styles/tailwind.css";
import useReveal from "../useReveal";

const experiencesData = [
    {
        company: "PRO BTP Groupe",
        meta: "Alternance · Cagnes-sur-Mer · sept. 2024 – sept. 2027",
        roles: [
            {
                title: "Concepteur Développeur",
                dates: "févr. 2026 – aujourd'hui",
                context: "Conception d'un service Spring Boot qui route les flux entre systèmes d'information pour le tiers payant santé.",
                tasks: [
                    "Conception de l'API REST et présentation en comités techniques",
                    "Réalisation de tests de charge avant la mise en production, sur une base de plusieurs millions de lignes",
                    "Prise en compte du RGPD sur des données de santé",
                ],
            },
            {
                title: "Développeur Full Stack",
                dates: "sept. 2024 – janv. 2026",
                tasks: [
                    "Développement et maintenance d'applications internes en Java et Angular : congés payés des salariés du BTP, schémas comptables",
                    "Migration technologique de l'application d'envoi automatique de SMS du groupe",
                    "Mise en place et conception de tableaux de bord Grafana pour le suivi et l'analyse de métriques d'audit sur les événements applicatifs et les appels API",
                ],
            },
        ],
        tags: ["Java", "Spring Boot", "Angular", "API REST", "SOAP", "AOP", "Grafana"],
    },
    {
        company: "Monaco Telecom",
        meta: "Stage ingénieur logiciel · Monaco · mai – août 2026",
        roles: [
            {
                context: "Plateforme de provisioning qui active les abonnements mobile, fibre et TV.",
                tasks: [
                    "Développement de microservices Spring Boot et Quarkus, communication asynchrone via message broker, déploiement sur Kubernetes",
                    "Conception de mocks d'équipements réseau pour tester les parcours d'activation",
                    "Orchestration de processus métier en BPMN et livraison de fonctionnalités Angular en production",
                ],
            },
        ],
        tags: ["Spring Boot", "Quarkus", "Microservices", "BPMN", "Kubernetes", "Angular"],
    },
    {
        company: "i3S / CNRS",
        meta: "Stage de recherche et développement · Biot · avr. – juin 2024",
        roles: [
            {
                context: "Développement d'une bibliothèque de réalité augmentée sur casque HoloLens.",
            },
        ],
        tags: ["C#", "Unity"],
    },
];

const Experiences = () => {
    useReveal();

    return (
        <section id="experiences">
            <div className="padleft pb-4">
                <h1 className="title-trait text-4xl font-bold text-left ml-14 mt-24 pt-4 mb-2">Expériences</h1>
                {experiencesData.map((xp) => (
                    <div key={xp.company} className="xp reveal">
                        <div className="xp-head">
                            <h2 className="text-2xl font-bold">{xp.company}</h2>
                            <p className="text-gray-500 text-sm">{xp.meta}</p>
                        </div>
                        {xp.roles.map((role, index) => (
                            <div key={index} className="xp-role">
                                {role.title && (
                                    <h3>{role.title} <span className="font-normal text-gray-500 text-sm">· {role.dates}</span></h3>
                                )}
                                {role.context && <p className="text-gray-700 mt-1">{role.context}</p>}
                                {role.tasks && (
                                    <ul>
                                        {role.tasks.map((task, i) => <li key={i}>{task}</li>)}
                                    </ul>
                                )}
                            </div>
                        ))}
                        <div className="xp-tags">
                            {xp.tags.map(tag => <span key={tag}>{tag}</span>)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experiences;
