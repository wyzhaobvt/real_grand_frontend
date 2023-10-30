import {useNavigate} from 'react-router-dom'
const SearchFilter = (props) => {
    let navigate = useNavigate()
    //array of counties
    //array.map and generate the options dynamically
   
    // props.houseCounty.map((item)=>{
    //     return (!arrCounty.(item.county) && arrCounty.push(item.county))   
    // })
    let arrCounty =props.houseCounty.map((item)=>{
        return item.county
    })
//use set to avoid duplicate
    let setCounty = new Set([...arrCounty])
//set convert to array
    let distinctCounty = Array.from(setCounty)

    let selectHandler = (e)=>{
        //filter through the array of house objects and 
        //get those house objects that have selected county
        navigate(`/searchResult/${e.target.value}`)
    
    }
    

    return ( 
        <>
        <div className="row m-3">
        <div className=" d-flex justify-content-center">
            <h6 className="me-2 mb-0">Select County:</h6>
            <select onChange={selectHandler}>
            <option value='select'>Select</option>
                {distinctCounty.map((item)=>{
                    return (
                        <option key={item} value={item}>{item}</option>
                    )
                })}
            </select>
        </div>
        </div>

        {/* <div className="row">
        <div className=" col-sm-2 offset-sm-4">
            <h6>Select county</h6>
            </div>
            <div className="col-sm-4">
            <select className="">
                <option value='county1'>County1</option>
                <option value='county1'>County1</option>
                <option value='county1'>County1</option>
            </select>
        </div>
        </div> */}
        </>
   
     );
}
 
export default SearchFilter;