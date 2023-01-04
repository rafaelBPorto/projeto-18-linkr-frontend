import styled from "styled-components";

export const StylePublishPostForm = styled.form`
        
        display: flex;
        flex-direction: column;
        width: 100%;

        h1{
            font-family: 'Lato';
            font-style: normal;
            font-weight: 300;
            color: #707070;
            margin: 0 0 5px 0;
        }
        input {
            box-sizing:border-box;
        
            height: 30px;
            margin-bottom: 5px;

            border: unset;
            border-radius: 5px;

            font-weight: 400;
            font-size: 20px;

            background: #EFEFEF;
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

        /* font-family: 'Lato'; */
        font-weight: 700;
        font-size: 14px;
        color: #FFFFFF;
    }
`