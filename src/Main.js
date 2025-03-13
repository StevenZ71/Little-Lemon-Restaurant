import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { useReducer, useEffect } from "react";

import Homepage from "./Homepage";
import BookingPage from "./BookingPage";

function Main(){
    // useEffect(() => {
    //     fetch('https://raw.githubusercontent.com/courseraap/capstone/main/api.js').then((response) => updateTimes(response.json()));
    // });

    const updateTimes = (availableTimes) =>{
        
    }
    const initializeTimes = () =>{
        return ["17:00","18:00","19:00"];
    }

    const [availableTimes] = useReducer(updateTimes,initializeTimes);
    
    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/booking" element={<BookingPage times={availableTimes}/>}></Route>
                </Routes>
            </BrowserRouter>
        </main>
    );
}
export default Main;