import { NavLink, useNavigate } from 'react-router'
import { useContext, useState } from 'react';
import { UseStoreHook } from '../Hooks/UseStoreHook';
import { FaRegUserCircle } from "react-icons/fa";
import AuthPrompt from './AuthPrompt ';

const Navbar = () => {

    const { currentUser, setCurrentUser } = UseStoreHook();
    const [isOpen, seIsOpen] = useState(false);
    const toggleMenu = () => seIsOpen(!isOpen);
    const nevigate = useNavigate();
    const [showAuthPrompt, setShowAuthPrompt] = useState(false);
    const [nextRoute, setNextRoute] = useState("");
    const [hasDismissedPrompt, setHasDismissedPrompt] = useState(false);

    const handleLogout = () => {
        setCurrentUser(null);
        localStorage.removeItem("currentUser");
    };
    const protectedNavigate = (path) => {
        if (!currentUser) {
            if (hasDismissedPrompt) {
                nevigate(path); // directly navigate if already dismissed
            } else {
                setNextRoute(path);
                setShowAuthPrompt(true);
            }
        } else {
            nevigate(path);
        }
    };
    return (

        // for desktop
        <div>
            <div className='md:flex hidden justify-between z-50 items-center items-center px-[2rem] bg-[#00809D] text-white h-[3rem] fixed w-full'>
                <div>
                    <h1 className='font-bold text-[1.5rem]'>🛍️ My E-Store</h1>
                </div>
                <div className='navgap flex gap-[2rem] items-center'>
                    <NavLink onClick={(e) => { e.preventDefault(); protectedNavigate("/"); }} className={(e) => (e.isActive ? "text-black font-bold" : "")} to="/" >Home</NavLink>
                    <NavLink onClick={(e) => { e.preventDefault(); protectedNavigate("/addProduct"); }} className={(e) => (e.isActive ? "text-black font-bold" : "")} to="/addProduct" >Add Product</NavLink>
                    <NavLink onClick={(e) => { e.preventDefault(); protectedNavigate("/about"); }} className={(e) => (e.isActive ? "text-black font-bold" : "")} to="/about" >About</NavLink>

                    {!currentUser ? (
                        <NavLink className="border px-2 py-1 rounded-md font-bold cursor-pointer hover:bg-black hover:text-white transition duration-300" to="/signin">Sign In</NavLink>
                    ) : (
                        <>
                            <span className="text-red-700 font-semibold flex items-center gap-1"><FaRegUserCircle /> Hi, {currentUser.Name || currentUser.Email}</span>
                            <button onClick={handleLogout} className="text-black border px-2 py-1 rounded-md font-bold cursor-pointer hover:bg-black hover:text-white transition duration-300">Logout</button>
                        </>
                    )}
                </div>
            </div>

            {/* for mobile button */}
            <div className='md:hidden  flex justify-between items-center z-40 px-[2rem] bg-[#00809D] text-white h-[3rem] w-full   '>
                <div>
                    <h1 className='font-bold text-[1.5rem]'>🛍️ My E-Store</h1>
                </div>
                {

                }
                <button
                    onClick={toggleMenu}
                    className=' text-white absolute z-50 transform right-2  bg-gray-800 px-2 rounded-md text-3xl'
                >
                    {isOpen ? "✖" : "☰"}
                </button>
            </div>

            {/* for mobile full screeen */}
            <div
                className={`fixed z-45 top-0 right-0 w-full h-full bg-gray-900 p-8  transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden flex flex-col items-center`}
            >
                <h1 className='font-bold text-[1.5rem] text-white mb-5'>🛍️My E-Store</h1>
                {!currentUser ? (
                    ""
                ) : (
                    <>
                        <span className='font-semibold text-red-500 mb-10 text-2xl flex items-center gap-1'><FaRegUserCircle /> Hi, {currentUser.Name || currentUser.Email}</span>
                    </>
                )}
                <nav className='flex flex-col items-center  space-y-6 text-2xl text-white'>
                    <NavLink
                        onClick={(e) => {
                            e.preventDefault();
                            toggleMenu();
                            protectedNavigate("/");
                        }}
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        onClick={(e) => {
                            e.preventDefault();
                            toggleMenu();
                            protectedNavigate("/detail/:id");
                        }}
                        to="/detail/:id"
                    >Product Details
                    </NavLink>
                    <NavLink
                        onClick={(e) => {
                            e.preventDefault();
                            toggleMenu();
                            protectedNavigate("/addProduct");
                        }}
                        to="/addProduct"
                    >
                        Add Product
                    </NavLink>
                    <NavLink
                        onClick={(e) => {
                            e.preventDefault();
                            toggleMenu();
                            protectedNavigate("/about");
                        }}
                        to="/about"
                    >
                        About
                    </NavLink>
                    {!currentUser ? (
                        <NavLink className="border px-2 py-1 rounded-md font-bold cursor-pointer hover:bg-black hover:text-white transition duration-300" to="/signin" onClick={toggleMenu}>Sign In</NavLink>
                    ) : (
                        <>
                            <button onClick={handleLogout} className="text-white border px-2 py-1 rounded-md font-bold cursor-pointer hover:bg-black hover:text-white transition duration-300">Logout</button>
                        </>
                    )}
                </nav>
            </div>

            {
                showAuthPrompt && (
                    <AuthPrompt
                        onClose={() => {
                            setShowAuthPrompt(false)
                            setHasDismissedPrompt(true);
                            nevigate(nextRoute);
                        }}
                        onContinue={() => {
                            setShowAuthPrompt(false);
                            nevigate("/signin");
                        }}
                    />
                )
            }
        </div >
    )
}

export default Navbar
