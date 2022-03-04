import type { ReactNode } from 'react';
import type { IFCbaseProps } from '../../react-app-env';
import type { TTheme } from '../../themes/themes.types';

export interface IAlertProps extends IFCbaseProps {
  /** controls whether Alert is open or not.
   * @default true
   */
  open?: boolean;
  /**
   * number of seconds in ms after which the Alert will disappear
   *
   * if 0, the alert will never dissapear
   * @default 0
   */
  timer?: number;
  /** transition type for Alert
   * @default 'none'
   */
  transition?: 'fade' | 'none';
  /** if true, provides a button to close alert
   * @default false
   */
  closeAble?: boolean;
  /** absolute positon of the Alert
   * @default undefined
   */
  position?: 'bottom' | 'top';
  /** custom closeIcon to be rendered for close button */
  closeIcon?: ReactNode;
}

export interface IAlertStyles {
  themeStyles: TTheme;
  open: boolean;
  position: IAlertProps['position'];
}
