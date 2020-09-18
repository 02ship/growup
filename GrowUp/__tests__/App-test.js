/**
 * @format
 * @jest-environment jsdom
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { shallow, mount } from 'enzyme';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {render, cleanup} from 'react-native-testing-library';
import jsdom from 'jsdom'

const { JSDOM } = jsdom;

const { document } = (new JSDOM('')).window;
global.document = document;

afterEach(cleanup);

it('renders correctly', () => {
  renderer.create(<App />);
});

it('should match snapshot', () => {
  const result = renderer.create(<App />).toJSON();
  expect(result).toMatchSnapshot();
});

it('can add an item', () =>{
  const rendered = mount(<App />);
  console.log(rendered.find(addItem))
  const task = rendered.instance().addItem("sweep");
  expect();
})
