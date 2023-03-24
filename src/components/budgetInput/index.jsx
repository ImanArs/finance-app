import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAmount } from '../../features/finance/componentsSlice';
import { addExpense } from '../../features/finance/expenseSlice';

const BudgetInput = ({ id }) => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setValue(Number(e.target.value));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addAmount({ id, value }),);
    dispatch(addExpense({amount: parseFloat(value)}),)
    setValue(0);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor={`input-${id}`}>Amount:</label>
      <input type="number" id={`input-${id}`} value={value} onChange={handleInputChange} />
      <button type="submit">Add</button>
    </form>
  );
};

export default BudgetInput;