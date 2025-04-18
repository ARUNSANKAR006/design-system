import React from 'react';
import { typography } from '../../theme/tokens';

type TypographyVariant = 
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' 
  | 'body1' | 'body2' | 'caption' | 'label' | 'helper';

interface TypographyProps {
  variant: TypographyVariant;
  children: React.ReactNode;
  className?: string;
  color?: string;
  as?: React.ElementType;
}

const variantMapping: Record<TypographyVariant, { element: React.ElementType, className: string }> = {
  h1: { element: 'h1', className: 'text-5xl font-bold leading-tight tracking-normal' },
  h2: { element: 'h2', className: 'text-4xl font-bold leading-tight tracking-normal' },
  h3: { element: 'h3', className: 'text-3xl font-semibold leading-snug tracking-normal' },
  h4: { element: 'h4', className: 'text-2xl font-semibold leading-snug tracking-normal' },
  h5: { element: 'h5', className: 'text-xl font-medium leading-normal tracking-normal' },
  h6: { element: 'h6', className: 'text-lg font-medium leading-normal tracking-normal' },
  body1: { element: 'p', className: 'text-md font-normal leading-relaxed tracking-normal' },
  body2: { element: 'p', className: 'text-sm font-normal leading-relaxed tracking-normal' },
  caption: { element: 'span', className: 'text-xs font-normal leading-normal tracking-normal' },
  label: { element: 'label', className: 'text-sm font-medium leading-snug tracking-normal' },
  helper: { element: 'span', className: 'text-xs font-normal leading-normal tracking-wide italic' },
};

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className = '',
  color,
  as,
}) => {
  const { element, className: variantClass } = variantMapping[variant];
  const Component = as || element;
  
  return (
    <Component 
      className={`${variantClass} ${className}`}
      style={color ? { color } : undefined}
    >
      {children}
    </Component>
  );
};