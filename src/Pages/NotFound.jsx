import Error from "../Components/Error";

const errorText="404"
const errorTextTwo="La page demander n'existe pas"
const linkText="← Mon portfolio"

const NotFound = () => {
    return (
        <div>
            <Error textError={errorText} textErrorTwo={errorTextTwo} textLink={linkText}  />
        </div>
    );
};

export default NotFound;