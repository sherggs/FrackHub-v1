import React, {useState, useEffect} from "react";
import {PageLayout, Input, PasswordInput, Button, Spinner} from "components/common";
import styled from "styled-components";

const Form = styled.form`
width: 100%;
max-width: 400px;
background: white;
box-sizing: border-box;
color: black ;
border: 1px solid #eee;
padding: 16px;
border-radius: 4px;


.alter{
    text-align: center;
    margin: 10px 0;
}

`;

let Timeout;

export default function Login(){
    const [FormFill, setFormFill] = useState({username:'', password:''});
    const [submit, setSubmit]  = useState(false)

    function HandleInput(e){
        e.persist();
        setFormFill(s => ({
            ...s,
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
        <h1>Login</h1>
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
        <Button large  type="submit" disabled={submit}>
            {submit? "loading..." :"Login"} 
        </Button>
        {!submit &&
        <>
        <div className="alter">
            or
        </div>
        <Button secondary type="button">
            Register
        </Button>
        </>
        }
        </Form>
        </PageLayout>
    )
}