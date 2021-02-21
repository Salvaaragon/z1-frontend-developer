import Button from '@Components/common/Button';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

configure({
  adapter: new Adapter(),
});

const EXAMPLE_TEXT = 'testing-button';

describe('Button component testing', () => {
  const action = () => {
    return 'Function return';
  };

  const wrapper = shallow(
    <Button text={EXAMPLE_TEXT} type="button" action={action} />,
  );
  describe('Component props', () => {
    it('Component props values', () => {
      expect(wrapper.children().props().backgroundcolor).toEqual(
        'rgba(47, 0, 121, 0.3)',
      );
      expect(wrapper.children().props().position).toEqual('relative');
      expect(wrapper.children().props().top).toEqual('0');
      expect(wrapper.children().props().left).toEqual('0');
    });

    it('Component children values', () => {
      expect(wrapper.children().children().props().alignment).toEqual('center');
      expect(wrapper.children().children().props().fontFamily).toEqual(
        'Roboto',
      );
      expect(wrapper.children().children().props().fontSize).toEqual('1rem');

      expect(wrapper.children().children().props().fontStyle).toEqual('normal');

      expect(wrapper.children().children().props().fontWeight).toEqual(
        'initial',
      );
      expect(wrapper.children().children().props().letterSpacing).toEqual('0');
      expect(wrapper.children().children().props().lineHeight).toEqual(
        '1.5rem',
      );
      expect(wrapper.children().children().props().text).toEqual(EXAMPLE_TEXT);
    });
  });
});
