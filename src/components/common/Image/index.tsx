import React from 'react';
import { CustomImage } from './styles';

export type ImageProps = {
  alt: string;
  border?: string;
  borderRadius?: string;
  boxShadow?: string;
  height: string;
  src: string;
  padding?: string;
  width: string;
};

const Image: React.FC<ImageProps> = (props: ImageProps) => {
  const {
    alt,
    border,
    borderRadius,
    boxShadow,
    height,
    padding,
    src,
    width,
  } = props;
  return (
    <CustomImage
      alt={alt}
      src={src}
      height={height}
      width={width}
      borderradius={borderRadius}
      border={border}
      boxshadow={boxShadow}
      padding={padding}
    />
  );
};

Image.defaultProps = {};

export default Image;
