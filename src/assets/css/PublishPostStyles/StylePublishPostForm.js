import styled from "styled-components";

export const StylePublishPostForm = styled.form`
        
        display: flex;
        flex-direction: column;
        width: 100%;

        font-family: 'Lato', sans-serif;   
        font-size: 20px; 
        font-weight: 300;

        box-sizing:border-box;

        input {
            width: 100%;

            height: 30px;
            margin-bottom: 5px;

            border: unset;
            border-radius: 5px;
   
            font-size: 15px; 
            font-weight: 300;

            background: #EFEFEF;
    }

    input::placeholder{
        color:#949494;
        font-size: 15px; 
        font-weight: 300;
    }

    input:nth-child(3){
        height: 66px;
    }

    button{
        align-self: flex-end;

        width: 112px;
        height: 31px;

        background: #1877F2;
        border-radius: 5px;
        border: none;
   
        font-weight: 700;
        font-size: 14px;
        color: #FFFFFF;
    }
`