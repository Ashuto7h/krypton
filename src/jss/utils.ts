import type { TCSSUnit } from './jss.types';

export const getUnits = (measure?: number | string, unit: TCSSUnit = 'px') => {
  if (measure !== undefined) {
    return `${measure}${unit}`;
  }
  return '';
};
