export default function FoodCard(props){
    return(
        <section className="Card">
            <img href={props.image}></img>
            <h1>{props.dish}</h1>
            <p>{props.description}</p>
        </section>
    )
}