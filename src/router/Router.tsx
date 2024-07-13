import { Route, Routes } from "react-router-dom";
import Intro from "@/pages/Intro";
import Home from "@/pages/Home";
import MainLayout from "@/layout/MainLayout";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route element={<MainLayout />}>
        {" "}
        <Route path="/main" element={<Home />} />
      </Route>
    </Routes>
  );
}
