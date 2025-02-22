import Modal from '../components/login'
import { useContext, useState } from 'react';
import { AuthContext, AuthReducerContext } from '../contexts/authContext';

const Navbar = ()=>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const authContext = useContext(AuthContext);
    const dispatch = useContext(AuthReducerContext)

    const logout = ()=>{
        dispatch({type:"LOGOUT"})
    }

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <nav class="navbar navbar-dark bg-dark" style={{color:"white"}}>
          <a className="navbar-brand navbar-text">Navbar</a>
          <div className='form-inline'>
        {authContext.isloggedin? <button type="button" className="btn btn-danger" onClick={logout}>Logout</button>:        
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