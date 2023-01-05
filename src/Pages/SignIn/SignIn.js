import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../Contexts/userContext.js";
import { Banner, LoginForm } from "./Components/signInComponents.js";


export default function SignIn(){

    const localToken = localStorage.getItem('token');
    const navigate = useNavigate();
    const [userToken, setUserToken] = useContext(UserContext);
    useEffect(() => {
        if (localToken !== null) {
            setUserToken(localToken);
            navigate('/timeline');
        }
    }, [])

    return(
        <Container>
            <Banner></Banner>
            <LoginForm></LoginForm>
        </Container>
    )
}




export const Container = styled.div `
    display: flex;
    background-color: white;
    width: 100%;
    height: 100vh;
`