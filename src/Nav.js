function Nav(){
    const handleClick = (anchor) => () => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
    };
    
    return (
        <nav>
        <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/#about" onClick={handleClick("About")}>ABOUT</a></li>
            <li><a href="/#menu" onClick={handleClick("Specials")}>MENU</a></li>
            <li><a href="/booking">RESERVATIONS</a></li>
            <li><a href="">ORDER ONLINE</a></li>
            <li><a href="">LOGIN</a></li>
        </ul>
        </nav>
    );
}
export default Nav;