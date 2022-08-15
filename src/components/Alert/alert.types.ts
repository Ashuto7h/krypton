import type { HTMLAttributes, ReactNode } from 'react';
import type { IFCbaseProps } from '../../global.types';
import type { TTheme } from '../../themes/themes.types';

export interface IAlertProps extends IFCbaseProps, HTMLAttributes<HTMLDivElement> {
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
  /** Alert transition when it appears
   *
   * It only supports inbuild animation class functions
   * @example
   * import { animateSlide } from 'krypton/jss';
   * appearTransition = animateSlide('top', 25, 500, 0);
   */
  appearAnimation?: string;
  /** if true, provides a button to close alert
   * @default false
   */
  closeAble?: boolean;
  /** absolute positon of the Alert  */
  position?: 'bottom' | 'top';
  /** custom closeIcon to be rendered for close button */
  closeIcon?: ReactNode;
  /** Alert transition when it disappears
   *
   * @example
   * import { animateSlide } from 'krypton/jss';
   * disappearTransition = { animation : animateSlide('top', 25, 500, 0), duration: 500 ;
   */
  disappearAnimation?: {
    /**
     * Animation only supports inbuild animation class functions
     * @example
     * import { animateSlide } from 'krypton/jss';
     * animation : animateSlide('top', 25, 500, 0)
     */
    animation: string;
    /**
     * Duration is required to delay unmount (in ms).
     *
     * It should be same as the duration provided to animation.
     */
    duration: number;
  };
}

export interface IAlertStyles {
  themeStyles: TTheme;
  open: boolean;
  position?: IAlertProps['position'];
}
