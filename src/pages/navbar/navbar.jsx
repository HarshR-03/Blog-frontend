import Modal from '../../components/login'
import { useContext, useState } from 'react';
import { AuthContext, AuthReducerContext } from '../../contexts/authContext';
import { useNavigate } from 'react-router';

const Navbar = ()=>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const authContext = useContext(AuthContext);
    const dispatch = useContext(AuthReducerContext)
    const navigate = useNavigate();

    const logout = ()=>{
        dispatch({type:"LOGOUT"})
    }

    const navigateToDash = ()=>{
      navigate("/user")
      navigate(0)
    }

    const navigateToHome = ()=>{
      authContext.isloggedin? navigate("/home") : navigate("/landing") 
      navigate(0)
    }

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <nav className="navbar navbar-dark bg-dark" style={{color:"white"}}>
          <a className="navbar-brand navbar-text" onClick={navigateToHome}>Navbar</a>
          <div className='form-inline'>
        {authContext.isloggedin? 
        <>
        <button type="button" className="btn btn-primary mr-sm-2" onClick={navigateToDash}>Dashboard</button>
        <button type="button" className="btn btn-danger" onClick={logout}>Logout</button>
        </>:        
          <>
          <button type="button" className="btn btn-outline-danger mr-sm-2" onClick={openModal}>Sign In</button>
          <button type="button" className="btn btn-primary">Register</button>
          </>
        }
          </div>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
      </nav>
    )
}

export default Navbar