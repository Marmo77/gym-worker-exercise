import { useState } from "react";
import { Routes, BrowserRouter, Route } from "react-router";
import Layout from "./components/layout/Layout";
import UserProfileLayout from "./components/layout/UserProfileLayout";
import MainPage from "./components/MainPage";
import UserPanel from "./components/UserPanel";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Poprzednia strona grudzien 2013r. www.autoscan.pl */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
          </Route>
          <Route path="/user" element={<UserProfileLayout />}>
            <Route index element={<UserPanel />} />
          </Route>
          {/*<Route path="serwis" element={<ServicePage />} />
            <Route path="sprzedaz-samochodow" element={<CarSellingPage />} />
            <Route path="chip-tuning-vtech" element={<ChipTuningPage />} />
            <Route path="pomoc-drogowa" element={<ChipTuningPage />} /> */}
          {/* <Route path="kontakt" element={<ContactPage />} />  */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
