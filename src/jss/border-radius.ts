import { createUseStyles } from 'react-jss';
import type { TCSSUnit } from './jss.types';
import { getUnits } from './utils';

interface IBRParams {
  radius?:
    | number
    | { tl?: number | string; tr?: number | string; bl?: number | string; br?: number | string };
  unit?: TCSSUnit;
}

export const br = (radius: IBRParams['radius'], unit: IBRParams['unit'] = 'px'): string => {
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
  return brStyle({ theme: { radius, unit } })['Kr-br'];
};
export const borderRadius = br;
