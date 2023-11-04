import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';


const Registration = () => {
    const [registerError, setRegisterError] = useState("");
    const [registerSuccess, setRegisterSuccess] = useState("");

    const { createUser } = useContext(AuthContext);
    // const location = useLocation();
    // const navigate = useNavigate();

    const handleRegistration = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        const name = form.get("name");
        const photo = form.get("photo")
        console.log(email, password, name, photo);

        if (password.length < 6) {
            setRegisterError("Password at least 6 character")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError("Please use an uppercase");
            return;
        }
        else if (!/[!@#$%^&*]/.test(password)) {
            setRegisterError("Please use an special character");
            return;
        }

        setRegisterError("");
        setRegisterSuccess("");

        createUser(email, password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => console.log("profile updated"))
                    .catch(error => {
                        console.log(error.message)
                    })
                console.log(result.user);
                setRegisterSuccess(toast("Registration Successfully Done"))
                e.target.reset();
                // navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.error(error.message)
                setRegisterError(error.message)
            })
    }

    return (
        <div>
            <div>
                <h2 className="text-5xl font-bold text-center">Register Now</h2>
            </div>
            <div className="hero min-h-screen">
                <div className="hero-content">
                    <div className="card flex-shrink-0 w-[500px] max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegistration} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" name="name" placeholder="User Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
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
                                <button className="btn bg-[#EAB446] text-white hover:bg-black">Register</button>
                            </div>
                        </form>
                        {
                            registerError && <p className="text-red-600 px-2 text-center">{registerError}</p>
                        }
                        <div className="text-center pb-2">
                            <p>Already have an account?<Link to="/login"><button className="btn btn-link text-[#EAB446]">Login Now</button></Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Registration;