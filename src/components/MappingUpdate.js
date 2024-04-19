


function MappingUpdate() {

    //without USESTATE our thingsElement variable isn't updating on the page
    const thingsArray = ['Thing 1', 'Thing 2'];
    const thingsElements = thingsArray.map(
        (thing) => <p>{thing}</p>
    )



    function addItem() {
        const newThingText = `Thing ${thingsArray.length + 1}`//use temporal literals not quotation marks``''
        thingsArray.push(newThingText)
        console.log(thingsArray)
        
    }



    return (
        <div className="row">
            <div className="col-sm-12">
                <button onClick={addItem}>add item</button>
                <p>{thingsElements}</p>

            </div>
        </div>
    )
}//end MappingUpdate function



export default MappingUpdate