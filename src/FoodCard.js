export default function FoodCard(props){
    return(
        <section className="Card">
            <img src={props.image} className="Image Horizontal"></img>
            <section className="CardText">
                <h1 className="CardTitle">{props.dish}</h1>
                <p className="Text">{props.description}</p>
            </section>
        </section>
    )
}