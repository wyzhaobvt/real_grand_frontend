import { useNavigate, useParams } from "react-router-dom";
import SearchResultRow from "./SearchResultRow";

const SearchResult = (props) => {
    const paramsObj = useParams()
    console.log(paramsObj.county)
    let selectedCounty = paramsObj.county
    let filterHouse = props.houseinfo.filter((house)=> {
       return house.county === selectedCounty
    })
    console.log(filterHouse)
   
//result show as table  
    return(
        <div className='row'>
            <h3>Search results for houses in: {paramsObj.county}</h3>
        <div className="table-responsive">
            <table className="table table-primary table-hover" style={{cursor:'pointer'}}>
                <thead>
                    <tr>
                        <th scope="col">Address</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                {
            filterHouse.map((item)=>{
                return(
                    <SearchResultRow key={item._id} house={item} />
            )}) }
               
                </tbody>
            </table>
        </div>
        </div>
    )
    
    
//     return ( 
//         <div className="row">
  
//         {
//             filterHouse.map((item)=>{
//                 return (    
//                 <div key={item.id}>
//                     <div className="row">
//                         <div className="col-sm-6">
//                             <b> {item.address}, {item.county}</b>
//                         </div>        
//                         <div className="col-sm-6">
//                             <b> Price: USD {item.price}</b>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-sm-6 ">
            
//                             <img className='img-fluid' src= {`/img/${item.photo}`} alt="house"/>
                            
//                         </div>
//                         <div className="col-sm-6">
//                             <p>{item.description} </p>
//                         </div>
//                     </div>
//                 </div>)
//             })
//         }
    
//         </div>
//      );
}
 
export default SearchResult;