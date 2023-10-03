import { useState } from "react";
const SignUp = () => {
    let [signUpObj,setSignUpObj] = useState({name:'',email:'',password:''})

    let changeHandler = (e)=>{
        setSignUpObj({...signUpObj,[e.target.name]:e.target.value})
    }
    let clickHandler = (e)=>{
        // e.preventDefault()
        console.log(signUpObj)
    }
    return ( <div className="row col-sm-6 offset-3">
    <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" name="name" id="name" className="form-control" placeholder="" aria-describedby="helpId" onChange={changeHandler}/>
        
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" name="email" id="" aria-describedby="emailHelpId" placeholder="abc@mail.com" onChange={changeHandler}/>
         
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" id="password" placeholder="password" onChange={changeHandler}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={clickHandler}>Sign Up</button>
        </form>
        </div>
     );
}
 
export default SignUp;