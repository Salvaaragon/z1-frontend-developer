import StatusIcon from '@Components/StatusIcon';
import { faAd } from '@fortawesome/free-solid-svg-icons';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

configure({
  adapter: new Adapter(),
});

const EXAMPLE_TEXT = 'testing-button';

describe('StatusIcon component testing', () => {
  const wrapper = shallow(
    <StatusIcon
      icon={faAd}
      iconColor="#ABC123"
      text={EXAMPLE_TEXT}
      textColor="#123ABC"
    />,
  );
  describe('Component props', () => {
    it('Component props values', () => {
      expect(wrapper.children().first().props().color).toEqual('#ABC123');
      expect(wrapper.children().last().props().text).toEqual(EXAMPLE_TEXT);
      expect(wrapper.children().last().props().color).toEqual('#123ABC');
    });
  });
});
