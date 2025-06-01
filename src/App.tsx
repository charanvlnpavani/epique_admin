import React from "react";
import "./App.css";
import { SidebarProvider } from "./components/ui/sidebar";
import SideMenubar from "./partials/SideMenubar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Stories from "./pages/Stories";
import Categories from "./pages/Categories";
import Settings from "./pages/Settings";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <SideMenubar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;
