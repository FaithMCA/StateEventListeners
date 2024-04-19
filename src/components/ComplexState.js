//React exports
import React from "react"




function ComplexObjectFavorite(props){
    console.log(props)
    //first way to utilize Ternary V
    let favorite = props.colored ? "favoriteTrue" : "favoriteFalse"   
    //second way
    //<div onClick="" className={`text-center ${props.colored ? "favoriteTrue" : "favoriteFalse"}`}>isFavorite</div>

    return(  
        // TERNARY operator can be utilized inside classNames as well!
        // Don't forget about the Template Literals to be able to write other classNames inside

        <div onClick={props.handleClick} className={`text-center ${favorite}`}>isFavorite</div>
    )
}//end ComplexObjectFavorite function




function ComplexObjects() {
    const [contact, setContact] = React.useState({
        firstName: "Potatothan",
        lastName: "Fryward",
        phone: "+1 (666) 420-6669",
        email: "pfryward420@aol.com",
        isFavorite: true
    })

    function toggleFavorite() {
        setContact(prevContact => {
            return{
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    }

    return(
        <div className="col-sm-4">
            <div className="row">
                <div className="col-sm-12">
                    <h1>Complex Objects</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <h3>{contact.firstName} {contact.lastName}</h3>
                    {/* contact.isFavorite passing boolean(TRUE/FALSE) value
                        colored is going to tbe the props name.
                        
                        handleClick={} is the way we pass functions (ie.toggleFavorite) to
                        child components and if needing to pass FUNCTIONS to the them name
                        props attribute "handleClick" */}

                    <ComplexObjectFavorite colored={`contact.isFavorite`} handleClick={toggleFavorite}/>
                    <p>{contact.phone}</p>
                    <p>{contact.email}</p>

                </div>
            </div>
        </div>
    )
}//end ComplexObjects function




function ComplexArray() {

        //without USESTATE our thingsElement variable isn't updating on the page
        // const thingsArray = ['Thing 1', 'Thing 2'];
        const [thingsArray, setThingsArray] = React.useState(['Thing 1', 'Thing 2'])

        const thingsElements = thingsArray.map(
            (thing) => <p>{thing}</p>
        )
        
        function addItem() {
            const newThingText = `Thing ${thingsArray.length + 1}`//use temporal literals not quotation marks``''
            
            //NEVER DO THIS EVER
            //thingsArray.push(newThingText)
            //We should never directly modify our usestate value
            //USE setNAME variable

            //when setting new State Value
            //if we depend on the old version of our State(Value/array) we typically think about
            //callback function
            //...= spread operator !!What it does = gets the entire array
            setThingsArray(prevThingsArray => [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`] )
            console.log(thingsArray)
        }

    return(
        <div className="col-sm-4">
            <div className="row">
                <div className="col-sm-12">
                    <h2>Complex State Array</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <button onClick={addItem}>Add Item</button>
                </div>
                <div className="col-sm-12">
                    {thingsElements}
                </div>
            </div>
        </div>
    )

}//end ComplexArray function




function ComplexState() {

    return(

        <div className="row">
            <div className="col-sm-12 text-center">
                <ComplexArray />
                <ComplexObjects />
            </div>
        </div>
    )

}//end ComplexState function





export default ComplexState