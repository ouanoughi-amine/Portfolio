import "./Header.css";

const Header = () => {
    return (
        <div>
            <nav className="nav">
                <ul className="nav__list">
                    <li ><a href="#accueil" className='nav__list--li'>Accueil</a></li>
                    <li ><a href="#projets" className='nav__list--li'>Projets</a></li>
                    <li ><a href="#competences" className='nav__list--li'>Compétences</a></li>
                    <li ><a href="#contact" className='nav__list--li'>Contact</a></li>
                    
                </ul>
            </nav>
        </div>
    );
};

export default Header;