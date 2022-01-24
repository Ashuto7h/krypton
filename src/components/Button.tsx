import type { FC } from 'react';
import type { IButtonProps } from '../types/button.types';

export const Button: FC<IButtonProps> = ({ type, className, children }) => (
  <button className={className} type={type ?? 'button'}>
    {children}
  </button>
);
