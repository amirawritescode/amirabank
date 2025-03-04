import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink,  NavBtn, NavBtnLink } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll'


const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        }
        else
            setScrollNav(false);
        
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }



    return (
        <>
            <Nav scrollNav = {scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick = {toggleHome}>
                        mirabank.
                    </NavLogo>
                    <MobileIcon onClick= {toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to='about' smooth={true} duration={500} exact={true} offset={-80} spy={true} > About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='services' smooth={true} duration={500} exact={true} offset={-80} spy={true} > Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='discover' smooth={true} duration={500} exact={true} offset={-80} spy={true} > Discover </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='oversea' smooth={true} duration={500} exact={true} offset={-80} spy={true} > Overseas </NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/' smooth={true} duration={500} exact={true} offset={-80} spy={true} >Sign Up</NavBtnLink>
                    </NavBtn>          
                           
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
