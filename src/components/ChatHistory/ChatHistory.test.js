import { mount, shallow } from 'enzyme';
import React from 'react';
import ChatHistory from './ChatHistory.js'

let wrapper;
let shallowWrapper;

describe('ChatHistory - Component', () => {
  describe('ChatHistory renders', () => {
    beforeEach(() => {
      wrapper = mount(
        <ChatHistory />
      );
      shallowWrapper = shallow(
        <ChatHistory />
      );
    });

    it('should render the ChatHistory component', () => {
      expect(shallowWrapper).toMatchSnapshot();
      expect(wrapper.length).toBeGreaterThan(0);
    });
  });
});
