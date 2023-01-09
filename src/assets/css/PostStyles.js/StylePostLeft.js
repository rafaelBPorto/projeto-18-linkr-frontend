import styled from "styled-components";

export const StylePostLeft = styled.div`
    box-sizing: border-box;
    width: 77px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    
`

export const StylePostIcon = styled.img`
    width:20px;
    margin-top: 20px;
    transition: all 0.5s;

    &:hover{
        transform: scale(1.5);
        cursor: pointer;
    }

`