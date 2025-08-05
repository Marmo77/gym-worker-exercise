import { useState } from "react";
import { Routes, BrowserRouter, Route } from "react-router";
import MainPage from "./components/MainPage";
import UserPanel from "./components/UserPanel";
import TrainingBuilder from "./components/TrainingBuilder";
import UserLayout from "./components/layout/UserLayout";
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Poprzednia strona grudzien 2013r. www.autoscan.pl */}
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage />} />
          </Route>
          <Route path="/user" element={<UserLayout />}>
            <Route index element={<UserPanel />} />
            <Route path="training" element={<TrainingBuilder />} />{" "}
            {/* NOWY ROUT */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
