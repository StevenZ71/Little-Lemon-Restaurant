export default function ReviewCard(props){
    return(
        <section className="Card">
            <section className="CardText">
                <h1 className="CardTitle">{props.review}</h1>
                <div className="Text"><img src={props.image} className="Image"></img>{props.name}</div>
                <p className="Text">{props.description}</p>
            </section>
        </section>
    )
}