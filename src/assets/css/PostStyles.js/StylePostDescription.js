import styled from "styled-components";

export const StylePostDescription = styled.div`
    box-sizing: border-box;

    width:100%;


    h1{
        width: 502px;
        margin-bottom: 17px;

        font-size: 19px;
        color: #FFFFFF;

        display: flex;
        justify-content: space-between;

        img{
            transition: all 0.5s;
        }
        
        img:hover{
            transform: scale(1.5);
            cursor: pointer;
        }
    }

    p{

        width: 502px;
        margin-bottom: 12px;
        font-size: 17px;
        color: #B7B7B7; 
    }
`