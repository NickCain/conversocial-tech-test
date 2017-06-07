import { mount, shallow } from 'enzyme';
import React from 'react';
import SelectedChat from './SelectedChat.js'

let wrapper;
let shallowWrapper;

describe('SelectedChat - Component', () => {
  describe('SelectedChat renders', () => {
    beforeEach(() => {
      wrapper = mount(
        <SelectedChat />
      );
      shallowWrapper = shallow(
        <SelectedChat />
      );
    });

    it('should render the SelectedChat component', () => {
      expect(shallowWrapper).toMatchSnapshot();
      expect(wrapper.length).toBeGreaterThan(0);
    });
  });
});
