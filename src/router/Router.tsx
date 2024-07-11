import { Route, Routes } from "react-router-dom";
import Intro from "../pages/Intro";
import Home1 from "../pages/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/main" element={<Home1 />} />
    </Routes>
  );
}
