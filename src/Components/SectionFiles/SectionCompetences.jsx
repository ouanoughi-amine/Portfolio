import './SectionCompetences.css'; 

const SectionCompetences = () => {
    return (
<div id='competences'> 
        <h2 className="titrecompetences">Mes compétences</h2>
   <div className="competences">
        <div className='competences__card'>
            <h2 className='title'>Front-end</h2>
            <img src="./html.svg" alt="logo html" className="image"/>
            <img src="./css.svg" alt="logo css" className="image"/>
            <img src="./js.svg" alt="logo javascript" className="image"/>
            <img src="./react.svg" alt="logo react" className="image"/>
        </div>
        <div className='competences__card'>
            <h2 className='title'>Back-end</h2>
            <img src="./node.svg" alt="logo node" className="image"/>
            <img src="./express.svg" alt="logo express" className="image"/>
            <h2 className='title'>Base de données</h2>
            <img src="./mongo.svg" alt="logo mongo" className="image"/>
        </div>
        <div className='competences__card'>
            <h2 className='title'>Outils</h2>
            <img src="./figma.svg" alt="logo figma" className="image"/>
            <img src="./trello.svg" alt="logo trello" className="image"/>
            <img src="./github.svg" alt="logo github" className="image"/>
            <img src="./vscode.svg" alt="logo vscode" className="image"/>
        </div>
    </div>
</div>
    );
};

export default SectionCompetences;
