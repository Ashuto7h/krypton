import { createUseStyles } from 'react-jss';
import { COLORS } from '../themes';
import type { IAlertStyles } from '../types/styles.types';

export const alertStyles = createUseStyles(({ bgColor, themeClasses }: IAlertStyles) => ({
  root: {
    background: bgColor ?? themeClasses?.background ?? COLORS.primaryBackground,
    color: themeClasses?.color ?? COLORS.primaryForeground,
    minHeight: '50px'
  }
}));
