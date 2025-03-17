export default function ConfirmedBooking(){
    const text = ["Date: ", "Time: ","Number of guests: ","Special occasion: "];
    return (
        <>
            Booking Information
            {JSON.parse(localStorage.form).map((item,index) => <div>{text[index] + item}</div>)}
        </>
    )
}