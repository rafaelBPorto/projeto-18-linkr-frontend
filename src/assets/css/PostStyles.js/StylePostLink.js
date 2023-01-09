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
        line-height: 19px;

    }

    p{
        font-size: 11px;
        color: #9B9595;
        line-height: 13px;
        margin-bottom: 15px;

    }

    a{
        text-decoration: none;
        font-size: 11px;
        line-height: 13px;
        color: #CECECE;
        word-wrap:break-word;
        }

    @media (max-width: 811px) {
        width: 100%;

        h1{
            font-size: 11px;
            line-height: 13px;
            max-width:90%
            
        }
        p{
            font-size: 9px;
            margin-bottom: 3px;
            line-height: 11px;

        }
        a{
            font-size: 11px;
            margin-bottom: 3px;
            line-height: 11px;            
        }
  }
`

export const StylePostLinkText = styled.div`
    margin: 15px;
    @media (max-width: 811px){
        margin: 10px 0 10px 10px;

    }
`

export const StylePostLinkImg = styled.img`
    width: 30%;
    object-fit: cover;
    border-radius: 0 11px 11px 0;

    @media (max-width: 811px) {
        width: 95px;
  }
`