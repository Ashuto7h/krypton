import { createUseStyles } from 'react-jss';
import { GLOBAL_COLORS, primary } from '../../themes/colors';
import type { IAlertStyles } from './alert.types';

export const alertStyles = createUseStyles(({ themeStyles, open, position }: IAlertStyles) => ({
  closeBtn: {
    '&:hover': {
      color: GLOBAL_COLORS.black,
      opacity: 0.75
    },
    backgroundColor: 'transparent',
    border: 0,
    color: 'inherit',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: '1.3rem',
    fontWeight: '500',
    lineHeight: 1,
    opacity: 0.5,
    padding: '0.65rem 1.5rem',
    position: 'absolute',
    right: 0,
    top: 0
  },
  root: {
    backgroundColor: themeStyles?.background ?? primary.background,
    bottom: position === 'bottom' ? 0 : '',
    color: themeStyles?.color ?? primary.color,
    display: open ? 'block' : 'none',
    left: 0,
    marginBottom: position === 'bottom' ? 0 : '1rem',
    padding: '0.75rem 1.25rem',
    position: position ? 'fixed' : 'relative',
    right: 0,
    top: position === 'top' ? 0 : ''
  }
}));
