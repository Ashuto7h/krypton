/// <reference types="react-scripts" />
import type { ClassValue } from 'clsx';
import type { CSSProperties, ReactNode } from 'react';
import type { THEMES } from './themes';

export function MapValues<T extends object>(
  obj: T
): Record<string, any> & { [K in keyof T]: T[K] } {
  return obj;
}

export interface IFCbaseProps {
  /** class name string applied to component root element */
  className?: string;
  /** css style object for inline styling the root element */
  style?: CSSProperties;
  /** The component theme type */
  theme?: keyof typeof THEMES;
  /** An array of classvalues to calculate clsx */
  clsx?: Array<ClassValue>;
  /** Weather to return a headless component or a headful one */
  headless?: boolean;
  /** The child nodes */
  children?: ReactNode;
}
