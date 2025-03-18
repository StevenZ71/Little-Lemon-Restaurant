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
            <li><a aria-label="On Click" href="/">HOME</a></li>
            <li><a aria-label="On Click" href="/#about" onClick={handleClick("About")}>ABOUT</a></li>
            <li><a aria-label="On Click" href="/#menu" onClick={handleClick("Specials")}>MENU</a></li>
            <li><a aria-label="On Click" href="/booking">RESERVATIONS</a></li>
            <li><a aria-label="On Click" href="">ORDER ONLINE</a></li>
            <li><a aria-label="On Click" href="">LOGIN</a></li>
        </ul>
        </nav>
    );
}
export default Nav;