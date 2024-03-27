

import  { useEffect, useState } from 'react';
import "./SectionAccueil.css";

const SectionAccueil = () => {
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        // Déclenche l'animation une fois que le composant est monté
        setAnimationClass('animate');
    }, []);

    const text1 = "Bonjour, je m'appelle Amine OUANOUGHI";
    const text2 = "Je suis développeur web FULL-STACK";
    const text3 = "Développeur passionné dans le domaine du web, fraîchement diplômé de la formation développeur web chez Openclassrooms, j'ai acquis des compétences variées, de la création de sites dynamiques au développement d'applications web. Je cherche continuellement à relever de nouveaux défis et à approfondir mes connaissances. Toujours curieux, j'aime explorer de nouvelles technologies et contribuer à des projets open source. Mon objectif est de créer des produits web innovants et de qualité, dépassant les attentes de mes clients.";
    

    return (
        <div id="accueil">
        <div className="section__accueil" >
            <h1 className={`section__accueil--title ${animationClass}`}>
                {text1}<br />{text2}
            </h1>
            <img src="./photoProfil.jpg" alt="moi" className="section__accueil--image" />
        </div>
            <div className='apropos'>
            <h2 className='second-title'>{text3}</h2>
            </div>
            </div>
    );
};


export default SectionAccueil;
