import FoodCard from "./FoodCard";
import greekSalad from "./icons_assets/greek salad.jpg";
import brushetta from "./icons_assets/bruchetta.svg";
import lemonDessert from "./icons_assets/lemon dessert.jpg";

function SpecialsSection(){
    return (
        <section id="Specials">
            <section className="ContentBlock">
                <h1>Specials</h1>
                <p>
                    <button aria-label="On Click" id="Order">Order Online</button>
                </p>
            </section>
            <section className="ContentBlock">
                <FoodCard image={greekSalad} dish="Greek Salad" description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." />
                <FoodCard image={brushetta} dish="Brushetta" description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta." />
                <FoodCard image={lemonDessert} dish="Lemon Dessert" description="Our Lemon Dessert is our speciality, our most prided dessert for customers to enjoy after having a meal. It is made with the best lemons from farmers all over." />
            </section>
        </section>
    )
}

export default SpecialsSection;