import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../functionBased/Header';
import InputTodo from '../functionBased/InputTodo';
import TodoContainer from '../functionBased/TodoContainer';
import TodosList from '../functionBased/TodosList'
//import TodoItem from '../functionBased/TodoItem';

it('renders correctly', () => {
  const tree = renderer
    .create(<Header></Header>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<TodoContainer></TodoContainer>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  
  const tree = renderer
    .create(<InputTodo></InputTodo>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly', () => {
  const tree = renderer
    .create(<TodosList todos={todos}
      handleChange={handleChange}
      handleDelete={handleDelete}
      handleEdit={handleEdit}></TodosList>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});