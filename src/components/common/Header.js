import React, {useState} from "react";
import styled from "styled-components";
import {Link as ReactRouterDomLink, useLocation} from "react-router-dom";


const HeaderWrapper = styled.header`
height: 60px;
width: 100%;
box-sizing: border-box;
display: flex ;
padding: 0 16px;
position: fixed;
top: 0;
background-image:linear-gradient(to right, #E5E5E5,  #E5E5E5);
border-bottom: 3px solid  #F47806;
background-color: #FFFF;
background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */

h2{
    color: #F47806;
    padding: 0 44px;
}
`;

const Menu = styled.nav`
display: ${p => p.open ? "block" : "none"};
font-family: "Open Sans";
position: absolute;
width: 100%;
top: 60px;
left: 0;
padding: 8px;
box-sizing: border-box ;
border-bottom: 3px solid  #F47806;
background: white ;

@media(min-width: 768px){
    display: flex;
    left: initial;
    top: initial;
    border-bottom: none; 
    margin: auto 0 auto auto;
    background: none;
    position: relative;
    width: initial;

}
`;

const Link = ({isActive, children, ...props})=> {
    return(
        <ReactRouterDomLink {...props}>
            {children}
        </ReactRouterDomLink>
    )
}

const StyledLink = styled(Link)`
padding: 4px 8px;
display: block;
text-align: center;
box-sizing: border-box;
margin: auto 0;
font-weight: ${p => p.isActive ? "bold" : "normal"};
color: #F47806;;

`;

const MobileView = styled.div`
margin: auto 0 auto auto;
width: 25px;
min-width: 25px;
padding: 5px;
>div{
    height: 3px;
    background: black;
    margin: 5px 0;
    width: 100%;
}
@media(min-width: 768px){
    display: none;
}
h1{

}

`;


export function Header(){
    const {pathname} = useLocation();
    const [menuOpen, setMenuOpen] = useState(false); 
    return(
        <HeaderWrapper>
                <StyledLink to="/" isActive={pathname === '/'}>
            Home
        </StyledLink>
        <MobileView onClick={() => setMenuOpen(s => !s)}>
            <div />
            <div />
            <div /> 
        </MobileView>
        
        <Menu open={menuOpen}>

            <StyledLink to="/Login" isActive={pathname === '/Login'}>
            SignIn
            </StyledLink>
        </Menu>

        </HeaderWrapper>
    )
}