import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
    let [formObj,setFormObj]=useState({email:'',password:''})
    let [invalidMsg,setInvalidMsg] = useState(false)
    let navigate = useNavigate()
    let changeHandler = (e) => {
        setFormObj({...formObj,[e.target.name]:e.target.value})
    }
    let clickHandler = async (e) =>{
        e.preventDefault()
        console.log(formObj)
        try{
          // let email = formObj.email
          // let password = formObj.password
          const options = {
            headers:{"content-type":"application/json"}
          }
          // let resp = await axios.post('http://localhost:3002/login',{...formObj},options)
          let resp = await axios.post(`${process.env.REACT_APP_BACKEND_URL}login`,{...formObj},options)
          let userdata = await resp.data;
          console.log(userdata)
          if (userdata !=='Authentication Failed'){
            localStorage.setItem('custname',userdata.name)
            localStorage.setItem('custemail',userdata.email)
            // sessionStorage.setItem('custname',userdata.name);
            // sessionStorage.setItem('custemail',userdata.email);
            if (userdata.role==='realtor'){
              navigate('/enquiries')
            }else{
            navigate("/")
            }
            // (userdata.role==='realtor')?navigate("/enquiries"):navigate("/") -> will go to catch error
          }
         else{
          setInvalidMsg(true)
          console.log(userdata)
        }
      }
        catch{
          console.log('error')
        }
        
    }
    return ( 
        <div className="col-sm-6 offset-3">
        <form encType="application/json">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelpId" placeholder="abc@mail.com" onChange={changeHandler}/>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" name="password" id="password" placeholder="password" onChange={changeHandler}/>
              {(invalidMsg)?
              <small id="emailHelp" className="form-text text-danger">Email and password are not matched</small>:''}
            </div>

            <button type="submit" className="btn btn-primary" onClick={clickHandler}>Login</button>
        </form>
        </div>
     );
}
 
export default Login;