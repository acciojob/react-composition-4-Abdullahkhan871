import React from "react";

const Fields = ({ eleValue }) => {

  const handle = (event) => {

    event.preventDefault();
    
    let value = event.target['name'].value;
    let value1 = event.target['email'].value;
    let value2 = event.target['password'].value;

    let obj = {
        name: value,
        email: value1,
        password: value2
    }
    console.log(obj)
};

  return (
    <form onSubmit={handle}>
      {eleValue.map((item) => {
        return (
          <>
            <label htmlFor={item.id}>{item.name}</label>
            <input name={item.id} type={item.type} /> <br />
          </>
        );
      })}
      <input type="submit" value={"Submit"} />
    </form>
  );
};

export default Fields;
