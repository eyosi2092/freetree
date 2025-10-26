import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css"; // import the CSS file

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ fullName, email, password });
    alert("Registered Successfully!");
    navigate("/login"); // Redirect to login
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          className="signup-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="signup-input"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="signup-input"
        />
        <button type="submit" className="signup-button">Register</button>
      </form>
      <p>Or</p>
      <button className="signup-google">Continue with Google</button>
      <button className="signup-apple">Continue with Apple</button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
