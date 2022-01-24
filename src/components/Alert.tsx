import type { FC } from 'react';
import clsx from 'clsx';
import { InvalidColorException } from '../exceptions';
import { alertStyles } from '../styles/alert';
import { THEMES } from '../themes';
import { isCSSColor } from '../themes/colors';
import type { IAlertProps } from '../types/alert.types';
import type { IThemeStyles } from '../types/theme';
import { Button } from './Button';

export const Alert: FC<IAlertProps> = ({
  bgColor,
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
  const classes = alertStyles({ theme: { bgColor, themeStyles } });

  if (theme && !Object.keys(THEMES).includes(theme)) {
    throw new Error('Unknown theme. Please provide one of these : primary');
    themeStyles = THEMES.primary;
  } else {
    themeStyles = THEMES[theme ?? 'primary'];
  }
  console.log(clsx(classes.root, className));
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
