import { useEffect, useState } from "react";
import axios from "axios";
const EnquiryList = () => {
    let [enquiryData,setEnquiryData]=useState()
    useEffect(()=>{
        const fetchData = async()=>{
            let resp = await axios.get('http://localhost:3002/allenquiries')
            let data = resp.data
            setEnquiryData(data)
            console.log(enquiryData)
        }
        fetchData()
    },[])
    console.log(enquiryData)
    return ( 
        <div>
            <h3>Enquiries Received so far</h3>
            <div className="table-responsive">
                <table className="table table-primary">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Remarks</th>
                            <th scope="col">Date</th>
                            <th scope="col">HouseID</th>
                        </tr>
                    </thead>
                    <tbody>
                    {enquiryData&& enquiryData.map((ele)=>{
                        
                            return(
                                <tr key={ele._id}>
                                <td scope="row">{ele.ename}</td>
                                <td >{ele.email}</td>
                                <td >{ele.remarks}</td>
                                <td >{ele.date.slice(0,10)}</td>
                                
                                <td >{ele.houseId}</td>
                            </tr>
                            )
                        })}
                    
                    </tbody>
                  
                </table>
            </div>
            
        </div>
     );
}
 
export default EnquiryList;