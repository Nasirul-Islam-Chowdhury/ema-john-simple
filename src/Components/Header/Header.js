import React, { useContext } from 'react';
import Logo from '../../images/Logo.svg'
import './Header.css'
import {Link} from 'react-router-dom'
import { AuthContext } from '../contexts/UseContexts';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    return (
        <nav className='header'>
            <img src={Logo} alt="" />
            <div>
                <Link to={"/"}>Shop</Link>
                <Link to={"/order"}>Orders</Link>
                <Link to={"/inventory"}>Inventory</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/login"}>Login</Link>
                {user?.uid?<Link onClick={logOut}>Sign Out</Link>:<Link to={"/signup"}>Sign up</Link>}
                <span className='email'>{user?.email.slice(0,8)}</span>
            </div>
        </nav>
    );
};

export default Header;