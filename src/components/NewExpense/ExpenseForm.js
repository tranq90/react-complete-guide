import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    //   setUserInput((prevState) => {
    //       return{...prevState, enteredAmount: event.target.value};
    //   })
    setenteredAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    };
    console.log(expenseData)
  }

  const dateChangeHandler = (event) => {
    //   setUserInput((prevState) => {
    //       return{...prevState, enteredDate: event.target.value};
    //   })
    setenteredDate(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input onChange={titleChangeHandler} type="text" />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
