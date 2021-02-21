import Text from '@Components/common/Text';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

configure({
  adapter: new Adapter(),
});

const EXAMPLE_TEXT = 'testing-text';

describe('Text component testing', () => {
  describe('Unit', () => {
    const wrapper = shallow(<Text text={EXAMPLE_TEXT} />);
    describe('Component props', () => {
      it('Component props values', () => {
        expect(wrapper.props().align).toEqual('right');
        expect(wrapper.props().children).toEqual(EXAMPLE_TEXT);
        expect(wrapper.props().color).toEqual('#000');
        expect(wrapper.props().fontfamily).toEqual('Roboto');
        expect(wrapper.props().fontsize).toEqual('1rem');
        expect(wrapper.props().fontstyle).toEqual('normal');
        expect(wrapper.props().fontweight).toEqual('initial');
        expect(wrapper.props().letterspacing).toEqual('0');
        expect(wrapper.props().lineheight).toEqual('1.5rem');
      });
    });
  });
});
