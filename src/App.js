import { BrowserRouter, Route, Routes } from "react-router-dom";
import TimeLine from "./Pages/Timeline/Timeline";
// import GlobalStyle from "./assets/styles/GlobalStyle.js";

function App() {
  return (
    <>
      {/* <GlobalStyle /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/timeline/:id" element={<TimeLine />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;