import React, {useState} from "react";
import styled from "styled-components";
import { Input } from "./input";

const PasswordInputWrapper = styled.div`
    display: flex;
    ~div{
        margin-bottom: 8px;
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
    height: 40px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-size: 1em;
    display: flex;
    border-left: 0;
    padding: 7px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: white;
    font-weight: bold;
    cursor: pointer; 
    user-select: none;
    color: black;
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