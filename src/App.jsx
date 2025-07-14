import { Routes, Route } from "react-router-dom";
import About from "./Pages/About_s";
import Home from "./Pages/Home_s";
import Toolbar from "./component/Navigation/Toolbar.jsx"
import PageNotFound from "./Pages/PageNotFound.jsx";
import CardDetails from "./Pages/carddetails.jsx";

export default function App() {
  return (
    <>
     <Toolbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/card/:id" element={<CardDetails />} />
        <Route path="*" element = {<PageNotFound/>}/>      </Routes>
    </>

  )
}