import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./assets/css/GlobalStyle";
import TimeLine from "./Pages/Timeline/Timeline";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/timeline/:id" element={<TimeLine />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;