import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from './../providers/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import {FiLock, FiMail} from 'react-icons/fi';
import {FcGoogle} from 'react-icons/fc';


const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        signInUser(email, password)
            .then((result) => {
                toast.success("Login successful!");
                e.target.reset();
                navigate('/');
            })
            .catch((error) => {
                toast.error("Login failed. Please check your credentials.");
                console.error(error);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                toast.success("login successful!");
            })
            .catch((error) => {
                toast.error("Social login failed. Please try again later.");
                console.error(error);
            });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                <div className="flex items-center">
                                <FiMail className="mr-2"></FiMail>
                                <span className="label-text">Email</span>
                                </div>
                             
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    required
                                    className="input input-bordered"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                <div className="flex items-center">
                                <FiLock className="mr-2"></FiLock>
                                <span className="label-text">Password</span>
                                </div>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    placeholder="password"
                                    className="input input-bordered"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p>
                            New to this site? Please{" "}
                            <Link to="/register">
                                <button className="btn btn-link">Register</button>
                            </Link>{" "}
                        </p>
                        <p>
                            <button onClick={handleGoogleSignIn} className="btn btn-ghost btn-outline ps-5">
                              <FcGoogle className="mr-2 "></FcGoogle>  Login With Google
                            </button>
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Login;
