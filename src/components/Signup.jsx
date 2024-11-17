import { useState } from "react";

import Logo from "../assets/images/Blessify.jpeg";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    if (password === confirmPassword) {
      console.log("Signup successful");
      // Add logic for signup
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Logo" className="w-20 h-20 rounded-full" />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>
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
      </div>
    </div>
  );
}
