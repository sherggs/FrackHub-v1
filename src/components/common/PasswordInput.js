import React, {useState} from "react";
import styled from "styled-components";
import { Input } from "./input";

const PasswordInputWrapper = styled.div`
    display: flex;
    ~div{
        margin-bottom: 8px;
    }

    input::placeholder {
 @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
width: 115px;
height: 28px;

font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 115%;
box-sizing: border-box;

/* identical to box height, or 28px */

letter-spacing: -0.019em;

color: #000000;



}
`;


const PasswordStyle = styled(Input).attrs(() => ({
    type: 'password', 
    placeholder: 'Password',
}))`
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
`;

const ToggleButton = styled.div`
    /* height: 46px;
    font-size: 1em;
    display: flex;
    border-left: 0;
    padding: 7px;

    */

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
padding: 4px 8px;
border: 1px solid #ccc;
font-size: 1em;
font-family: 'Inter', sans-serif;
height: 46px;
background: #C4C4C4;
margin-bottom: 16px;
color: black;
font-weight: bold;
border-left: 0;
border: 1px solid #ccc;
border-top-right-radius: 4px;
border-bottom-right-radius: 4px;
font-size: 1em;
user-select: none;
cursor: pointer; 
box-sizing: border-box;


`;


export function PasswordInput(props){
    const [ShowPassword, setShowPassword] = useState(false);
    return (
        <>
        <PasswordInputWrapper>
        <PasswordStyle {...props} />
        <ToggleButton onClick={() => setShowPassword(p => !p)}>
         {ShowPassword ? "hide " : "show"}
        </ToggleButton>
        </PasswordInputWrapper>
            
            <div>
                {ShowPassword ? props.value : ""}
            </div>
        </>
    );
}