import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddContact from "../Components/AddContact";
import Home from "../Components/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addContact" element={<AddContact />} />
        <Route path="/editContat/:id" element={<AddContact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
