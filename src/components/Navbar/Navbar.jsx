import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

function Navbar() {
    return (
        <header className='header-nav'>
            <nav className="nav-bar">
                <img src="src\assets\logoPastaPng.webp" alt="Logo de empresa" className='nav-img'/>
                <ul className="nav-bar-options">
                    <li className="nav-bar-item">Home</li>
                    <li className="nav-bar-item">Productos</li>
                    <li className="nav-bar-item">Contacto</li>
                    <li className="nav-bar-item">Ubicación</li>
                </ul>
                <CartWidget />
            </nav>
        </header>
    );
};

export default Navbar;