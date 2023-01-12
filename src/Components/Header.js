import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RiArrowDownSLine ,  RiArrowUpSLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { DebounceInput } from "react-debounce-input"; 
import axios from "axios";
import BASE_URL from "../constants/URL";

export default function Header() {
  const [arrowClicked, setArrowClicked] = useState(false);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchUsers, setSearchUsers] = useState([]);


 
    
   
      useEffect(() => {
        if (searchInput.length < 3) {
          setSearchUsers([]);
        }
        if (searchInput.length >= 3) {
        setSearchUsers( users.filter((i) => i.name.includes(searchInput)));
      }
      }, [searchInput])
     
    console.log(searchUsers);
  


  async function getUsers () {
    try {
      const getUsers = await axios.get(`${BASE_URL}/search`);
      setUsers(getUsers.data);
    } catch (err) {
       console.log(err);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  
  function handleArrowClick() {
    if (arrowClicked) {
      setArrowClicked(false);
    } else {
      setArrowClicked(true);
    }
  }

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          required
          placeholder="Search for people"
        />
        <Button>
          <AiOutlineSearch />
        </Button>
        </SearchBar>
        <Sugestions>
          {searchUsers.map((s) => (
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
  width: 563px;
  align-self: center;
  flex-direction:column;
  height: 45px;
`;
const Button = styled.button`
  position: relative;
  margin-top: 12px;
  left: -32px;
  background-color: #ffffff;
  height: 30px;
  border: 0px;
`;

const SearchBar = styled.div`
  position: absolute;
  background-color: #151515;
  display: flex;
  align-items: center;
  input {
    width: 563px;
    height: 45px;
    background: #ffffff;
    border-radius: 8px;
  }
`



const Sugestion = styled.div`
  width: 563px;
  height: 60px;
  display: flex;
  align-items: center;
  background: #e7e7e7;
`;

const Sugestions = styled.div`
  display: flex;
  position: absolute;
  margin-top: 47px;
  flex-direction: column;
  border-radius: 50px;
`;