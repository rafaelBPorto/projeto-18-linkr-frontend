import React from "react";
import { Banner } from "../SignIn/Components/signInComponents.js";
import { Container } from "../SignIn/SignIn.js";
import { SignUpForm } from "./signUpComponents.js";


export default function SignUp(){

    return(
        <Container>
            <Banner></Banner>
            <SignUpForm></SignUpForm>
        </Container>
    )
}
