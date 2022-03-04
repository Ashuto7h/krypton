import type { FC } from 'react';
import React from 'react';
import { invalidThemeException } from '../../exceptions';
import { THEMES, themeKeyList } from '../../themes';
import type { TTheme } from '../../themes/themes.types';
import { clsxMaker } from '../../utils';
import { Button } from '../Button/Button';
import { useAlert } from './alert.hooks';
import { alertStyles } from './alert.styles';
import type { IAlertProps } from './alert.types';
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
  headless,
  open,
  position,
  style,
  theme,
  timer,
  transition
}) => {
  let themeStyles = {} as TTheme;
  const { showAlert } = useAlert(open ?? true, timer);
  const classes = alertStyles({ theme: { open: showAlert, position, themeStyles } });

  if (theme && themeKeyList.includes(theme)) {
    invalidThemeException(theme);
    themeStyles = THEMES.primary;
  } else {
    themeStyles = THEMES[theme ?? 'primary'];
  }

  return headless ? (
    <> </>
  ) : (
    <div className={clsxMaker(classes.root, clsxMaker(clsx), className)} role='alert' style={style}>
      {children}
      {closeAble && <span className={classes.closeBtn}>{closeIcon ?? <Button>x</Button>}</span>}
    </div>
  );
};

Alert.defaultProps = {
  closeAble: false,
  clsx: [],
  headless: false,
  open: true,
  style: {},
  theme: 'primary',
  timer: 0,
  transition: 'none'
};
