import React from 'react';
import { CustomImage } from './styles';
import { ImageProps } from './types';

const Image: React.FC<ImageProps> = (props: ImageProps) => {
  const { alt, border, borderRadius, boxShadow } = props;
  const { height, padding, src, width } = props;

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
