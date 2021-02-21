import styled from 'styled-components';

type CameraContainerType = {
  height: string;
  width: string;
  border: string;
};

export const CameraContainer = styled.div.attrs(
  ({ height, width, border }: CameraContainerType) => ({
    height,
    width,
    border,
  }),
)`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border: ${({ border }) => border};
  border-radius: 2rem;
  text-align: center;
`;

export const CustomVideo = styled.video`
  width: 100%;
  border-radius: 2rem;
`;

export const CustomCanvas = styled.canvas`
  display: none;
`;
