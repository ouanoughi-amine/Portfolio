import { useParams, Link } from "react-router-dom";
import "./workComponent.css";
import datas from "../../public/works.json";

const WorkComponent = () => {

    const { id } = useParams();
    const Work = datas.find((datas) => datas.id === id);

 

 
        return (
            
        <div className="workPage">
                  <Link   to={"/Portfolio/"}>
                <button className="buttonRetoure"> ← Mon portfolio</button>
            </Link>

          <h1 className="titleImage">{Work.title}</h1>
            <img src={Work.cover} alt={Work.title} className="workImage" />
            <h2>Contexte</h2>
            <p>{Work.contexte}</p>
            <h3>Problématique/Résolution</h3>
            <p>{Work.problématique}</p>
    
        </div>
        

          );
        }

export default WorkComponent;