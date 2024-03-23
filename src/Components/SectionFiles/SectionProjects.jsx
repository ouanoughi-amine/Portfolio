import "./SectionProjects.css";
import Cards from "./Cards";

import { useEffect, useState } from "react";

const SectionProjects = () => {
    const [datas, setDatas] = useState([]);
 
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("./works.json");
            const data = await response.json();
            setDatas(data);
        };
        fetchData();
    }, []);

    return (
        <section
      
        id="projets"
    >
        <h2 className="titreProjet">Mes projets</h2>
        <div className="gallery">
            {datas.map((data) => (
                <Cards key={data.id} {...data} />
            ))}
        </div>
    </section>
    );
};

export default SectionProjects;