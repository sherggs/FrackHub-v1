import React, {useState} from "react";
import styled from "styled-components";
import {Link as ReactRouterDomLink, useLocation} from "react-router-dom";


const HeaderWrapper = styled.header`
 @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
font-family: 'Inter', sans-serif;
height: 60px;
width: 100%;
box-sizing: border-box;
display: flex ;
padding: 0 16px;
position: fixed;
top: 0;
background-image:linear-gradient(to right, #fff,  #ffff);
border-bottom: 3px solid  #F47806;
background-color: #FFFF;
h2{
    color: #F47806;
    padding: 0 44px;
}
`;

const Menu = styled.nav`
display: ${p => p.open ? "block" : "none"};
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
font-family: 'Inter', sans-serif;
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

button{
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
padding: 8px;
font-size: 1em;
padding: 8px;
background-color: #F47806;
color: white;
margin-top: 2px;
font-size: 14px ;
border: 1px solid #ccc;

height: 41px;
width: 94px;
left: 572px;
top: 19px;
border-radius: 200px;



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
           <h3>  Frack Hub</h3>
        </StyledLink>
        <MobileView onClick={() => setMenuOpen(s => !s)}>
            <div />
            <div />
            <div /> 
        </MobileView>
        
        <Menu open={menuOpen}>

            <StyledLink to="/Login" isActive={pathname === '/Login'}>
            Sign Up
            </StyledLink>
            <StyledLink to="/Login" isActive={pathname === '/Login'}>
            sign In
            </StyledLink>
            <button>
            LEND
            </button>
        </Menu>

        </HeaderWrapper>
    )
}