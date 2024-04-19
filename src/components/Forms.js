//React exports
import React from "react"



function Forms() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments:"",
        isFriendly: true,
        employment:"",
        favColor:""
    })

    console.log(formData)

    function handleEvent(event) {
        //event.target.value = grabbing HTML value from the current element
        //ie. input First Name text box
        //console.log(event.target.value)

        
        //REACT PRACTICE USUALLY DESTRUCTS OBJECTS and sets it as a VARIABLE
        const {name, value, type, checked} = event.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                //E56 Computed Properties
                //Whatever current HTML element is calling handleEvent() the "event.target.name"
                //gives us the name Value from that HTML element.
                //[event.target.name]: event.target.value

                [name]: type === "checkbox" ? checked : value
            }
        })
    }//end handleEvent function

    function handleSubmit(event){
        // It Prevents our page from Refreshing and re-rendering the page
        event.preventDefault

        console.log(formData)
    }

    return(
        <div className="row">
            <div className="col-sm-12">
                <h1>Forms</h1>
            </div>
            <div className="col-sm-6">
                <form action="">
                    {/* onChange = Anytime there is a change in the value or typed in this element. 
                        handleEvent Function will be ran 
                        name attribute allows us to uniquely identify current element*/}
                    <input 
                        type="text" 
                        placeholder="First Name" 
                        name="firstName"
                        onChange={handleEvent}
                        value={formData.firstName}
                    />
                    <input 
                        type="text" 
                        placeholder="Last Name" 
                        name="lastName" 
                        onChange={handleEvent}
                        value={formData.lastName} 
                    />
                    <br />
                    <input 
                        type="text" 
                        placeholder="Email" 
                        name="email" 
                        onChange={handleEvent}
                        value={formData.email} 
                    />
                    <br />
                    <textarea 
                        name="comments" 
                        placeholder='Comments' 
                        onChange={handleEvent} 
                        value={formData.comments} 
                        id=""cols={30} 
                        rows={10}>
                    </textarea>
                    <br />
                    <input 
                        type="checkbox" 
                        id="isFriendly"
                        name="isFriendly"
                        value={formData.isFriendly} 
                        checked={formData.isFriendly}
                        onChange={handleEvent}                     
                    />
                    <label htmlFor="isFriendly">Are you friendly?</label>
                    <fieldset>
                    <legend>What is your current employment?</legend>
                    <input 
                        type="radio" 
                        name="employment" 
                        id="unemployed" 
                        value="unemployed" 
                        onChange={handleEvent} 
                        checked={formData.employment === "unemployed"}
                    />
                    <label htmlFor="unemployed">Unemployed</label>
                    <br />
                    <input 
                        type="radio" 
                        name="employment" 
                        id="full-time" 
                        value="full-time" 
                        onChange={handleEvent}
                        checked={formData.employment === "full-time"}
                    />
                    <label htmlFor="full-time">Full Time</label>
                    <br />
                    <input 
                        type="radio" 
                        name="employment" 
                        id="part-time" 
                        value="part-time"
                        onChange={handleEvent} 
                        checked={formData.employment === "part-time"}
                    />
                    <label htmlFor="full-time">Part Time</label>

                    <br/>
                    <label htmlFor="favColor">What is your favorite color?</label>
                    <br /> 
                    <select 
                        name="favColor" 
                        id="favColor"
                        value={formData.favColor}
                        onChange={handleEvent}
                    >
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="indigo">Indigo</option>
                        <option value="violet">Violet</option>
                    </select>  
                    <br />
                    <br />
                    
                    <button>Submit</button>                    
                    </fieldset>
                </form>
            </div>
        </div>
    )
}//end Forms function



export default Forms