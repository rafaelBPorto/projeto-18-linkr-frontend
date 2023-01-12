import styled from "styled-components";

export const TrendsContainer = styled.div`
  width: 300px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-self: flex-end;
  padding-left: 20px;
  padding: 30px;
  background-color: #171717;
  border-radius: 16px;
  margin-left: 100px;
  margin-top: 215px;
  h1 {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    color: white;
  }
  hr {
    height: 0px;

  border: 1px solid #484848;
    width: 100%;
  }
  p {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  color: white;
  }
  div {
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
