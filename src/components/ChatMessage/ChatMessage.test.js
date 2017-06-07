import { mount, shallow } from 'enzyme';
import React from 'react';
import ChatMessage from './ChatMessage.js'

let wrapper;
let shallowWrapper;

describe('ChatMessage - component', () => {
  describe('ChatMessage renders', () => {
    beforeEach(() => {
      wrapper = mount(
        <ChatMessage />
      );
      shallowWrapper = shallow(
        <ChatMessage />
      );
    });

    it('should render the ChatMessage component', () => {
      expect(shallowWrapper).toMatchSnapshot();
      expect(wrapper.length).toBeGreaterThan(0);
    });
  });
});
