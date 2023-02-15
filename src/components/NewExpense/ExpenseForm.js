import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // preventing page reload

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate), // Parsing entered string date and converting to a date object
    };

    /* CHILD-TO-PARENT COMPONENT COMMUNICATION 
    Since onAddExpenseData has been passed into the Expense form, it 
    expects expense data to be sent into it. Thus, the .prop calls onAddExpenseData
    which refers to the function addExpenseDataHandler which in turn expects expenseData 
    as a parameter 
       */
    props.onAddExpenseData(expenseData);
    // Overriding what the user entered with an empty string after
    //submitting the form (clearing the input)
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2025-01-01"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

/* cleaner version using one state that does not need repeatable code 
and ensures the latest state is always received  */

/*   const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
 */

/* The set userUserInput function receives and anonymous function that
   in turn receives the previous state of what is passed into useState (this implementation guarantees
   that setUserInput always receives the latest state). In this case 
   the state of the object passed into useState object. 
   Spread operator (...) takes all the key value pairs of the object (userInput) */

/*   setUserInput((prevState) => {
    return { ...prevState, enteredTitle: event.target.value };
  });
}; */
