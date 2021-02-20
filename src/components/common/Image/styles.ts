import styled from 'styled-components';

type CustomImageType = {
  border: string;
  borderradius: string;
  width: string;
  height: string;
};

export const CustomImage = styled.img.attrs(
  ({ border, borderradius, width, height }: CustomImageType) => ({
    border,
    borderradius,
    width,
    height,
  }),
)`
  border: ${({ border }) => border};
  border-radius: ${({ borderradius }) => borderradius};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
