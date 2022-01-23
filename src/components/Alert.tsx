import type { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { COLORS, THEMES } from '../themes';
import type { IAlertProps } from '../types/alert.types';
const Alert: FC<IAlertProps> = ({
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
  if (theme && !Object.keys(THEMES).includes(theme)) {
    throw new Error('Unknown theme. Please provide one of these : primary');
  }
  const themeClasses = THEMES[theme ?? 'primary']();
  const classes = createUseStyles({
    root: {
      background: bgColor ?? themeClasses?.background ?? COLORS.primaryBackground
    }
  });
  return <div className={className}>{children}</div>;
};

Alert.defaultProps = {
  bgColor: 'primary',
  closeAble: false,
  open: false,
  position: 'top',
  timer: 0,
  transition: 'none'
};
/*

features -
bgColor : any css color property
open : gives info about open or closed
timer : will appear only for the time given in ms
transition : type of transition -none | fade | fade in | fade-in-up | fade-in-down|  left | right
position : top | bottom
style : styles that can be applied to root div element
 */

export default Alert;
