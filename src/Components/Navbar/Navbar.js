import './Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar()
{
    return(
        <div className='Navbar'>
            <span className='lo1'>S</span><span className='lo2'>portscen</span><span className='lo3'>tra</span>
            <Link className='nav-menu'to='/'>Home</Link>
            <Link className='nav-menu'to='/Sports'>Sports</Link>
            <Link className='nav-menu'to='/Our services'>Our services</Link>
            <Link className='nav-menu'to='/About'>About</Link>
            <Link className='nav-menu'to='/Help'>Help</Link>
            <input className='se' type='text'placeholder='Search'/>
            <button className='b1'>Search</button>
            <Link className='log'to='/login'>Login</Link>
            <Link className='sign'to='/register'>Register</Link>
        </div>
    );
}