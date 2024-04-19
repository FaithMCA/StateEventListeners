//React exports
import React from "react"



function ConditionalRendering() {
    const[isShown, setIsShown] = React.useState(true)
    const[messages, setMessages] = React.useState(['aa', 'aa'])
    //&& = and/ Used in conditional situations (if...Else/if... if else.)
    // let cond1 = true
    // let cond2 = true

    // //if cond1 is true AND cond2 is true, run 'I have been ran'
    // if (cond1) {
    //     console.log('I have been ran')
    // }

    function toggleShown() {
        setIsShown(prevIsShown => !prevIsShown)
    }


    return (
        <div className="row">
            <div className="col-sm-12">
                <h1>Conditional Rendering</h1>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    {/* This && conditional statement will only RENDER if both sides are true */}
                    {isShown && <p>Hello I'm rendering :3 </p>}
                    {/* If we ever need to change text like hiding this button, use Ternary */}
                    <button onClick={toggleShown}> {isShown ? "Hide" : "Show" } Text </button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    {messages.length > 0 ? <h3>You have {messages.length} unread {messages.length > 1 ? 'messages.' : 'message.'}</h3> : <h3>You're all caught up!</h3> }
                    {/* {messages.length >= 0 && <h3>You have {messages.length} unread messages</h3>} */}
                </div>
            </div>
        </div>
    )
}//end ConditionalRendering function





export default ConditionalRendering