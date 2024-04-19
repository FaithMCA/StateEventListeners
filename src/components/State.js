//React imports
import React from "react"
//2nd way to import react
//import Teact, {useState} from 'react'


function State() {
    //one way to call STATE
    //const [result,func] = React.useState('No');
    //2nd way to call State
    //const restultsecond = useState();

    //React practice result is name of DEFAULT VALUE
    //setResult is function
    const [result, setResult] = React.useState('No')


    console.log(result)
    //Received  an array with two Values
    //['hellow world', func()]

    //result[0] renders 'No'

    function changeAnswer() {
        //anytime you want a new value, you'll call setNAME()
        //with new value inside ('VALUE')
        setResult('Stop clicking me')
    }



    return (
        <div className="row">
            <div className="col-sm-12">
                <h3 onClick={changeAnswer}>Is State Important?</h3>
            </div>
            <div className="col-sm-12">
                <h5>{result}</h5>
            </div>
        </div>
    )
}//end State function



export default State