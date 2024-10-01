import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const NavBar = () => {
    const { user, handleLogOut } = useContext(AuthContext);
    const navLinks =
        <>
            <li> <NavLink className={({ isActive }) => isActive ? 'underline decoration-primary decoration-2 underline-offset-8' : 'hover:underline decoration-primary decoration-2 underline-offset-8'} to='/' end>Home</NavLink></li>
            <li> <NavLink className={({ isActive }) => isActive ? 'underline decoration-primary decoration-2 underline-offset-8' : 'hover:underline decoration-primary decoration-2 underline-offset-8'} to='/all-items'>All Art & craft Items</NavLink></li >
            <li> <NavLink className={({ isActive }) => isActive ? 'underline decoration-primary decoration-2 underline-offset-8' : 'hover:underline decoration-primary decoration-2 underline-offset-8'} to='/my-items'>My Art&Craft Items</NavLink></li >
            {user?.email && <li> <NavLink className={({ isActive }) => isActive ? 'underline decoration-primary decoration-2 underline-offset-8' : 'hover:underline decoration-primary decoration-2 underline-offset-8'} to='/add-item'>Add Craft Item</NavLink></li >}
        </>
    const sign =
        <>
            {
                user ? <button onClick={handleLogOut} className='text-white hover:text-primary'>| LogOut</button> : <NavLink className={({ isActive }) => isActive ? 'text-primary' : 'text-white hover:text-primary'} to='/login'>Login</NavLink>
            }
        </>
    return (
        <nav className="bg-secondary py-6">
            <div className="container mx-auto flex items-center justify-between">
                {/* Mobile View */}
                <div className="lg:hidden flex items-center justify-between w-full z-10">
                    <div className="flex items-center">
                        <a href="#" className='flex items-center gap-3 text-primary font-mono text-2xl'>
                            <img src={logo} alt="" className='w-11' />Clay Corner
                        </a>
                    </div>
                    <div className="flex items-center space-x-2 ml-auto">
                        <div className="dropdown"> {/* Add margin-right to move menu from the right */}
                            <div tabIndex={0} role="button" className="btn btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 w-7 text-primary"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu-sm dropdown-content bg-primary rounded-box mt-3 -ml-4 w-52 p-2 shadow text-white">
                                {navLinks}
                            </ul>
                        </div>

                        {/* login user */}
                        <div className="log-reg flex flex-col items-end">
                            {
                                user &&
                                <div className='flex items-center space-x-4'>
                                    <div className="avatar">
                                        <div className="ring-primary ring-offset-base-100 w-9 rounded-full ring ring-offset-2">
                                            <img src={user.photoURL} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start space-y-2">
                                        <div className="badge badge-info gap-2 bg-white text-secondary font-semibold">{user.displayName}</div>
                                            <div className="badge badge-outline border-primary text-white mr-2 hidden" >{user.email}</div>
                                    </div>
                                </div>
                            }
                            {sign}
                        </div>
                    </div>
                </div>

                {/* Desktop View */}
                <div className="hidden lg:flex items-center justify-between w-full">
                    <div className="flex items-center">
                        <a href="#" className='flex items-center gap-3 text-primary font-mono text-2xl'>
                            <img src={logo} alt="" className='w-11' />Clay Corner
                        </a>
                    </div>
                    <ul className="menu-horizontal px-1 text-white space-x-5">
                        {navLinks}
                    </ul>
                    <div className="log-reg flex items-baseline">
                        {/* login user */}
                        {
                            user &&
                            <div className='flex items-center space-x-4'>
                                <div className="avatar">
                                    <div className="ring-primary ring-offset-base-100 w-9 rounded-full ring ring-offset-2">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>
                                <div className="flex flex-col items-start space-y-2">
                                    <div className="badge badge-info gap-2 bg-white text-secondary font-semibold">{user.displayName}</div>
                                        <div className="badge badge-outline border-primary text-white mr-2" >{user.email}</div>
                                </div>
                            </div>
                        }
                        {sign}
                    </div>
                </div>
            </div>
        </nav>


    );
};

export default NavBar;
