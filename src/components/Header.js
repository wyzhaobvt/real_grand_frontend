import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    let navigate = useNavigate()
    let logoutHandler = ()=>{
        localStorage.removeItem('custname')
        localStorage.removeItem('realtorname')
        // sessionStorage.clear();
        navigate('/')
    }
    return ( 
        <div className='row bg-warning d-flex flex-row  align-items-center '>
            <div className='col-sm-3'>
            <Link to='/'><img src="/img/logo.png" className="img-fluid m-2 rounded" width='40px' alt=""/></Link>
            </div>
            <div className='col-sm-5 text-center'>
                <p className='m-0 tagline'>Welcome! Your real estate destination!</p>
            </div>
            <div className='col-sm-4 d-flex justify-content-end'>
            {(localStorage.getItem('custname'))?
            // {(sessionStorage.getItem('custname')) ?

            <>
            {/* <span>Welcome {sessionStorage.getItem('custname')}!</span> */}
            <span className="fw-semibold">Welcome {localStorage.getItem('custname')}!</span>
            <button onClick={logoutHandler} className="btn btn-sm btn-danger mx-3 ">Logout</button>
            </>
            :
            <>
             <Link to='/login'><button className="btn btn-sm btn-primary me-3 " >Login</button></Link>
            <Link to='/signup'><button className="btn btn-sm btn-success ">SignUp</button></Link>
            </>
        
        }
            </div>
        
        </div>
     );
}
 
export default Header;
