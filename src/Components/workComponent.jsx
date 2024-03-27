import { useParams, Link } from "react-router-dom";
import "./workComponent.css";
import datas from "../../public/works.json";

const WorkComponent = () => {

    const { id } = useParams();
    const Work = datas.find((datas) => datas.id === id);

 

 
        return (
            
        <main className="workPage">
          <div className="block-work">
                  <Link   to={"/Portfolio/"}>
                <button className="buttonRetoure"> ← Mon portfolio</button>
            </Link>

          <h2 className="titleImage">{Work.title}</h2>
            <img src={Work.cover} alt={Work.title} className="workImage" />
            <ul className="tags">
                {Work.tags.map((tags, index) => (
                    <li key={index} className="tag">{tags}</li>
                ))}
            </ul>
            
            <h2 className="titleImage">Contexte</h2>
            <p>{Work.contexte}</p>
            <h2 className="titleImage">Problématique/Résolution</h2>
            <p>{Work.problématique}</p>
            </div>
        </main>
        

          );
        }

export default WorkComponent;