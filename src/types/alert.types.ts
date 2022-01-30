import type { ClassValue } from 'clsx';
import type { CSSProperties, ReactNode } from 'react';
import type { THEMES } from '../themes';

export interface IAlertProps {
  bgColor?: string;
  open: boolean;
  timer?: number;
  className?: string;
  transition?: string;
  closeAble?: boolean;
  position?: 'bottom' | 'top';
  style?: CSSProperties;
  theme?: keyof typeof THEMES;
  clsx?: Array<ClassValue>;
  closeIcon?: ReactNode;
}
