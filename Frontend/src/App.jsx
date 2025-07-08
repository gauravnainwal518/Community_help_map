import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import MapView from "./components/map/MapView";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen pt-24 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chatpage" element={<ChatPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
