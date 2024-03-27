import SectionAccueil from "./SectionFiles/SectionAccueil";
import SectionProjects from "./SectionFiles/SectionProjects";
import SectionCompetences from "./SectionFiles/SectionCompetences";
import SectionContact from "./SectionFiles/SectionContact";

const Section = () => {
    return (
        <main>
            <SectionAccueil/>
            <SectionProjects/>
            <SectionCompetences/>
            <SectionContact/>
        </main>
    );
};

export default Section;