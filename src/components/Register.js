import React, { useState } from "react";
import bcrypt, { genSaltSync } from "bcryptjs-react";

export default function Register() {
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
    <div className="register min-w-[calc(100vw-8px)] min-h-[calc(100vh-80px)] bg-[#212121] flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-[400px] w-[80%] bg-[#272727] p-5 shadow-default rounded-default flex flex-col justify-center items-center text-white"
      >
        <h1 className="mb-12 text-2xl border-b-2 border-red">Crear usuario</h1>
        <input
          type="text"
          value={name}
          placeholder="Nombre del usuario"
          onChange={(e) => setName(e.target.value)}
          className="w-[100%] bg-darkGray rounded-default text-white placeholder-[rgba(255,255,255,0.5)]"
        />
        <input
          type="text"
          value={password}
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          className="w-[100%] bg-darkGray rounded-default text-white placeholder-[rgba(255,255,255,0.5)]"
        />
        <button type="submit" className="bg-red w-24 p-4 text-black font-bold">
          Crear
        </button>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}
