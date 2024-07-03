import { Link } from 'react-router-dom';
import logo from '../../assets/logo dark.png'
import { LuArrowUpRight } from 'react-icons/lu';

const Navbar = () => {
    const navItems=(
        <>
        <Link className='text-xl' to='/'>Home</Link>
        <Link className='text-xl' to='/'>Services</Link>
        <Link className='text-xl' to='/'>Blog</Link>
        <Link className='text-xl' to='/'>About Us</Link>
        </>
    )
    return (
        <nav className="navbar bg-base-100 md:px-10 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             {navItems}
            </ul>
          </div>
          <div>
            {/* logo */}
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
          {navItems}

          </ul>
        </div>
        <div className="navbar-end">
          <button className='flex items-center gap-1 border-2 border-[#020043] p-2 text-base rounded-md font-semibold text-[#020043] hover:bg-[#020043] hover:text-white hover:transition-all duration-700'>
            Appointment
            <LuArrowUpRight className='text-base font-bold'/>
          </button>
        </div>
      </nav>
    );
};

export default Navbar;