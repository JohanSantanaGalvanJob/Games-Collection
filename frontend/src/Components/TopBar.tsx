import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Styles/TopBar.css'
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faBell,faUser } from '@fortawesome/free-regular-svg-icons';

function TopBar (){
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Para un desplazamiento suave, si está disponible
        });
      };

    return (
        <div className='top-bar-container'>
            <FontAwesomeIcon icon={faUser} className='icons'/>
            <FontAwesomeIcon icon={faGamepad} className='icons' onClick={scrollToTop}/>
            <FontAwesomeIcon icon={faBell} className='icons'/>
        </div>
    )
}

export default TopBar;
