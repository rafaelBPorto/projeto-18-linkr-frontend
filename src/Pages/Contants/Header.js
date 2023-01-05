import React, { useState } from "react";
import styled from "styled-components";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [arrowClicked, setArrowClicked] = useState(false);
  const navigate = useNavigate();

  function handleArrowClick() {
    if (arrowClicked) {
      setArrowClicked(false);
    } else {
      setArrowClicked(true);
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");
    navigate('/');
  }

  return (
    <Navbar>
      <p>linkr</p>
      <div>
        {arrowClicked ? (
          <RiArrowUpSLine
            onClick={handleArrowClick}
            size="30px"
          ></RiArrowUpSLine>
        ) : (
          <RiArrowDownSLine
            onClick={handleArrowClick}
            size="30px"
          ></RiArrowDownSLine>
        )}
        <img  onClick={handleArrowClick} src="https://static-cse.canva.com/blob/759727/ComoTirareEditarSuaFotoparaPerfilemRedesSociaisfeaturedimagee1559023010630.jpg"></img>
        <Logout onClick={handleLogout} display={arrowClicked}>Logout</Logout>
      </div>
    </Navbar>
  );
}

const Navbar = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 72px;
  background-color: #151515;
  color: white;
  top: 0;
  margin-bottom: 300px;
  align-items: center;
  justify-content: space-between;
  p {
    font-family: "Passion One";
    font-size: 49px;
    font-weight: 700;
    margin-left: 20px;
  }
  img {
    border-radius: 50%;
    width: 53px;
    height: 53px;
    margin-right: 20px;
  }
`;

const Logout = styled.div`
  position: fixed;
  top: 72px;
  right: -25px;
  text-align: center;
  text-justify: center;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  background-color: #171717;
  color: white;
  width: 150px;
  height: 47px;
  border-radius: 0px 0px 20px 20px;
  display: ${(props) => (props.display ? `initial` : `none`)};
`;
