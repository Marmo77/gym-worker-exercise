import { useState } from "react";
import { Routes, BrowserRouter, Route } from "react-router";
import Layout from "./components/layout/Layout";
import UserPage from "./components/UserPage";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Poprzednia strona grudzien 2013r. www.autoscan.pl */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<UserPage />} />
            {/*<Route path="serwis" element={<ServicePage />} />
            <Route path="sprzedaz-samochodow" element={<CarSellingPage />} />
            <Route path="chip-tuning-vtech" element={<ChipTuningPage />} />
            <Route path="pomoc-drogowa" element={<ChipTuningPage />} /> */}
            {/* <Route path="kontakt" element={<ContactPage />} />  */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
