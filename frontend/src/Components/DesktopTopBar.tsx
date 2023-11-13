import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Styles/DesktopTopBar.scss'
import { faBars, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';
import SideBar from './SideBar';

function DesktopTopBar() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        return () => {
            setIsSidebarOpen(false);
        };
    }, []);

    return (
        <>
         <div className='desktop-top-bar-container'>
            <FontAwesomeIcon icon={faBars} className='desktop-icons' onClick={toggleSidebar} />
            <FontAwesomeIcon icon={faGamepad} className='desktop-icons' onClick={scrollToTop} />
            <div className='desktop-profile-container'>
                <FontAwesomeIcon icon={faBell} className='desktop-icons' />
                <FontAwesomeIcon icon={faUser} className='desktop-icons' />
            </div>

        </div>
        {isSidebarOpen && <SideBar />}
        </>

    )
}

export default DesktopTopBar;
