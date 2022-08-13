import type { FC } from 'react';
import { invalidThemeException } from '../../exceptions';
import { THEMES, themeKeyList } from '../../themes';
import { clsxMaker } from '../../utils';
import { Button } from '../Button/Button';
import { useAlert } from './alert.hooks';
import { alertStyles } from './alert.styles';
import type { IAlertProps } from './alert.types';

/**
 * TODO:
 * *1. create all themes
 * 2. write unit tests. get ideas for integration tests
 * 3. doc it.
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
  children,
  className,
  closeAble,
  closeIcon,
  clsx,
  open,
  position,
  theme,
  timer,
  transition: _transition,
  ...rootProps
}) => {
  if (theme && !themeKeyList.includes(theme)) {
    invalidThemeException(theme);
  }
  const themeStyles = THEMES[theme ?? 'primary'] || THEMES.primary;
  const { showAlert } = useAlert(open ?? true, timer);
  const classes = alertStyles({ theme: { open: showAlert, position, themeStyles } });

  return (
    <div
      className={clsxMaker(classes.root, clsxMaker(clsx), className)}
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
  style: {},
  theme: 'primary',
  timer: 0,
  transition: 'none'
};
