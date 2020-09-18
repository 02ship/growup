/**
 * @format
 */

import 'react-native';
import React from 'react';
import AddItem from '../components/AddItem';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {render, cleanup} from 'react-native-testing-library';

afterEach(cleanup);

it('renders correctly', () => {
  renderer.create(<AddItem />);
});

it('should match snapshot', () => {
  const result = renderer.create(<AddItem />).toJSON();
  expect(result).toMatchSnapshot();
});

it('has placeholder text', () => {
  const rendered = render(<AddItem />);
  const textComponent = rendered.getByTestId('test-placeholder')
  expect(textComponent.props.placeholder).toEqual('Add Task...')
  expect(textComponent.props.style).toEqual({ height: 60, padding: 8, fontSize: 16 })
});
