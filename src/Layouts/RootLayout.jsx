import Navbar from "../components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="bg-background h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
