

import MainPage from "./MainPage";
import AboutUs from "./AboutUs";
import ServicesPage from "./ServicesPage";
import UseCasesPage from "./UseCasesPage";
import PricingPage from "./PricingPage";
import BlogPage from "./BlogPage";
import RequestAQuote from "./RequestAQuote";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function Main() {
  return (
    <>
      <BrowserRouter>
        {/* <MainPage /> */}
        {/* <AboutUs /> */}

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path='/ServicesPage' element={<ServicesPage />} />
          <Route path='/UseCasesPage' element={<UseCasesPage />} />
          <Route path='/PricingPage' element={<PricingPage />} />
          <Route path='/BlogPage' element={<BlogPage />} />
          <Route path='/RequestAQuote' element={<RequestAQuote />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
// import MainPage from "./MainPage";
// import AboutUs from "./AboutUs";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { createRoot } from "react-dom/client";
// createRoot(document.getElementById("root")).render(
//   <>
//     <>
//       <BrowserRouter>
//         {/* <MainPage /> */}
//         {/* <AboutUs /> */}

//         <Routes>
//           <Route path="/MainPage" element={<MainPage />} />
//           <Route path="/AboutUs" element={<AboutUs />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   </>
// );


