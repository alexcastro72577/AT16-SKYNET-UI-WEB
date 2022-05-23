import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavBarStyles.css';

const NavBar = () => {

	const[click, setClick] = useState(false)
	const handleClick = () => setClick(!click)

	const [setColor] = useState(false)
			const changeColor =() => {
					if(window.scrollY >= 100) {
							setColor(true)
					} else {
							setColor(false)
					}
			}

			window.addEventListener('scroll', changeColor)
    return (
      <div className='header'>
					<Link to='/'><h1>SkyNet</h1></Link>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<Link to='/'><li>Home</li></Link>
						<Link to='/'><li>Services</li></Link>

						<Link to='/'><li>About</li></Link>

						<Link to='/'><li>Contacts</li></Link>
						</ul>
						<div className='hamburger' onClick={handleClick}>
							{click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}
						</div>
      </div>

    )
}

export default NavBar
