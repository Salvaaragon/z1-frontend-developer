import styled from 'styled-components';

type CustomGrid = {
  padding: string;
};

export const Grid = styled.div.attrs(({ padding }: CustomGrid) => ({
  padding,
}))`
  display: grid;
  justify-content: center;
  padding: ${({ padding }) => padding};
`;
