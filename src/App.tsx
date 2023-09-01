import "./App.css";
import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Privacy from "./components/UI/Privacy";
import Home from "./components/UI/Home";
import Contact from "./components/UI/Contact";
import Affiliate from "./components/UI/Affiliate";
import Affiliates from "./pages/Affiliates";
import Terms from "./pages/Terms";
import Advertisers from "./pages/Advertisers";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/privacy" element={<Privacy />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/affiliate" element={<Affiliate />}></Route>
        <Route path="/affiliates" element={<Affiliates />}></Route>
        <Route path="/advertisers" element={<Advertisers />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
