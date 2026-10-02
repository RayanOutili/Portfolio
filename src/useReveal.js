import { useEffect } from "react";

const revealClasses = ['.reveal', '.revealx1', '.revealx2', '.animation'];

// ajoute la classe "active" aux éléments animés dès qu'ils entrent dans l'écran
const useReveal = () => {
    useEffect(() => {
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            revealClasses.forEach(selector => {
                document.querySelectorAll(selector).forEach(el => {
                    if (el.getBoundingClientRect().top < windowHeight - 100) {
                        el.classList.add('active');
                    }
                });
            });
        };
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll();
        return () => window.removeEventListener('scroll', revealOnScroll);
    }, []);
};

export default useReveal;
