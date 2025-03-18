import { useNavigate } from "react-router";
import chef from "./icons_assets/restaurant chef B.jpg";

export default function LittleLemonPreview(){
    const navigate = useNavigate();
    return (
        <section id="Preview">
            <section className="ContentBlock">
                <section>
                    <section className="Vertical">
                        <h1 className="SubTitle">Little Lemon</h1>
                        <h2 className="CTA">Chicago</h2>
                        <p className="CTA">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <button aria-label="On Click" onClick={() => navigate("/booking")}>Reserve a table</button>
                    </section>
                </section>
                <section>
                    <img className="Image Vertical" src={chef} alt="" ></img>
                </section>
            </section>
        </section>
    );
}