import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./assets/css/GlobalStyle";
import { UserContext } from "./Contexts/userContext";
import SignIn from "./Pages/SignIn/SignIn.js";
import SignUp from "./Pages/SignUp/SignUp.js";
import TimeLine from "./Pages/Timeline/Timeline";



function App() {

  const [userToken, setUserToken] = useState("");

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
      <UserContext.Provider value={[userToken, setUserToken]}>
        <Routes>
          <Route path="/timeline/:id" element={<TimeLine />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;