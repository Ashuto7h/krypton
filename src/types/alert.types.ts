import type { CSSProperties } from 'react';
import type { TThemeName } from './theme';

export interface IAlertProps {
  bgColor?: string;
  open: boolean;
  timer?: number;
  className?: string;
  transition?: string;
  closeAble?: boolean;
  position?: 'bottom' | 'top';
  style?: CSSProperties;
  theme?: TThemeName;
}
