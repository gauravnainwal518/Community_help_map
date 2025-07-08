import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import ChatPage from "./pages/ChatPage";
import MapView from "./components/map/MapView";
import Dashboard from "./pages/dashboard";

// Layout
import MainLayout from "./layouts/mainLayout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Pages with MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/chatpage" element={<ChatPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Auth pages outside the layout */}
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
