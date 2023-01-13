import styled from "styled-components";

export const StylePostDescription = styled.div`
    box-sizing: border-box;
    width:100%;
    display: flex;
    flex-wrap:wrap;
    overflow:hidden;

    h1{
        width: 100%;
        margin-bottom: 17px;

        font-size: 19px;
        color: #FFFFFF;

        display: flex;
        justify-content: space-between;

        img{
            transition: all 0.5s;
            margin-right: 15px;
        }
        
        img:hover{
            transform: scale(1.2);
           
            cursor: pointer;
            overflow: visible;
            z-index: 3;
        }
    }

    p{
        width: 100%;
        margin-bottom: 12px;
        font-size: 17px;
        color: #B7B7B7; 
    }

    @media (max-width: 811px) {

        h1{
            font-size: 17px;
            overflow:hidden;
        }
        p{
            font-size: 15px;
        }
    }
`