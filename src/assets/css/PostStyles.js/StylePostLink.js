import styled from "styled-components";

export const StylePostLink = styled.div`
    box-sizing: border-box;
    width: 503px;
    display:flex;
    justify-content:space-between;

    border: 1px solid #4D4D4D;
    border-radius: 11px;

    h1{
        font-size: 16px;
        color: #CECECE;
        margin-bottom: 7px;
    }

    p{
        font-size: 11px;
        color: #9B9595;
        margin-bottom: 15px;
    }

    a{
        text-decoration: none;
        font-size: 11px;
        color: #CECECE;
        }

`

export const StylePostLinkText = styled.div`
    margin: 15px;
`

export const StylePostLinkImg = styled.img`
    width: 30%;
    object-fit: cover;
    border-radius: 0 11px 11px 0;
`