import type { FC } from 'react';
import { invalidThemeException } from '../exceptions';
import { alertStyles } from '../styles/alert';
import { THEMES } from '../themes';
import type { IAlertProps } from '../types/alert.types';
import type { TTheme } from '../types/theme.types';
import { clsxMaker } from '../utils';
import { Button } from './Button';

/**
 * @component
 * @example
 * <Alert open>
 *  This is Alert Box
 * </Alert>
 * @param closeAble if true close icon will appear
 * @param closeIcon custom close icon to render
 * @param clsx classList for use instead of className
 * @param open open/close state of alert
 * @param position fixed position of Alert on screen
 * @param style css styles to be applied on root element
 * @param theme describes theme of alert
 * @param timer time after which Alert disappears
 * @param transition the transition showed by component on mount and unmount
 * @returns Alert component
 *
 */
export const Alert: FC<IAlertProps> = ({
  children,
  className,
  closeAble,
  closeIcon,
  clsx,
  open,
  position,
  style,
  theme,
  timer,
  transition
}) => {
  let themeStyles = {} as TTheme;
  const classes = alertStyles({ theme: { open, themeStyles } });

  if (theme && !Object.keys(THEMES).includes(theme)) {
    invalidThemeException(theme);
    themeStyles = THEMES.primary;
  } else {
    themeStyles = THEMES[theme ?? 'primary'];
  }

  return (
    <div className={clsxMaker(classes.root, clsxMaker(clsx), className)} role='alert' style={style}>
      {children}
      {closeAble && <span className={classes.closeBtn}>{closeIcon ?? <Button>x</Button>}</span>}
    </div>
  );
};

Alert.defaultProps = {
  closeAble: false,
  clsx: [],
  open: false,
  position: 'top',
  style: {},
  timer: 0,
  transition: 'none'
};
