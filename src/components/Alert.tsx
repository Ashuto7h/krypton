import type { FC } from 'react';
import type { IAlertProps } from '../types/alertTypes';

const Alert: FC<IAlertProps> = ({
  bgColor,
  open,
  timer,
  className,
  transition,
  closeAble,
  children,
  position,
  style
}) => (
  <div className={className} style={style}>
    {children}
  </div>
);

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
bgColor : any of theme or css colors
open : gives info about open or closed
timer : will appear only for the time given in ms
transition : type of transition -none | fade | fade in | fade-in-up | fade-in-down|  left | right
position : top | bottom
style : styles that can be applied to root div element
 */

export default Alert;
