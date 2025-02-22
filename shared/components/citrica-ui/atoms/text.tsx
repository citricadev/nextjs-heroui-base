import React from 'react';

interface TextProps {
  children: React.ReactNode;
  variant: 'display' | 'heading' | 'title' | 'subtitle' | 'body' | 'label';
  weight?: 'light' | 'normal' | 'bold';
  color?: string;
}

const Text: React.FC<TextProps> = ({ children, variant, color, weight = 'normal' }) => {

  const variantStyles = {
    textColor: {
      color: color ? color: 'auto',
    },
  };

  switch (weight) {
    case 'light':
      var classWeight = ` text-${variant}-light`;
      break;
    case 'normal':    
      var classWeight = '';
      break;
    case 'bold':
      var classWeight = ` text-${variant}-bold`;
      break;
    default: 
      var classWeight = '';
      break;
  } 
  return (
    <span 
      className={`text-${variant}${classWeight} ${!color ? 'text-default-color': ''}`}
      style={variantStyles.textColor}
      >
    {children}
    </span>
  )
};

export default Text;