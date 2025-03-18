import owners from "./icons_assets/Mario and Adrian A.jpg";

export default function AboutSection(){
    return(
        <section id="About">
            <section className="ContentBlock">
                <section className="Flex">
                    <section className="Vertical">
                        <h1 className="SubTitle">About Little Lemon</h1>
                        <p className="Text">Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
                    </section>
                </section>
                <section className="Flex"><img src={owners} className="Image"></img></section>
            </section>
        </section>
    )
}