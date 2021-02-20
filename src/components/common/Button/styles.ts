import styled from 'styled-components';

type CustomButtonType = {
  backgroundcolor: string;
};

export const CustomButton = styled.button.attrs(
  ({ backgroundcolor }: CustomButtonType) => ({ backgroundcolor }),
)`
  background-color: ${({ backgroundcolor }) => backgroundcolor};
  padding: 0.5rem 1.5rem;
  border-radius: 4rem;
  border: none;
  cursor: pointer;

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
