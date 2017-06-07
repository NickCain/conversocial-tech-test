import { mount, shallow } from 'enzyme';
import React from 'react';
import Header from './Header.js'

import Button from '../../components/common/Button/Button';

let wrapper;
let shallowWrapper;

describe('Header - Component', () => {
  describe('Header renders', () => {
    beforeEach(() => {
      wrapper = mount(
        <Header />
      );
      shallowWrapper = shallow(
        <Header />
      );
    });

    it('should render the Header component', () => {
      expect(shallowWrapper).toMatchSnapshot();
      expect(wrapper.length).toBeGreaterThan(0);
    });

    it('should render text header', () => {
      expect(wrapper.text()).toContain('An Awesome Chat App');
    });

    it('should render one <Button /> component', () => {
      expect(shallowWrapper.find(Button)).toHaveLength(1);
    });
  });
});
