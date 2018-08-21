import getExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const result = getExpensesTotal();
  expect(result).toEqual(0)
});


test('should correctly add up a single expense', () => {
  const result = getExpensesTotal([expenses[0]]);
  expect(result).toEqual(expenses[0].amount)
});


test('should correctly add up multiple expenses', () => {
  const result = getExpensesTotal(expenses);
  expect(result).toEqual(114195)
});

