import { NavLink } from "react-router-dom";
import "./Error.css"

const Error = ({textError,textErrorTwo,textLink}) => {
    return (
        <div className="error__page">
            <h1 className="error__title">{textError}</h1>
            <h2 className="error__title--two">{textErrorTwo}</h2>
            <NavLink to={'/Portfolio/'} className='error__block'>
        {textLink}
        </NavLink>
        </div>
    );
};

export default Error;