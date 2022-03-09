import React from "react";
import styled from "styled-components";
import {Header} from "./Header";

const Content = styled.main`
max-width: 800px;
margin: 80px auto 0 auto; 
padding: 0 16px;
/* box-sizing: border-box; */
font-family: "Open Sans";

h1, h2, h3, h4, h5, h6{
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
    font-family: "Open Sans";
    color: #F47806;
    font-family: 'Inter', sans-serif;

    

}
.logHead{
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
    font-size: 55px;
    line-height: 55.2px;
    padding-top: 45px;
    padding-left: 45px;
    font-weight: 700;
    margin: 7px;
    margin-left: 200px;

}
.logText{
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
        color: #fff;
        margin-top: 2px;
        font-size: 28px ;
    }

`;

export function PageLayout({children}){
    return (
        <>
        <Header />
        <Content>
        {children}
        </Content>
        </>
    )
};