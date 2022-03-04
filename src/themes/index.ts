import { MapValues } from '../react-app-env';
import { primary } from './colors';

export const THEMES = MapValues({
  primary: { ...primary }
});

export const themeKeyList: Array<keyof typeof THEMES> = Object.keys(THEMES);
