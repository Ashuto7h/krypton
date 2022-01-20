import type { CSSProperties } from 'react';

export interface IAlertProps {
  bgColor: string;
  open: boolean;
  timer: number;
  className: string;
  transition: string;
  closeAble: boolean;
  position: 'bottom' | 'top';
  style: CSSProperties;
}
