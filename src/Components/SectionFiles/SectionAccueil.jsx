import "./SectionAccueil.css";

const SectionAccueil = () => {
    const text1 ="Bonjour, je m'appelle Amine OUANOUGHI"
    const text2 ="Je suis développeur web FULL-STACK"
    return (
        <div className="section__accueil" id="accueil">
           
            <h1 className="section__accueil--title">{text1}<br/>{text2}</h1>
            <img src="./src/assets/phot.jpg" alt="moi" className="section__accueil--image"/>
        </div>
    );
};

export default SectionAccueil;