import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RiArrowDownSLine ,  RiArrowUpSLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { DebounceInput } from "react-debounce-input"; 
import axios from "axios";

export default function Header() {
  const [arrowClicked, setArrowClicked] = useState(false);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [search, setSearch] = useState([]);

  useEffect(() => {
    axios
      .post("https://localhost:4000/timeline/search", name)
      .then((res) => {
        setSearch(res.data);
        console.log(search);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name]);

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
      <Search>
        <SearchBar>
        <DebounceInput
          minLength={3}
          debounceTimeout={300}
          type="search"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Search for people"
        />
        <Button>
          <AiOutlineSearch />
        </Button>
        </SearchBar>
        <Sugestions>
          {search.map((s) => (
            <Sugestion>
              <img src={s.photo} />
              <h1>{s.name}</h1>
            </Sugestion>
          ))}
        </Sugestions>
      </Search>

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
        <Logout onClick={handleLogout} display={(arrowClicked ? `initial` : `none`)}>Logout</Logout>
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
  /* margin-bottom: 300px; */
  align-items: center;
  justify-content: space-between;
  p {
    font-family: "Passion One";
    font-size: 49px;
    font-weight: 700;
    margin-left: 17px;
  }
  img {
    border-radius: 50%;
    width: 53px;
    height: 53px;
    margin-right: 20px;
    @media (max-width: 811px) {
      margin-right: 10px;

    }
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
  display: ${(props) => (props.display)};
`;


const Search = styled.div`
  display: flex;
  flex-direction:column;
  input {
    width: 563px;
    height: 45px;
    background: #ffffff;
    border-radius: 8px;
  }
`;
const Button = styled.button`
  position: relative;
  margin-top: 12px;
  left: -32px;
  background-color: #ffffff;
  height: 30px;
  border: 0px;
`;

const Sugestion = styled.div`
  width: 563px;
  height: 176px;
  background: #e7e7e7;
  border-radius: 8px;
`;

const Sugestions = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const SearchBar = styled.div`
  background-color: #151515;
  display: flex;
  align-items: center;
`