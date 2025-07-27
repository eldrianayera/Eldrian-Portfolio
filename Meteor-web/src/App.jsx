import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Header />} />
          <Route path="*" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
