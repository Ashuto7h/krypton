import type { IThemeStyles } from '../types/theme';
import { MapValues } from '../types';

export const danger: IThemeStyles = {
  background: '#c4183c',
  color: '#fad7de'
};
export const dark: IThemeStyles = { background: '#212529', color: '#959faa' };
export const info: IThemeStyles = { background: '#00b8d8', color: '#cef8ff' };
export const light: IThemeStyles = { background: '#e9ecef', color: '#212529' };
export const primary: IThemeStyles = { background: '#007bff', color: '#f5faff' };
export const secondary: IThemeStyles = {
  background: '#5a6169',
  color: '#d9dcdf'
};
export const success: IThemeStyles = { background: '#17c671', color: '#d7fae9' };
export const warning: IThemeStyles = { background: '#ffb400', color: '#fffcf5' };
export const GLOBAL_COLORS = MapValues({
  black: '#000',
  blue: '#007bff',
  cyan: '#17a2b8',
  danger: '#dc3545',
  dark: '#343a40',
  gray: '#6c757d',
  grayDark: '#343a40',
  green: '#28a745',
  indigo: '#6610f2',
  info: '#17a2b8',
  light: '#f8f9fa',
  orange: '#fd7e14',
  pink: '#e83e8c',
  primary: '#007bff',
  purple: '#6f42c1',
  red: '#dc3545',
  secondary: '#6c757d',
  success: '#28a745',
  teal: '#20c997',
  warning: '#ffc107',
  white: '#fff',
  yellow: '#ffc107'
});
export const isCSSColor = (colorStr: string) => {
  const s = new Option().style;
  s.color = colorStr;
  return s.color !== '';
};
