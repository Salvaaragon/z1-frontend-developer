import styled from 'styled-components';

type CustomButtonType = {
  backgroundcolor: string;
  left: string;
  position: 'absolute' | 'relative';
  top: string;
};

export const CustomButton = styled.button.attrs(
  ({ backgroundcolor, left, position, top }: CustomButtonType) => ({
    backgroundcolor,
    left,
    position,
    top,
  }),
)`
  background-color: ${({ backgroundcolor }) => backgroundcolor};
  padding: 0.5rem 1.5rem;
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  position: ${({ position }) => position};
  border-radius: 4rem;
  border: none;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    opacity: 0.7;
  }
`;

export const CustomLink = styled.span`
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
