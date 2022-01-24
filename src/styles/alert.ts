import { createUseStyles } from 'react-jss';
import { GLOBAL_COLORS, isCSSColor, primary } from '../themes/colors';
import type { IAlertStyles } from '../types/styles.types';
import { InvalidColorException } from '../exceptions';

export const alertStyles = createUseStyles(({ bgColor, themeStyles }: IAlertStyles) => ({
  closeBtn: {
    backgroundColor: 'transparent',
    border: 0,
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: '1.3rem',
    '&:hover': {
      color: GLOBAL_COLORS.black,
      opacity: 0.75
    },
    padding: '0.65rem 1.5rem',
    color: 'inherit',
    right: 0,
    fontWeight: '500',
    top: 0,
    lineHeight: 1,
    opacity: 0.5,
    position: 'absolute'
  },
  root: {
    background: () => {
      if (bgColor && !isCSSColor(bgColor)) {
        InvalidColorException(bgColor);
        return themeStyles?.background ?? primary.background;
      }
      return bgColor ?? themeStyles?.background ?? primary.background;
    },
    borderRadius: 0,
    color: themeStyles?.color ?? primary.color,
    marginBottom: '1rem',
    padding: '0.75rem 1.25rem'
  }
}));
