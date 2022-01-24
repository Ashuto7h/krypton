import clsx from 'clsx';
import type { FC } from 'react';
import { alertStyles } from '../styles/alert';
import { THEMES } from '../themes';
import type { IAlertProps } from '../types/alert.types';
import type { IThemeStyles } from '../types/theme.types';
import { Button } from './Button';

export const Alert: FC<IAlertProps> = ({
  children,
  className,
  closeAble,
  open,
  position,
  style,
  theme,
  timer,
  transition
}) => {
  let themeStyles = {} as IThemeStyles;
  const classes = alertStyles({ theme: { themeStyles } });

  if (theme && !Object.keys(THEMES).includes(theme)) {
    console.error(new Error('Unknown theme. Please provide one of these : primary'));
    themeStyles = THEMES.primary;
  } else {
    themeStyles = THEMES[theme ?? 'primary'];
  }

  return (
    <div className={clsx(classes.root, className)} role='alert'>
      {children}

      <Button className={classes.closeBtn}>x</Button>
    </div>
  );
};

Alert.defaultProps = {
  closeAble: false,
  open: false,
  position: 'top',
  timer: 0,
  transition: 'none'
};
/*

features -
open : gives info about open or closed
timer : will appear only for the time given in ms
transition : type of transition -none | fade | fade in | fade-in-up | fade-in-down|  left | right
position : top | bottom
style : styles that can be applied to root div element
 */
