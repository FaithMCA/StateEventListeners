//React import
import React from "react";

//Components folder imports
import EventListeners from './components/EventListeners'
import State from './components/State'
import CounterPractice from "./components/CounterPractice";
import TernaryPractice from "./components/TernaryPractice";
import StateTernary from "./components/StateTernary";
import ComplexState from "./components/ComplexState";
import ConditionalRendering from "./components/ConditionalRendering";
import Forms from "./components/Forms";


//Stylesheet import
import './style.css'



function App(){
    
    return(
        <div className="container justify-content-center">
            {/* <EventListeners /> */}
            {/* <State /> */}
            {/* <CounterPractice /> */}
            {/* <TernaryPractice /> */}
            {/* <StateTernary /> */}
            {/* <ComplexState /> */}
            <ConditionalRendering />
            {/* <Forms /> */}

        </div>
    )
}//end App function



export default App;