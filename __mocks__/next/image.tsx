import React from 'react';

const Image = ({ src, alt, fill, priority, sizes, objectFit, ...props }: any) => (
  <img src={src} alt={alt} {...props} />
);

export default Image;
