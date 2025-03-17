import BookingForm from "./BookingForm";

export default function BookingPage(props){
    return(
        <section className="BookingPage">
            Book now
            <BookingForm times={props.times} changeDate={props.changeDate} formSubmit={props.formSubmit}/>
        </section>
    )
}