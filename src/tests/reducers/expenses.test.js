import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';


test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '9'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});


// instructor solution to 'add an expense'
test('should add an expense from expenseReducer', () => {
  const expense = {
    id: '109',
    description: 'Mortgage',
    amount: 5000,
    createdAt: moment(0),
    note: 'To Be Added'
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ ...expenses, expense ]);
});

// my solution passing in 'undefined' for the existing state
test('should add an expense from expenseReducer', () => {
  const expense = {
    id: '109',
    description: 'Mortgage',
    amount: 5000,
    createdAt: moment(0),
    note: 'To Be Added'
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(undefined, action);
  expect(state).toEqual([ expense ]);
});


test('should edit an expense if expense id IS found', () => {
  const description = 'New Description'
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: { description }
  }
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe(description)
});

test('should NOT edit an expense if expense id NOT found', () => {
  const description = 'New Description'
  const action = {
    type: 'EDIT_EXPENSE',
    id: '99',
    updates: { description }
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
});

