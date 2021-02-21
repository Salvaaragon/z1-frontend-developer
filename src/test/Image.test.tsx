import Image from '@Components/common/Image';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

configure({
  adapter: new Adapter(),
});

describe('Image component testing', () => {
  const wrapper = shallow(
    <Image
      alt="test-image"
      border="none"
      borderRadius="5rem"
      height="150px"
      src="example-src"
      padding="1.5rem 2rem"
      width="200px"
    />,
  );
  describe('Component props', () => {
    it('Component props values', () => {
      expect(wrapper.props().alt).toEqual('test-image');
      expect(wrapper.props().border).toEqual('none');
      expect(wrapper.props().borderradius).toEqual('5rem');
      expect(wrapper.props().height).toEqual('150px');
      expect(wrapper.props().src).toEqual('example-src');
      expect(wrapper.props().padding).toEqual('1.5rem 2rem');
      expect(wrapper.props().width).toEqual('200px');
    });
  });
});
