import { useParams } from "react-router-dom";
import Enquiry from "./Enquiry";
const SearchHouseDetail = (props) => {
    let paramsObj = useParams()
    let houseId = paramsObj.houseId

    let selectedHouse = props.houseinfo.find((ele)=>ele._id == houseId)
    let imgSrc = `/img/${selectedHouse.photo}`

    return ( <>
        <h1>Searched House</h1>
        <div className="row">
            <div className="col-sm-6">
                <b> {selectedHouse.address}, {selectedHouse.county}</b>
            </div>        
            <div className="col-sm-6">
                <b> Price: USD {selectedHouse.price}</b>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-6 ">

                <img className='img-fluid' src={imgSrc} alt="house"/>
                
            </div>
            <div className="col-sm-6">
                <p>{selectedHouse.description} </p>
                {localStorage.getItem("custname")&&<Enquiry houseId={houseId}/>}
            </div>
        </div>
      
        </>)
    //     <div key={item[0].id}>
    //     <div className="row">
    //         <div className="col-sm-6">
    //             <b> {item[0].address}, {item[0].county}</b>
    //         </div>        
    //         <div className="col-sm-6">
    //             <b> Price: USD {item[0].price}</b>
    //         </div>
    //     </div>
    //     <div className="row">
    //         <div className="col-sm-6 ">

    //             <img className='img-fluid' src= {`/img/${item[0].photo}`} alt="house"/>
                
    //         </div>
    //         <div className="col-sm-6">
    //             <p>{item[0].description} </p>
    //         </div>
    //     </div>
    // </div>

     
}
 
export default SearchHouseDetail;