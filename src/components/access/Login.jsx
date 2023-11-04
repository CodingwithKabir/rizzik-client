import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';


const Login = () => {
    const [loginError, setLoginError] = useState("");
    const [loginSuccess, setLoginSuccess] = useState("");


    const { loginUser, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            console.log(result.user)
            navigate(location?.state ? location.state : "/")
        })
        .catch(error => {
            console.error(error.message)
        })
    }
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password);

        if(loginError){
            setLoginError("Email or Password not matched")
            return;
        }

        setLoginError("");
        setLoginSuccess("");

        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                setLoginSuccess(toast("Successfully Login Done"))
                e.target.reset();
                navigate(location?.state && location.state)
            })
            .catch(error => {
                console.error(error.message)
                setLoginError(error.message);
            })
    }

    return (
        <div>
            <div>
                <h1 className="text-5xl font-bold text-center">Login Now</h1>
            </div>
            <div className="hero py-10">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-[500px] max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#EAB446] text-white hover:bg-black">Login</button>
                            </div>
                        </form>
                        {
                            loginError && <p className="text-red-600 px-2 text-center">{loginError}</p>
                        }
                        <div className="flex items-center justify-center gap-2 my-4">
                            <FcGoogle className="text-xl"></FcGoogle>
                            <button onClick={handleGoogleLogin}>Login with Google</button>
                        </div>
                        <div className="text-center pb-2">
                            <p>New here? <Link to="/registration"><button className="btn btn-link text-[#EAB446]">Please Register</button></Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;