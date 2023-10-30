import { useState } from "react";
import axios from "axios";
const SignUp = () => {
    let [signUpObj,setSignUpObj] = useState({name:'',email:'',password:''})
    let [signUpSuccess,setSignUpSuccess] = useState(false)
    let [duplicateEmail,setduplicateEmail] = useState(false)
    let changeHandler = (e)=>{
        setSignUpObj({...signUpObj,[e.target.name]:e.target.value})
    }
    let clickHandler = async (e)=>{
        e.preventDefault()
        console.log(signUpObj)
        const options = {
          headers:{"content-type":"application/json"}
        }
        try{
          let resp = await axios.post ('http://localhost:3002/signup',{...signUpObj},options) 
          let userdata = resp.data
          console.log(userdata) //checking
          //can check mongodb Atlas to see if user has been added
          //can login and check to see if I am able to login fine
          setSignUpSuccess(true)
        }
        catch(error){
          console.log('could not signup/store-user')
          console.log(error)
          setduplicateEmail(true)
        }
        
    }

    
    if (!signUpSuccess){
    return ( 
     <>
        
     
    <div className="row col-sm-6 offset-3">
    <form encType="application/json">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" name="name" id="name" className="form-control" placeholder="" aria-describedby="helpId" onChange={changeHandler}/>
        
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" name="email" id="" aria-describedby="emailHelpId" placeholder="abc@mail.com" onChange={changeHandler}/>
          {(duplicateEmail)?
         <small id="emailHelp" className="form-text text-danger">You have registered!</small>:''}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" id="password" placeholder="password" onChange={changeHandler}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={clickHandler}>Sign Up</button>
        </form>
        </div>
        </>
     );}
    
     else{
          return (<div className='row mb-4'>
          <div className="col-sm-6 offset-3">
        <h4>  Congratulations {signUpObj.name}! You are now registered with
          RealGrande!
          </h4>
          </div>
      </div>);

     }
}
 
export default SignUp;