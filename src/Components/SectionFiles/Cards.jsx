
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';
import './Cards.scss';

const Cards = (props) => {
    return (
        <Link className="link" to={`/work/${props.id}`}>
            <div className="card">
                <div className="image-box">
                    <img src={props.cover} alt={props.title} />
                </div>
                <div className="content">
                    <h2 className="po">{props.title}</h2> 
                </div> 
            </div>
        </Link>
    );
};

// Définissez les types de props avec PropTypes
Cards.propTypes = {
    id: PropTypes.string.isRequired, 
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default Cards;
