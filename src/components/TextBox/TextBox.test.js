import { mount, shallow } from 'enzyme';
import React from 'react';
import TextBox from './TextBox.js'

let wrapper;
let shallowWrapper;

describe('TextBox - component', () => {
  describe('TextBox renders', () => {
    beforeEach(() => {
      wrapper = mount(
        <TextBox />
      );
      shallowWrapper = shallow(
        <TextBox />
      );
    });

    it('should render the TextBox component', () => {
      expect(shallowWrapper).toMatchSnapshot();
      expect(wrapper.length).toBeGreaterThan(0);
    });
  });
});
