import { Route, Routes } from "react-router-dom";
import Intro from "@/pages/Intro";
import Home from "@/pages/Home";
import MainLayout from "@/layout/MainLayout";
import Me from "@pages/Me";
import Career from "@pages/Career";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route element={<MainLayout />}>
        <Route path="/main" element={<Home />} />
        <Route path="/me" element={<Me />} />
        <Route path="/career" element={<Career />} />
      </Route>
    </Routes>
  );
}
