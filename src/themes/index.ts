import type { IThemeStyles, TThemeName } from '../types/theme';
import { primary } from './colors';

export const THEMES: Record<TThemeName, IThemeStyles> = {
  primary: { ...primary }
};
