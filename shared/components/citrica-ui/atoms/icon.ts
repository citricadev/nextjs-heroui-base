import React from 'react';
import { 
  Home, 
  ClipboardCheck, 
  Settings, 
  Users, 
  Bell, 
  ShieldCheck,
  SignalZero,
  ChevronLeft,
  LucideProps 
} from "lucide-react";

type IconType = 
  'Home' | 
  'ClipboardCheck' | 
  'Settings' |
  'Users' | 
  'Bell' |
  'ChevronLeft' |
  'ShieldCheck';

interface IconProps extends LucideProps {
  name: string;
  size?: number;  
}
const DEFAULT_SIZE = 20;

const Icon = ({ name, size= DEFAULT_SIZE }: IconProps): JSX.Element => {
  const getIcon = () => {
    switch (name) {
      case 'Home':
        return Home;
      case 'ClipboardCheck':
        return ClipboardCheck;
      case 'Settings':
        return Settings;
      case 'Users':
        return Users;
      case 'Bell':
        return Bell;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'ChevronLeft':
        return ChevronLeft;
      default:
        return SignalZero;
    }
  };

  const IconComponent = getIcon();
  return React.createElement(IconComponent, { size });
};

export default Icon;