import React from 'react';
import { CustomImage } from './styles';

type ImageProps = {
  alt: string;
  height: string;
  src: string;
  width: string;
  border?: string;
  borderRadius: string;
};

const Image: React.FC<ImageProps> = (props: ImageProps) => {
  const { alt, border, borderRadius, height, src, width } = props;
  return (
    <CustomImage
      alt={alt}
      src={src}
      height={height}
      width={width}
      borderradius={borderRadius}
      border={border}
    />
  );
};

Image.defaultProps = {};

export default Image;
