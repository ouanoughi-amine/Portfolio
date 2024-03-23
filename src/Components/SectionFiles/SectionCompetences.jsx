
import './SectionCompetences.scss'; 

const SectionCompetences = () => {
    return (
<div id='competences'> 
        <h2 className="titrecompetences">Mes compétences</h2>
   <div className="competences">
        <div className='competences__card'>
            <h2 className='title'>Front-end</h2>
            <img src="../src/assets/html.svg" alt="logo html" className="image"/>
            <img src="../src/assets/css.svg" alt="logo css" className="image"/>
            <img src="../src/assets/js.svg" alt="logo javascript" className="image"/>
            <img src="../src/assets/react.svg" alt="logo react" className="image"/>
        </div>
        <div className='competences__card'>
            <h2 className='title'>Back-end</h2>
            <img src="../src/assets/node.svg" alt="logo node" className="image"/>
            <img src="../src/assets/express.svg" alt="logo express" className="image"/>
            <h2 className='title'>Base de données</h2>
            <img src="../src/assets/mongo.svg" alt="logo react" className="image"/>
        </div>
        <div className='competences__card'>
            <h2 className='title'>Outils</h2>
            <img src="../src/assets/figma.svg" alt="logo react" className="image"/>
            <img src="../src/assets/trello.svg" alt="logo react" className="image"/>
            <img src="../src/assets/github.svg" alt="logo react" className="image"/>
            <img src="../src/assets/vscode.svg" alt="logo react" className="image"/>
        </div>
    </div>
</div>
    );
};

export default SectionCompetences;
