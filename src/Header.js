import logo from "./icons_assets/Logo.svg";
import Nav from "./Nav.js";

function Header(){
    return (
        <header>
            <a aria-label="On Click" href="/">
                <img src={logo} alt=""/>
            </a>
            <Nav />
        </header>
    );
}
export default Header;