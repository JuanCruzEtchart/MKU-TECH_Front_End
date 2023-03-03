import "../assets/css/Register.css";
import React, { useState } from "react";
import bcrypt, { genSaltSync } from "bcryptjs-react";

function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const salt = genSaltSync(12);

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let encryptedPassword = bcrypt.hashSync(password, salt);
      let response = await fetch("http://localhost:3100/api/users/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          password: encryptedPassword,
        }),
      });
      if (response.status === 200) {
        setName("");
        setPassword("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
      return response.json();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Create</button>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default Register;
