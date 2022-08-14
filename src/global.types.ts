import type { ClassValue } from 'clsx';
import type { ReactNode } from 'react';
import type { TThemeKeys } from './themes/themes.types';

export function MapValues<T extends object>(obj: T): { [K in keyof T]: T[K] } {
  return obj;
}

export interface IFCbaseProps {
  /** class name string applied to component root element */
  className?: string;
  /** The component theme type */
  theme?: TThemeKeys;
  /** An array of classvalues to calculate clsx */
  clsx?: Array<ClassValue>;
  /** The child nodes */
  children?: ReactNode;
}
