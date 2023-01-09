import styled from "styled-components";

export const StylePost = styled.div`
    box-sizing: border-box;
    max-width: 611px;
    border-radius: 16px;
    padding: 16px;
    gap: 20px;
    margin-bottom: 33px;

    display: flex;
    flex-direction: row;
    background: #171717;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;

    @media (max-width: 811px) {
        width: 100%;
        border-radius: 0;
        padding: 14px;
        gap: 10px;
  }
`