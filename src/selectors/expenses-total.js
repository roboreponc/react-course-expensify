export default (expenses) => {
  if (expenses) {
    return expenses.reduce((subAmount, expense) => {
      return subAmount + expense.amount;
    }, 0)
  }
  return 0;
};
