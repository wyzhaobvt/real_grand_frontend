import { Link, useNavigate } from "react-router-dom";

const Header = () => {
 
    return ( 
        <div className='row bg-warning d-flex flex-row  align-items-center '>
            <div className='col-sm-3'>
            <Link to='/'><img src="/img/logo.png" className="img-fluid m-2 rounded" width='40px' alt=""/></Link>
            </div>
            <div className='col-sm-5 text-center'>
                <p className='m-0 tagline'>Your real estate destination!</p>
            </div>
            <div className='col-sm-4 d-flex justify-content-end'>
            <Link to='/login'><button className="btn btn-sm btn-primary me-3 " >Login</button></Link>
            <Link to='/signup'><button className="btn btn-sm btn-success ">SignUp</button></Link>
            </div>
        
        </div>
     );
}
 
export default Header;