import type { FC } from 'react';
import { clsxMaker } from '../../utils';
import { Button } from '../Button/Button';
import { useAlert } from './alert.hooks';
import { alertStyles } from './alert.styles';
import type { IAlertProps } from './alert.types';

/**
 * TODO:
 *  2. write unit tests.
 *  3. doc it.
 */
/**
 * @Features - complete
 *  10. transition - fade in out | swipe down | swipe up | no transition
 *  11. jss - *bgColor | *borderRadius | fontColor,
 * *1. className - any class provided will override current config
 * *2. closeAble - if true, a closeButton appears which close the Alert
 * *3. closeIcon - renders custom close icon if provided. it only works when closeAble is true
 * *4. clsx - util prop to provide an array of classNames
 * *5. open - state of the alert - true: open, false: closeAble
 * *6. position - bottom | top
 * *7. all props that can be provided to root element.
 * *8. theme - a theme from one of different standard themes
 * *9. timer - a time after which it should close automatically

 * @Features - headless
 *  1. completely basic, unstyled
 *  2. all functions up except below ones -
 */
/**
 * @component
 * @example
 * <Alert open>
 *  This is Alert Box
 * </Alert>
 *
 * The alert component can be used to display contextual user messages.
 */
export const Alert: FC<IAlertProps> = ({
  appearAnimation,
  children,
  className,
  closeAble,
  closeIcon,
  clsx,
  disappearAnimation,
  open,
  position,
  theme,
  timer,
  ...rootProps
}) => {
  const { showAlert, themeStyles, isClosing } = useAlert(
    open ?? true,
    theme,
    timer,
    disappearAnimation?.duration
  );
  const classes = alertStyles({
    theme: {
      open: showAlert,
      position,
      themeStyles
    }
  });
  return (
    <div
      className={clsxMaker(
        classes.root,
        clsxMaker(clsx),
        isClosing ? disappearAnimation?.animation : appearAnimation,
        className
      )}
      role='alert'
      {...rootProps}
    >
      {children}
      {(closeAble && <span className={classes.closeBtn}>{closeIcon ?? <Button>x</Button>}</span>) ||
        null}
    </div>
  );
};

Alert.defaultProps = {
  closeAble: false,
  clsx: [],
  open: true,
  theme: 'primary',
  timer: 0
};
