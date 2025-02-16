import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/Blessify.jpeg";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // To store error messages
  const navigate = useNavigate(); // Hook for navigation

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const handleSignup = () => {
    // Reset error message
    setError("");

    // Check for empty fields
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Password length check (example: minimum 6 characters)
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // Confirm password match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // If all validations pass, simulate successful signup
    console.log("Signup successful");
    alert("Signup successful!");

    // After successful signup, redirect to login page
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="w-20 h-20 rounded-full" />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
        <form action="/signup" method="post">
        {/* Display Error Message */}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-2 w-full rounded mb-4"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-2 w-full rounded mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-2 w-full rounded mb-4"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border border-gray-300 p-2 w-full rounded mb-4"
        />
        <button
          onClick={handleSignup}
          className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-600 transition"
        >
          Signup
        </button>
        </form>
      </div>
    </div>
  );
}
