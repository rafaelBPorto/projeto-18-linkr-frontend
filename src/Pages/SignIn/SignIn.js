import React from "react";
import styled from "styled-components";
import { Banner, LoginForm } from "./Components/signInComponents.js";


export default function SignIn(){

    return(
        <Container>
            <Banner></Banner>
            <LoginForm></LoginForm>
        </Container>
    )
}




const Container = styled.div `
    display: flex;
    background-color: white;
    width: 100%;
    height: 100vh;
`