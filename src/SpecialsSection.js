import FoodCard from "./FoodCard";
function SpecialsSection(){
    return (
        <section className="SpecialsSection">
        <section className="ContentBlock">
            <h1>Specials</h1>
            <button>Order Online</button>
        </section>
        <section className="ContentBlock">
            <FoodCard image="" dish="Placeholder" description="placeholder"/>
            <FoodCard image=""/>
            <FoodCard image=""/>
        </section>
        </section>
    )
}

export default SpecialsSection;