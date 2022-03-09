import React, {useState, useEffect} from "react";
import {PageLayout, Input, PasswordInput, Button, Spinner} from "components/common";
import styled from "styled-components";

const Form = styled.form`
width: 100%;
max-width: 400px;
background: white;
box-sizing: border-box;
color: black ;
padding: 16px;
border-radius: 4px;
margin: auto;





input::placeholder {
 @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
width: 115px;
height: 28px;


font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 115%;
/* identical to box height, or 28px */

letter-spacing: -0.019em;

color: #000000;
}



`;

let Timeout;

export default function Login(){
    const [FormFill, setFormFill] = useState({username:'', password:''});
    const [submit, setSubmit]  = useState(false)

    function HandleInput(e){
        e.persist();
        setFormFill(se => ({
            ...se,
            [e.target.name]: e.target.value
        })); 
    }
    function HandleSubmit(e){
        e.preventDefault();
        setSubmit(true); 
        Timeout = setTimeout(() =>{
            setSubmit(false);
        },3000);
    }

    useEffect(()=> {
        return () => {
            if (Timeout){
                clearTimeout(Timeout);
            }
        }
    },[])
    return (  
        <PageLayout>
        <h1 className="logHead">Frack Hub</h1>
        <Form onSubmit={HandleSubmit}> 
        {submit? <Spinner /> :
        <>
        <Input onChange={HandleInput} 
        value={FormFill.username} 
        type="text"
        name="username"
        placeholder="username" />
        <PasswordInput  onChange={HandleInput} 
        value={FormFill.password} 
        name="password"/>
        </>
    }
        <Button secondary  type="submit" disabled={submit}>
            {submit? "loading..." :<h2 className="logText">Login</h2>} 
        </Button>
    
        </Form>
        </PageLayout>
    )
}