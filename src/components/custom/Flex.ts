import styled from 'styled-components';

type FlexType = {
  justifycontent: string;
  padding: string;
  position: string;
  left: string;
  top: string;
  transform: string;
};

export const Flex = styled.div.attrs(
  ({ justifycontent, padding, position, left, top, transform }: FlexType) => {
    ({ justifycontent, padding, position, left, top, transform });
  },
)`
  display: flex;
  justify-content: ${({ justifycontent }) => justifycontent};
  padding: ${({ padding }) => padding};
  position: ${({ position }) => position};
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  transform: ${({ transform }) => transform};
`;
