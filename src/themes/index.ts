import type { TThemeName, TThemeType } from '../types/theme';
import primary from './primary';

export { COLORS } from './colors';

export const THEMES: Record<TThemeName, TThemeType> = {
  primary
};
