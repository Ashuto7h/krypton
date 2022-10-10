import { MapValues } from '../global.types';
import {
  GLOBAL_COLORS,
  danger,
  dark,
  info,
  light,
  primary,
  secondary,
  success,
  warning
} from './colors';

export const THEMES = MapValues({
  danger,
  dark,
  info,
  light,
  primary,
  secondary,
  success,
  warning
});

export const themeKeyList = Object.keys(THEMES);
export * from './themes.types';
export { GLOBAL_COLORS };
