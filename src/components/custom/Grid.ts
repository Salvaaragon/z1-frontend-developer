import styled from 'styled-components';

type CustomGrid = {
  backgroundimage: string;
  backgroundposition: string;
  backgroundrepeat: string;
  backgroundsize: string;
  padding: string;
};

export const Grid = styled.div.attrs(
  ({
    backgroundimage,
    backgroundposition,
    backgroundrepeat,
    backgroundsize,
    padding,
  }: CustomGrid) => ({
    backgroundimage,
    backgroundposition,
    backgroundrepeat,
    backgroundsize,
    padding,
  }),
)`
  display: grid;
  justify-content: center;
  padding: ${({ padding }) => padding};
  background-image: ${({ backgroundimage }) => backgroundimage};
  background-position: ${({ backgroundposition }) => backgroundposition};
  background-repeat: ${({ backgroundrepeat }) => backgroundrepeat};
  background-size: ${({ backgroundsize }) => backgroundsize};
`;
