
import { Link } from 'react-router-dom';
import './Cards.css';

const Cards = (props) => {
    return (
        <Link className="link" to={`/Portfolio/work/${props.id}`}>
            <div className="card">
                <div className="image-box">
                    <img src={props.cover} alt={props.title} className='image-projet'/>
                </div>
                <div className="content">
                    <h2>{props.title}</h2> 
                </div> 
            </div>
            
        </Link>
    );
};



export default Cards;
