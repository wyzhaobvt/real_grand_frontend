import { useState } from "react";

const Login = () => {
    let [formObj,setFormObj]=useState({email:'',password:''})

    
    let changeHandler = (e) => {
        setFormObj({...formObj,[e.target.name]:e.target.value})
    }
    let clickHandler = () =>{
        console.log(formObj)
    }
    return ( 
        <div className="col-sm-6 offset-3">
        <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelpId" placeholder="abc@mail.com" onChange={changeHandler}/>
             
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" name="password" id="password" placeholder="password" onChange={changeHandler}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={clickHandler}>Login</button>
        </form>
        </div>
     );
}
 
export default Login;