import React from "react";
import "./../styles/App.css";

const App = () => {
  function handleSubmit(event) {
    event.preventDefault();
    
    let value = event.target["name"].value;
    let value1 = event.target["email"].value;
    let value2 = event.target["password"].value;

    let obj = {
      name: value,
      email: value1,
      password: value2,
    };
    console.log(obj);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name</label>
      <input name="name" placeholder="Name" type="text" id="name"/>
      <label htmlFor='email'>Email</label>
      <input name="email" placeholder="Email" type="email" id="email" />
      <label htmlFor='password'>Password</label>
      <input name="password" placeholder="Password" type="password" id="password" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
