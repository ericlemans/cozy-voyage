import React, { useEffect } from 'react';

const Script = ({ onLoad, onReady, ...props }: any) => {
  useEffect(() => {
    onLoad?.();
    onReady?.();
  }, []);
  return null;
};

export default Script;
