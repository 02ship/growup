import 'react-native';
import React from 'react';
import AddItem from '../components/AddItem';
import renderer from 'react-test-renderer';

test('Add item', () => {
  const snap = renderer.create(
    <AddItem />
  ).toJSON();
  expect(snap).toMatchSnapshot();
});
