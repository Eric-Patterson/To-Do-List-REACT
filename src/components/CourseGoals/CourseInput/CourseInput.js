import React, { useState } from "react";
// import styled from "styled-components";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     /* border: 1px solid #ccc; */
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     background: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   /* &.invalid input {
//     border-color: red;
//     background: #ffd7d7;
//   }

//   &.invalid label {
//     color: red;
//   } */
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  // we will use this state as a true/false choice. If something is entered or not
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    // this makes it so if you start typing it remvoes the invalid css styles
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // trim removes excess whitespace at begining or end
    // if length === 0 aka nothing writen, we return so the next line below wont run
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* if form-control is not valid adds "invalid to end of className to activate css class" */}
      {/* THIS IS REPLACED By <FormControl> using STYLED-COMPONENTS ||      <div className={`form-control ${!isValid ? "invalid" : ""}`}> */}
      {/* className={!isValid && "invalid"} */}
      {/* <FormControl invalid={!isValid}> */}
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        {/* if isValid is not valid set red text, if valid use black text */}
        {/* <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label> */}
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        {/* </FormControl> */}
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
