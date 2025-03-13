import ReviewCard from "./ReviewCard"

export default function TestimonialsSection(){
    return(
        <section className="TestimonialsSection">
            <section className="ContentBlock">
                <h1>Testimonials</h1>
            </section>
            <section className="ContentBlock">
                <ReviewCard review="a" image="" name="a" description="a" />
                <ReviewCard review="" image="" name="" description=""/>
                <ReviewCard review="b" image="" name="b" description="bz"/>
                <ReviewCard review="" image="" name="" description=""/>
            </section>
        </section>
    )
}