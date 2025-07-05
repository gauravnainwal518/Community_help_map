import React from "react";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import MapView from "./components/map/MapView";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 px-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Community Help Map
        </h1>
        <MapView />
      </main>
      <Footer />
    </>
  );
};

export default App;
