import ReviewCard from "./ReviewCard"
import stars from "./icons_assets/5stars.jpg"

export default function TestimonialsSection(){
    return(
        <section id="TestimonialsSection">
            <section className="ContentBlock">
                <h1>Testimonials</h1>
            </section>
            <section className="ContentBlock">
                <ReviewCard review="Amazing Food!" image={stars} name="John" description="I usually don't eat out, but this restaurant is an exception..." />
                <ReviewCard review="BEST. RESTAURANT. EVER!" image={stars} name="Jane" description="I go here every day to eat, because every dish is so exceptional! I just can't get enough!"/>
                <ReviewCard review="Would recommend" image={stars} name="Sarah" description="The specials that they make are extremely delicious, especially the Lemon Dessert."/>
                <ReviewCard review="Great customer service" image={stars} name="Jack" description="The waiters patiently do their jobs properly, this is the first time in a while that I've actually felt like tipping them."/>
            </section>
        </section>
    )
}