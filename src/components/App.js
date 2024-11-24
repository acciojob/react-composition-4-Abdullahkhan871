import React from "react";
import "./../styles/App.css";
import Fields from "./fields";

const App = () => {
  const eleValue = [
    {
      name: "Name",
      type: "text",
      id: "name",
    },

    {
      name: "Email",
      type: "email",
      id: "email",
    },

    {
      name: "Password",
      type: "password",
      id: "password",
    },
  ];
  return (
    <div>
      <Fields eleValue={eleValue} />
    </div>
  );
};

export default App;
