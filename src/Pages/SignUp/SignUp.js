import React from "react";
import Header from "../Contants/Header.js";
import { Banner } from "../SignIn/Components/signInComponents.js";
import { Container } from "../SignIn/SignIn.js";
import { SignUpForm } from "./signUpComponents.js";


export default function SignUp(){

    return(
        <Container>
            <Header></Header>
            <Banner></Banner>
            <SignUpForm></SignUpForm>
        </Container>
    )
}
