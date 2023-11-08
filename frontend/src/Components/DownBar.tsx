import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Styles/DownBar.scss'
import { faHouse, faListUl, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useMatch } from 'react-router-dom';

function DownBar (){

    const isLinkActive = useMatch('/Login');

    return (
        <div className='down-bar-container'>
            <FontAwesomeIcon icon={faHouse} className='icons' />
            <NavLink to={'/Login'} className={isLinkActive ? 'selected active-link' : 'selected'}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='icons' />
            </NavLink>
            <FontAwesomeIcon icon={faListUl} className='icons' />
        </div>
    )
}

export default DownBar;


