'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button, ButtonProps } from 'primereact/button';


type CozyButtonProps = {
  href: string;
  className?: string;
} & ButtonProps;

const CozyButton = ({ children, className, href, ...rest }: CozyButtonProps) => {
  const router = useRouter();
  return (
    <Button {...rest} className={className} onClick={() => router.push(href)}>
      {children}
    </Button>
  );
};

export default CozyButton;
