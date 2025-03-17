import { useRef, useState, useReducer} from "react"
import { useNavigate } from "react-router";

export default function BookingForm(props){
    const [date, setDate] = useState("yyyy-MM-dd");
    const [time, setTime] = useState("17:00");
    const [number, setNumber] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");
    const navigate = useNavigate();
    return(
        <section className="Form">
            <form  onSubmit={(e) => {
                    let data = [];
                    for(let i = 0; i < 4; i++){
                        data.push(e.target[i].value);
                    }
                    props.formSubmit(data);
                    navigate("/bookingconfirmation");
                    e.preventDefault();
                }}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" required="true" value={date} onChange={(e) => {
                        setDate(e.target.value);
                        props.changeDate(e.target.value);
                    }
                }/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " value={time} onChange={(e) => setTime(e.target.value)}>
                    {props.times.map((value) => <option>{value}</option>)}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={number} onChange={(e) => setNumber(e.target.value)}/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </section>
    )
}