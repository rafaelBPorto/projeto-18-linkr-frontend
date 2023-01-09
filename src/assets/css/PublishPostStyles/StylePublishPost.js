import styled from "styled-components";

export const StylePublishPost = styled.div `
    box-sizing: border-box;
    width: 611px;
    height: 209px;
    border-radius: 16px;
    padding: 16px;
    gap: 20px;
    margin-bottom: 25px;

    display: flex;
    flex-direction: row;

    h1{
        width:100%;
        font-family: 'Lato', sans-serif;   
        font-size: 20px; 
        font-weight: 300;
        margin-bottom: 20px;
    }

    background: #FFFFFF;
    
    @media (max-width: 811px) {
        width: 100%;
        margin: 0 auto;
        border-radius: 0;

        h1{
            text-align: center;
        }
  }
`

