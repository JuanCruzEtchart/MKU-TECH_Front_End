/* import "../assets/css/Register.css"; */
import React, { useState, useEffect, useRef } from "react";
import bcrypt, { genSaltSync, compareSync } from "bcryptjs-react";
import loginService from "../services/loginService";

function Register() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState("");
  const inputName = useRef();
  const inputPassword = useRef();
  const key = process.env.REACT_APP_USER_API_KEY;
  const endpoint = `http://localhost:3100/api/users/username/${key}/${name}`;

  /*   let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(endpoint);
      let data = response.json();
      console.log(data.data);
      /*       if (response.status === 200) {
        setName("");f
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      } 
      return response.json();
    } catch (err) {
      console.log(err);
    }
  }; */

  console.log(window.localStorage.getItem("user"));

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await loginService.login(name);
        if (password && compareSync(password, data.password)) {
          console.log(`Contraseñas coinciden `);
          delete data.password;
          window.localStorage.setItem("user", JSON.stringify(data));
          /* console.log(window.localStorage.getItem("userId")); */
        } else {
          console.log("no");
        }
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [name]);

  const form = async (e) => {
    e.preventDefault();
    const nameValue = inputName.current.value;
    const passwordValue = inputPassword.current.value;
    setName(nameValue);
    setPassword(passwordValue);
    inputName.current.value = "";
    inputPassword.current.value = "";
  };

  return (
    <div className="App">
      <h1>Hola, {/* {window.localStorage.getItem("user")} */}!</h1>
      <form onSubmit={form}>
        <input type="text" ref={inputName} placeholder="Name" />
        <input type="text" ref={inputPassword} placeholder="Password" />
        <button type="submit">Create</button>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default Register;
