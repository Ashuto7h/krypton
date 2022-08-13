import type { ClassValue } from 'clsx';
import type { ReactNode } from 'react';
import type { THEMES } from './themes';

export function MapValues<T extends object>(obj: T): { [K in keyof T]: T[K] } {
  return obj;
}

export interface IFCbaseProps {
  /** class name string applied to component root element */
  className?: string;
  /** The component theme type */
  theme?: keyof typeof THEMES;
  /** An array of classvalues to calculate clsx */
  clsx?: Array<ClassValue>;
  /** The child nodes */
  children?: ReactNode;
}
