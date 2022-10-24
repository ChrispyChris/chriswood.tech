import React from "react";
import { ReactElement } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Blog from "./blog";
import Contact from "./contact";
import Footer from "../components/footer";
import Header from "../components/header";
import Home from "./home";
import Projects from "./projects";

export default function App(): ReactElement {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
}

