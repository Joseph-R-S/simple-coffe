import './pie.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    <script src="https://kit.fontawesome.com/a101ea8c75.js" ></script>
    return (
        <footer>Desarrolado por: Joseph Rafael Sanchez
             <a href="https://wa.me/+5565981429242" target="_blank"> 
             <i className='icono'> <FontAwesomeIcon icon={faWhatsapp} /></i>
             </a> 
        </footer >
    );
}

export default Footer