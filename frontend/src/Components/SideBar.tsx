import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Styles/SideBar.scss'
import { faGear, faHouse, faListUl, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import spain from '../images/spain.png'
import unitedKingdom from '../images/united-kingdom.png'

function SideBar() {

    return (
        <div className='sidebar-container'>
            <div className='sidebar-icons-container'>
                <div className='sidebar-profile-picture-image'>
                    <img src='https://cdn-icons-png.flaticon.com/512/4086/4086679.png' alt="Imagen" />
                    <p>Johan1234</p>
                </div>
                <div className='sidebar-elements-container'>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    <p>Edit Profile</p>
                </div>
                <div className='sidebar-elements-container'>
                    <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                    <p>Home</p>
                </div>
                <div className='sidebar-elements-container'>
                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                    <p>Search Games</p>
                </div>
                <div className='sidebar-elements-container'>
                    <FontAwesomeIcon icon={faListUl}></FontAwesomeIcon>
                    <p>My List</p>
                </div>
                <div className='sidebar-elements-container'>
                    <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
                    <p>Settings</p>
                </div>
                <div className='sidebar-language-elements-container'>
                    <img src={spain} alt='Spain Flag'></img>
                    <img src={unitedKingdom} alt='UK Flag'></img>
                </div>
            </div>
        </div>
    )
}

export default SideBar;
