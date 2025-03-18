import { BrowserRouter, Routes, Route } from "react-router";
import { useReducer, useEffect } from "react";

import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";

export default function Main(){
    
    

    const date = new Date();
    
    useEffect(() => {
        
    });
    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }
    
    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());
    
        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ":00");
            }
            if(random() < 0.5) {
                result.push(i + ":30");
            }
        }
        return result;
    };
    const submitAPI = function(formData) {
        return true;
    };

    const updateTimes = (availableTimes,newDate) =>{
        return fetchAPI(new Date(newDate.substring(0,4),newDate.substring(5,7),newDate.substring(8,10)));
    }
    const initializeTimes = () =>{
        return fetchAPI(date);
    }
    const updateDate = (newDate) =>{
        dispatch(newDate);
    }
    const submitForm = (formData) => {
        submitAPI(formData);
        localStorage.form = JSON.stringify(formData);
        console.log(JSON.stringify(formData))
    }

    const [availableTimes, dispatch] = useReducer(updateTimes,[],initializeTimes);
    
    
    
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/booking" element={<BookingPage times={availableTimes} changeDate={updateDate} formSubmit={submitForm} />}></Route>
                    <Route path="/bookingConfirmation" element={<ConfirmedBooking />}></Route>
                </Routes>
            </BrowserRouter>
        </main>
    );
}