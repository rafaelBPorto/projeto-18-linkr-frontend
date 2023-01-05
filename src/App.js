import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./assets/css/GlobalStyle";
import SignIn from "./Pages/SignIn/SignIn.js";
import SignUp from "./Pages/SignUp/SignUp.js";
import TimeLine from "./Pages/Timeline/Timeline";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/timeline/:id" element={<TimeLine />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;