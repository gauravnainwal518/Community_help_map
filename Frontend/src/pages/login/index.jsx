import React, { useState } from "react";
import Input from "../../components/common/Input";
import PasswordInput from "../../components/common/PasswordInput";
import Button from "../../components/common/Button";
import Loader from "../../components/common/Loader";
import Modal from "../../components/common/Modal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

    // Simulate login delay
    setTimeout(() => {
      setLoading(false);
      // In real app: call login API here
      toast.success("Login successful!");
      setShowModal(true);
    }, 2000);
  };

  const closeModal = () => {
    setShowModal(false);
    navigate("/"); // Redirect to home after login
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8 relative">
      <ToastContainer position="top-right" autoClose={3000} />

      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center z-50">
          <Loader />
        </div>
      )}

      <Modal isOpen={showModal} onClose={closeModal} title="Welcome Back!">
        <p className="text-gray-700 mb-4">You have successfully logged in.</p>
        <Button onClick={closeModal} className="w-full">
          Go to Dashboard
        </Button>
      </Modal>

      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md z-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Login to Your Account
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <PasswordInput
            label="Password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
