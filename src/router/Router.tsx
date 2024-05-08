import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Home1 from "../pages/Home1";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/1" element={<Home1 />} />
    </Routes>
  );
}
