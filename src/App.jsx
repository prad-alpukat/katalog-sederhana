import { Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Product from "./pages/Product";

// import component
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Product />} />
      </Routes>
    </>
  );
}
