
import SectionAccueil from "./SectionFiles/SectionAccueil";
import SectionProjects from "./SectionFiles/SectionProjects";
import SectionCompetences from "./SectionFiles/SectionCompetences";
import SectionContact from "./SectionFiles/SectionContact";

const Section = () => {
    return (
        <div>
            <SectionAccueil/>
            <SectionProjects/>
            <SectionCompetences/>
            <SectionContact/>
        </div>
    );
};

export default Section;