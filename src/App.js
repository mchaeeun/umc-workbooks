import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import TV from "./Components/TV";
import Celebrity from "./Components/Celebrity";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/tv" element={<TV />} />
          <Route path="/celebrity" element={<Celebrity />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;