import type { THEMES } from '.';
import type { GLOBAL_COLORS } from './colors';

export type TTheme = typeof THEMES['primary'];
export type TGlobalColorKeys = keyof typeof GLOBAL_COLORS;
