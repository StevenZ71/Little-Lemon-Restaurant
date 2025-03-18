import BookingForm from "./BookingForm";

export default function BookingPage(props){
    return(
        <section id="BookingPage" className="Center">
            <h1 className="SubTitle">Book now</h1>
            <BookingForm times={props.times} changeDate={props.changeDate} formSubmit={props.formSubmit}/>
        </section>
    )
}