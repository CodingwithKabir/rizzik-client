import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const handleLogout = () => {
        logOutUser()
            .then(() => {
                console.log("Successfully logout")
            })
            .catch(error => {
                console.error(error.message)
            })
    }

    const navLinks = <>
        <li> <NavLink to="/">Home</NavLink></li>
        <li> <NavLink to="/shop">Shop</NavLink></li>
        <li> <NavLink to="/about">About</NavLink></li>
        <li> <NavLink to="/contact">contact</NavLink></li>

        {
            user && <>
                <li> <NavLink to="/add-product">Add Product</NavLink></li>
                <li> <NavLink to="/update-product">Update Product</NavLink></li>
                <li> <NavLink to="/cart">Cart</NavLink></li>
            </>
        }
    </>

    return (
        <div className="navbar py-7 max-w-[1400px] mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <img className="max-w-[200px]" src="/public/Rizzik logo (new).png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div>
                    {
                        user ? <>
                            <div className="dropdown dropdown-end flex items-center gap-2">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <h2 className="hidden md:flex">{user?.displayName}</h2>
                                <div>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 md:hidden">
                                        <li><Link to="/profile">{user?.displayName}</Link></li>
                                        <li><Link to="/profile">Profile</Link></li>
                                        <li><Link onClick={handleLogout}>Logout</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </> :
                            <Link className="btn md:hidden" to="/login">Login</Link>
                    }
                </div>
                <div className="hidden md:flex">
                    {
                        user ?
                            <a onClick={handleLogout} className="btn mx-2">Logout</a> : <>
                                <Link className="btn" to="/login">Login</Link>
                                <Link className="btn" to="/registration">Register</Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;