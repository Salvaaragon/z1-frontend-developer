import styled from 'styled-components';

type CustomImageType = {
  border: string;
  borderradius: string;
  boxshadow: string;
  height: string;
  padding: string;
  width: string;
};

export const CustomImage = styled.img.attrs(
  ({
    border,
    borderradius,
    boxshadow,
    height,
    padding,
    width,
  }: CustomImageType) => ({
    border,
    borderradius,
    boxshadow,
    height,
    padding,
    width,
  }),
)`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: ${({ border }) => border};
  border-radius: ${({ borderradius }) => borderradius};
  box-shadow: ${({ boxshadow }) => boxshadow};
  padding: ${({ padding }) => padding};
`;
