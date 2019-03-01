import React from 'react';
import ReactDOM from 'react-dom';
import App from './FoodFinder';
import { shallow, mount, configure } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { MemoryRouter } from 'react-router';

configure({ adapter: new Adapter() })

let wrapper;
beforeEach(() => {
  wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
});

it('has a text box labeled "Enter Location"', () => {
  expect(wrapper.find('input')).to.have.lengthOf(1);
  expect(wrapper.find('label')).to.have.lengthOf(1);

  var input = wrapper.find('input');
  var label = wrapper.find('label');
  expect(input.props()).to.have.property('placeholder', 'Enter City');
  expect(label.text()).to.contain("Enter Location");

});

it('has a img within the input field', () => {
  expect(wrapper.find('input')).to.have.lengthOf(1);
  expect(wrapper.find('img')).to.have.lengthOf(1);

  var search = wrapper.find('img');
  expect(search.props().src).to.contain("search.png");
});

it('takes me to the results page when Search btn is clicked', () => {
  var input = wrapper.find('input');

  input.instance().value = "Atlanta";
  expect(input.instance().value).to.equal('Atlanta');
  input.simulate('change');

  wrapper.find('img').simulate('click', { img: 0 });
  expect(wrapper.find('h1').text()).to.contain("Results");
});

it('displays an error when no text has been entered', () =>{
  expect(wrapper.find('#error-handling').props().style.display).to.equal('none');
  wrapper.find('img').simulate('click', { img: 0 });

  const label = wrapper.find('#error-handling')
  expect(label.props().style.display).to.equal('block');
  expect(label.text()).to.equal('Please enter a location.');
});