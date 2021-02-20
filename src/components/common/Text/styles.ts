import styled from 'styled-components';

type CustomTextType = {
  align: string;
  color: string;
  fontfamily: string;
  fontsize: string;
  fontstyle: string;
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
    fontstyle,
    fontweight,
    letterspacing,
    lineheight,
  }: CustomTextType) => ({
    align,
    color,
    fontfamily,
    fontsize,
    fontstyle,
    fontweight,
    letterspacing,
    lineheight,
  }),
)`
  color: ${({ color }) => color};
  font-family: ${({ fontfamily }) => fontfamily};
  font-size: ${({ fontsize }) => fontsize};
  font-style: ${({ fontstyle }) => fontstyle};
  font-weight: ${({ fontweight }) => fontweight};
  letter-spacing: ${({ letterspacing }) => letterspacing};
  line-height: ${({ lineheight }) => lineheight};
  text-align: ${({ align }) => align};
`;
