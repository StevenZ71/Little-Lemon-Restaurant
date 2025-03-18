import logo from "./icons_assets/Logo.svg";

function Footer(){
    return (
        <footer id="Footer">
            <section className="ContentBlock">
                <img src={logo} className="Image"></img>
                <p className="Text" id="Copyright">Little Lemon Copyright 2025</p>
            </section>
        </footer>
    );
}
export default Footer;