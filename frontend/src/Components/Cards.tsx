import '../Styles/Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Cards() {

    const [icon, setIcon] = useState(faPlus);
    const [isGreen, setIsGreen] = useState(false);

    const handleIconClick = () => {
        if (icon === faPlus) {
            setIcon(faBookmark);
            setIsGreen(true);

            // Después de 2 segundos, vuelve al color original
            setTimeout(() => {
                setIsGreen(false);
            }, 1000);
        } else {
            setIcon(faPlus);
        }
    };

    return (
        <div className='card-container'>
            <div className='card-game-content'>
                <div className='item1'>
                    <img src="https://upload.wikimedia.org/wikipedia/en/6/6e/Sekiro_art.jpg" alt="Portada de Sekiro" />
                </div>
                <div className='item2'>
                    <h3>Sekiro Shadows Die Twice</h3>
                </div>
                <div className='item3'>
                    <p>Platforms: PC PS4 XBOX ONE <br /><br/>Launch Date: 19/11/2003</p>
                </div>
                <div className='item5'>
                    <p>SoulsLike</p>
                    <p>Action</p>
                </div>
                <div className='item4'>
                    <FontAwesomeIcon icon={icon}
                        className={`icons ${isGreen ? 'bookmark' : ''}`}
                        onClick={handleIconClick} />
                </div>
            </div>
        </div>

    );
}

export default Cards;
