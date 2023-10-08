import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { AuthContext } from './../../providers/AuthProvider';
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser,setUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);


    const handleRegister = e => {

        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(name, email, password, accepted);


        if (name.trim() === '') {
            toast.error('Please enter your name.');
            return;
          } else if (name.length < 3) {
            toast.error('Name should be at least 3 characters long.');
            return;
        } else if (!/^[A-Za-z\s]+$/.test(name)) {
            toast.error('Please enter a valid name (alphabetic characters and spaces only).');
            return;
          } else if (password.length < 6) {
            toast.error('Password should be at least 6 characters or longer.');
            return;
          } else if (!/(?=.*[A-Z])(?=.*[^A-Za-z0-9])/.test(password)) {
            toast.error('Your password should have at least one uppercase character and one special character.');
            return;
          } else if (!accepted) {
            toast.error('Please accept our terms and conditions.');
            return;
          } else if (!/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)) {
            toast.error('Please enter a valid email address.');
            return;
          }  
          createUser(email, password)
          .then(result => {
            console.log(result.user);
            updateProfile(result.user, {
              displayName: name,
              photoURL: "https://www.shareicon.net/data/128x128/2016/09/15/829452_user_512x512.png"
            })
            .then(() => {
              setUser(result.user);
              console.log('profile updated');
            })
            .catch(error => {
              console.error(error);
            });
          })
          .catch(error => {
            console.error(error);
          });
        


        }

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl mb-8 text-center">Please Register</h2>
          <form onSubmit={handleRegister}>
                    <input className="mb-4 relative border w-full  py-2 px-4" type="text" name="name" placeholder="Your Name" id="namereg" required />
                    <br />
                    <input className="mb-4 relative border w-full  py-2 px-4" type="text" name="email" placeholder="Email Address" id="emailreg"/>
                    <br />
                    <div className="mb-4 relative border">
                        <input
                            className="w-full py-2 px-4"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            id="passreg" required />
                        <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }

                        </span>
                    </div>
                    <br />
                    <div className="mb-2">
                        <input type="checkbox" name="terms" id="terms" />
                        <label className="ml-2" htmlFor="terms">Accept our <a href="">Terms and Conditions</a></label>
                    </div>
                    <br />
                    <input className="btn btn-secondary mb-4 w-full" type="submit" value="Register" />
                </form>
                
                <p className='text-center'>Already have an account? Please <Link to="/login">Login</Link></p>

        </div>
      </div>
    );
};

export default Register;

