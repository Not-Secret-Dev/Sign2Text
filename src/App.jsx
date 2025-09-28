import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Translation from "./Components/Pages/Translation/Translation";
import Setting from "./Components/Pages/Settings/Setting";
import History from "./Components/Pages/History/History";
import Help from "./Components/Pages/Help/Help";
import Navbar from "./Components/Global/Navbar/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/translation" element={<Translation />} />
        <Route path="/history" element={<History />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
