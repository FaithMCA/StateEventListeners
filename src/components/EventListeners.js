//on MouseClick




function EventListeners() {

        //THIS FUNCTION has to be bewtween return and inside component
        function handleClick() {
            console.log('Im clicked')
        }



        function imgHover() {
            console.log('You have hovered over the img')
        }


    return (        
        <div className="row">
            <div className="col-sm-12">
                <img onMouseEnter={imgHover} src="https://picsum.photos/640/360" alt="" srcSet="" />
            </div>
            <div className="col-sm-12">
                <button onClick={handleClick}>click me</button>
            </div>
        </div>
    )
}//end EventListener function




export default EventListeners