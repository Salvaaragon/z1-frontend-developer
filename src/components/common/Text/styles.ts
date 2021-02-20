import styled from 'styled-components';

type CustomTextType = {
  align: string;
  color: string;
  fontfamily: string;
  fontsize: string;
  fontweight: string;
  letterspacing: string;
  lineheight: string;
};

export const CustomText = styled.span.attrs(
  ({
    align,
    color,
    fontfamily,
    fontsize,
    fontweight,
    letterspacing,
    lineheight,
  }: CustomTextType) => ({
    align,
    color,
    fontfamily,
    fontsize,
    fontweight,
    letterspacing,
    lineheight,
  }),
)`
  color: ${({ color }) => color};
  font-family: ${({ fontfamily }) => fontfamily};
  font-size: ${({ fontsize }) => fontsize};
  font-weight: ${({ fontweight }) => fontweight};
  letter-spacing: ${({ letterspacing }) => letterspacing};
  line-height: ${({ lineheight }) => lineheight};
  text-align: ${({ align }) => align};
`;
