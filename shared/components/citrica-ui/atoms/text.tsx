import React from 'react';

interface TextProps {
  children: React.ReactNode;
  variant: 'display' | 'heading' | 'title' | 'subtitle' | 'body' | 'label';
  color?: string;
}

const DEFAULT_COLOR = '#222';

const variantStyles: { [key in TextProps['variant']]: React.CSSProperties } = {
  display: {
    fontSize: '48px',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  heading: {
    fontSize: '36px',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  title: {
    fontSize: '24px',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  subtitle: {
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  body: {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.2,
  },
  label: {
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: 1.2,
  },
};

const Text: React.FC<TextProps> = ({ children, variant, color = DEFAULT_COLOR }) => {
  return <span style={{ ...variantStyles[variant], color: color }}>{children}</span>;
};

export default Text;