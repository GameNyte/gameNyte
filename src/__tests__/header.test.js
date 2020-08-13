import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter });

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import { Provider } from 'react-redux';
import store from '../store';

import Header from '../components/header.js'

describe('Testing the Header', () => {
  it('Header should render at application start', () => {
    let app = shallow(<Header />);

    expect(app.find('div').exists()).toBe(true);
  });

  it('renders correctly', () => {
    const DOM = renderer.create(<Provider store={ store }><Header /></Provider>).toJSON();
    expect(DOM).toMatchSnapshot();
  });
});