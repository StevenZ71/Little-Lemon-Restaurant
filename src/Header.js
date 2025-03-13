import logo from './icons_assets/Logo.svg';
import Nav from './Nav.js';

function Header(){
    return (
        <header>
        <a>
        <img src={logo} alt="logo"/>
        </a>
        <Nav />
        </header>
    );
}
export default Header;