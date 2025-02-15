import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/Blessify.jpeg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To store error messages
  const navigate = useNavigate(); // Hook for navigation

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    // Reset error message
    setError("");

    // Check for empty fields
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simulate successful login (add your authentication logic here)
    console.log("Login successful");

    // Redirect to homepage or user dashboard after login
    alert("Login successful!");
     navigate("/eshwar-traders"); // Uncomment and change to your desired route
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img
            src={logo}
            alt="Your Company Logo"
            className="h-16 rounded-full"
          />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        {/* Display Error Message */}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-3 w-full rounded mb-4 focus:outline-none focus:ring focus:ring-red-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-3 w-full rounded mb-4 focus:outline-none focus:ring focus:ring-red-500"
        />
        <button
          onClick={handleLogin}
          className="bg-red-500 text-white w-full py-3 rounded hover:bg-red-600 transition focus:outline-none focus:ring focus:ring-red-500"
        >
          Login
        </button>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
