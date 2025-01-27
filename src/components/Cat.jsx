import * as React from "react";
import { useState } from "react";

function Cat() {
  const [cat, setCat] = useState({
    name: "shini",
    age: "3",
    eyecolor: "blue",
    color: "white",
  });

  const changeCat = () => {
    setCat((previousState) => {
      return { ...previousState, color: "orange", name: "genny", age: "4" };
    });
  };

  return (
    <>
      <h1>My {cat.name}</h1>
      <p>her colour is {cat.color}</p>
      <p>she is {cat.age} year old</p>
      <p>and her eye color is {cat.eyecolor}.</p>
      <button type="button" onClick={changeCat}>
        change cat
      </button>
    </>
  );
}

export default Cat;
