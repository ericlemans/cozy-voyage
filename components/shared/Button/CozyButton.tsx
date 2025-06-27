'use client';

import React from 'react';
import { Button, ButtonProps } from '@heroui/react';
import { useRouter } from 'next/navigation';


type CozyButtonProps = {
  href: string;
  className?: string;
} & ButtonProps;

const CozyButton = ({ children, className, href, ...rest }: CozyButtonProps) => {
  const router = useRouter();
  return (
    <Button {...rest} className={className} onPress={() => router.push(href)}>
      {children}
    </Button>
  );
};

export default CozyButton;
