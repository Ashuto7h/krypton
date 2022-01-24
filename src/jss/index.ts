import { createUseStyles } from 'react-jss';
import type { TCSSUnit } from '../types/jss.types';

const getUnits = (measure: number | string | undefined, unit: TCSSUnit = 'px') => {
  if (measure !== undefined) {
    return `${measure}${unit}`;
  }
  return '';
};

const bg = (color?: string) => {
  const bgStyle = createUseStyles(({ color }: { color?: string }) => ({
    'Kr-bg': { background: color }
  }));
  const className = bgStyle({ theme: { color } })['Kr-bg'];
  return className;
};

const br = (
  radius: number | { tl?: number; tr?: number; bl?: number; br?: number },
  unit: TCSSUnit = 'px'
): string => {
  const brStyle = createUseStyles({
    'Kr-br': ({
      radius,
      unit
    }: {
      radius?: number | { tl?: number; tr?: number; bl?: number; br?: number };
      unit?: TCSSUnit;
    }) => {
      if (typeof radius === 'number') {
        return { borderRadius: radius };
      } else {
        const { br, bl, tr, tl } = radius ?? {};
        return {
          borderRadius: {
            bottomLeft: getUnits(bl, unit),
            bottomRight: getUnits(br, unit),
            topLeft: getUnits(tl, unit),
            topRight: getUnits(tr, unit)
          }
        };
      }
    }
  });
  const className = brStyle({ theme: { radius, unit } })['Kr-br'];
  return className;
};
const jss = { bg, br };
export default jss;
