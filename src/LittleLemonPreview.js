import { useNavigate } from "react-router";

export default function LittleLemonPreview(){
    const navigate = useNavigate();
    return (
        <section className="Preview">
            <section className="ContentBlock">
                <section>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Placeholder</p>
                    <button onClick={() => navigate("/booking")}>Reserve a table</button>
                </section>
                <section>
                    <img href=""></img>
                </section>
            </section>
        </section>
    );
}