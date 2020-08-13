import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter });

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import Room from '../components/room.js';
import { Provider } from 'react-redux';
import store from '../store';

describe('Testing the room', () => {
  it('should render the button correctly', () => {
    let app = mount(<Provider store={ store }><Room /></Provider>);
    
    expect(app.find('button').exists()).toBe(true);
  });

});