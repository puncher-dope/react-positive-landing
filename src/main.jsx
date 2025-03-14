// import { StrictMode } from "react";

import MainPage from "./MainPage";
import AboutUs from "./AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function Main() {
  return (
    <>
      <BrowserRouter>
        {/* <MainPage /> */}
        {/* <AboutUs /> */}

        <Routes>
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


