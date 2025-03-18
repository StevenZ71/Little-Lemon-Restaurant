export default function ConfirmedBooking(){
    const text = ["Date: ", "Time: ","Number of guests: ","Special occasion: "];
    return (
        <>
        <section className="Center">
            <h1 className="SubTitle">Booking Information</h1>
            {JSON.parse(localStorage.form).map((item,index) => <div className="Text">{text[index] + item}</div>)}
        </section>
        </>
    )
}