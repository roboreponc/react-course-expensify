import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortBy } from '../../actions/filters';

test('should generate set start date action object', () =>{
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should generate sortBy action object', () => {
  const action = sortBy('amount');
  expect(action).toEqual({ type: 'SORT_BY', sortBy: 'amount' });
});

test('should generate set text filter with text value', () => {
  const text = 'mytesttext';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('should generate set text filter with default blank value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

