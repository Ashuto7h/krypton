import { createUseStyles } from 'react-jss';
import type { TCSSUnit } from './jss.types';

const getUnits = (measure?: number | string, unit: TCSSUnit = 'px') => {
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

interface IBRParams {
  radius?:
    | number
    | { tl?: number | string; tr?: number | string; bl?: number | string; br?: number | string };
  unit?: TCSSUnit;
}

const br = (radius: IBRParams['radius'], unit: IBRParams['unit'] = 'px'): string => {
  const brStyle = createUseStyles(({ radius, unit }: IBRParams) => ({
    'Kr-br': () => {
      if (typeof radius === 'number') {
        return { borderRadius: getUnits(radius, unit) };
      } else if (typeof radius === 'string') {
        return { borderRadius: radius };
      } else {
        const { br, bl, tr, tl } = radius ?? {};
        return {
          borderBottomLeftRadius: getUnits(bl, unit),
          borderBottomRightRadius: getUnits(br, unit),
          borderTopLeftRadius: getUnits(tl, unit),
          borderTopRightRadius: getUnits(tr, unit)
        };
      }
    }
  }));
  const className = brStyle({ theme: { radius, unit } })['Kr-br'];
  return className;
};

const jss = {
  background: bg,
  bg,
  borderRadius: br,
  br
};
export default jss;
