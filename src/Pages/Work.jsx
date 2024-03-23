import WorkComponent from "../Components/workComponent";
import "./Work.css";
import { useEffect } from "react";

const Work = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <div className="worked">
      <WorkComponent/>
      
    </div>

  );
};

export default Work;