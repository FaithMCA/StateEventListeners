//React imports
import React from 'react'



//Ternary is essentally a if else statement
function TernaryPractice() {
    //https://devolper.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

    const murderIf = true;
    const murderName = "Jim Crawford"
    //First way of Ternary Operator
    //murderIf == condition being checked
    //if murder is true? say yes else: no
    // let answer = murderIf === true ? "Yes" : "No"

    
    //TRUTHY/TRUE will be the left side of ":"
    //FALSEY/FALSE will be the right side of ":"
    //second way of Ternary Operator
    let answer = murderIf ? "Yes" : "No"

    let killer = murderName === 'Butler' ? "He's the killer" : "You shant the killer"

    return(
        <div className="row">
            <div className="col-sm-12 text-center">
                <h1>Ternary Practice</h1>
            </div>
            <div className="col-sm-4 text-center">
                <h2>Was there a murderder in Savannah?</h2>
                <h4>{answer}</h4>
                <h4>{killer}</h4>
            </div>
        </div>
    )
}//end TernaryPractice function



export default TernaryPractice