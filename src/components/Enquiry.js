import { useState } from "react";
import axios from "axios";
import emailjs from '@emailjs/browser';
const Enquiry = ({houseId}) => {
    let localstoreEmail = localStorage.getItem('custemail')
    let localstoreEname = localStorage.getItem('custname')
    let [enquiryObj,setenquiryObj]=useState({email:localstoreEmail,ename:localstoreEname,remarks:'',houseId:houseId})
    let [successMsg,setSuccessMsg]=useState('')
    let changeHandler=(e)=>{
        setenquiryObj({...enquiryObj,[e.target.name]:e.target.value})
    }
    let submitHandler = async (e)=>{
        e.preventDefault()
        console.log(enquiryObj)
        try{
            let resp = await axios.post('http://localhost:3002/register',{...enquiryObj})
            let data = resp.data
            console.log(data)
            setSuccessMsg('Thanks for reaching out! You will hear back from our Realtor soon.')
        }
        catch(error){
            console.log('Fail to sumbit message')
            console.log(error)
        }

        //code to send email
        const templateParams = {
            from_name: enquiryObj.ename,
            message: enquiryObj.remarks
  
        };
        
        emailjs.send('service_rakp5dp','template_om0wx2c', templateParams, 'BCjsm4xGefLR2MX9n')
            .then((response) => {
               console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
               console.log('FAILED...', err);
            });
    }
    
    
    return ( 
        <>
       {(successMsg)? <h5 className="text-success my-5">{successMsg}</h5>:
        <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input defaultValue={localstoreEmail} onChange={changeHandler} type="email" className="form-control" name="email" id="email" aria-describedby="emailHelpId"/>
             {/* <h5>Email: {localStorage.getItem('custemail')}</h5> */}
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input  defaultValue={localstoreEname} onChange={changeHandler} type="text"
                className="form-control" name="ename" id="name" aria-describedby="helpId"/>
                {/* <p>Name: {localStorage.getItem('custname')}</p> */}
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Messsage</label>
              <input onChange={changeHandler} type="text"
                className="form-control" name="remarks" id="message" aria-describedby="helpId"/>
            </div>
            <p className="form-text text-muted">
            Cannot submit unless all the fields are filled in
          </p>
            <button onClick={submitHandler} type="submit" className="btn btn-primary"
            disabled={!(enquiryObj.ename)||!(enquiryObj.email)||!(enquiryObj.remarks)}>
                Submit</button>
        </form>}
        </>
     );
}
 
export default Enquiry;