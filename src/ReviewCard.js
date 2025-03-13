export default function ReviewCard(props){
    return(
        <section className="Card">
            <h1>{props.review}</h1>
            <div><img href={props.image}></img>{props.name}</div>
            <p>{props.description}</p>
        </section>
    )
}