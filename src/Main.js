import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { useReducer } from "react";

import Homepage from "./Homepage";
import BookingPage from "./BookingPage";

function Main(){
    
    const updateTimes = () =>{
        return ["17:00","18:00","19:00","20:00","21:00","22:00"];
    }
    const initializeTimes = () =>{
        
    }

    const [availableTimes] = useReducer(updateTimes,initializeTimes);

    return (
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/booking" element={<BookingPage />}></Route>
                </Routes>
            </BrowserRouter>
        </main>
    );
}
export default Main;