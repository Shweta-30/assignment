// components/SignupForm.tsx
import Link from "next/link";
import React, { useState } from "react";

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Signup successful!");

        // Reset the form fields
        setFormData({
          username: "",
          email: "",
          password: "",
        });
      } else {
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mb-10 border-2 border-cyan-800 w-80 py-4 mx-auto"
    >
      <div className="py-2">
        <label>Name: </label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="py-2">
        <label>Email: </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="py-2">
        <label>Password: </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="bg-slate-900 text-white px-4 py-2">
        Sign Up
      </button>
      <br></br>
      <div>
        already have account?
        <Link href="/" className="text-sm text-blue-800">
          login
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;
