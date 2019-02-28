import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, configure} from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';
import Adapter from 'enzyme-adapter-react-16';
import {expect} from 'chai';

configure({adapter: new Adapter()})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has a text box labeled "Enter Location"', () =>{
  const wrapper = shallow(<App />);
  expect(wrapper.find('input')).to.have.lengthOf(1);
  expect(wrapper.find('label')).to.have.lengthOf(1);

  var input = wrapper.find('input');
  var label = wrapper.find('label');
  expect(input.props()).to.have.property('placeholder', 'Enter City');
  expect(label.text()).to.contain("Enter Location");
  
})
