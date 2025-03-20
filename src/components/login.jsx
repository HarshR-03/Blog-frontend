import { useState,useContext } from "react";
import { AuthReducerContext } from "../contexts/authContext";

const Modal = ({ isOpen, onClose}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useContext(AuthReducerContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear any previous errors

    try {
      const response = await fetch('http://zekeyeager18.pythonanywhere.com/test/login/', { // Replace with your backend endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "username":username, "password":password }),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Try to parse error from server
        throw new Error(errorData.message || response.statusText); // Display server error or default message
      }

      const data = await response.json();
      console.log(data);
      localStorage.setItem('authToken', data.token) // Pass the token up to the parent
      dispatch({type:"LOGIN"}) 
      onClose(); // Close the modal after successful login
    } catch (err) {
      setError(err.message); // Set the error message to display
      console.error("Error fetching token:", err);
    }
  };


    if (!isOpen) {
      return null;
    }
  
    return (
      <div className="modal" style={{ display: 'block' }}> {/* Style for overlay */}
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" style={{color:"Black"}}>Login</h5>
              <button type="button" className="close" onClick={onClose}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <form style={{color:"black"}}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
            </div>
            {/* <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Close
              </button>
            </div> */}
          </div>
        </div>
      </div>
    );
  };
  export default Modal