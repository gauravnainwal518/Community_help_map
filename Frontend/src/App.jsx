import React, { useState } from "react";
import Toast from "./components/common/Toast";

const App = () => {
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        onClick={() => setShowToast(true)}
      >
        Show Toast
      </button>

      {showToast && (
        <Toast
          message="Successfully submitted!"
          type="success"
          onClose={() => setShowToast(false)}
          duration={3000}
        />
      )}
    </div>
  );
};

export default App;
