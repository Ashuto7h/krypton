import type { CSSProperties } from 'react';
import { createUseStyles } from 'react-jss';
import { getUnits } from './utils';

type TFrom = 'bottom' | 'left' | 'right' | 'top';
interface IAnimateSlideParams {
  from: TFrom;
  /**
   * @default 25
   */
  length: number;
  /**
   * Animation duration (in ms)
   * @default 500
   */
  duration: number;
  /** Animation delay (in seconds)
   * @default 0
   */
  delay: number;

  /**
   * Animation direction
   */
  direction: CSSProperties['animationDirection'];
}

/**
 *
 * @param  {string} from - `"top"`` - Direction of slide
 * @param length - `30` - Length of slide (in px)
 * @param duration - `500` - Animation duration (in ms)
 * @param delay - `0` - Animation delay (in seconds)
 * @param direction - `"normal"` - Animation direction
 * @returns {string} Generated classname for slide animation
 */
export const slide = (
  from: TFrom = 'top',
  length = 30,
  duration = 500,
  delay = 0,
  direction: CSSProperties['animationDirection'] = 'normal'
) => {
  const slideStyle = createUseStyles(
    ({ from, length, duration, delay, direction }: IAnimateSlideParams) => {
      const getSlideKeyframes = () => {
        if (from === 'right') {
          return { from: { left: getUnits(length), opacity: 0 }, to: { left: 0, opacity: 1 } };
        } else {
          return {
            from: { [from]: getUnits(-length), opacity: 0 },
            to: { [from]: 0, opacity: 1 }
          };
        }
      };
      return {
        '@keyframes slide': getSlideKeyframes(),
        'Kr-slide': () => ({
          animationDelay: delay,
          animationDirection: direction || 'normal',
          animationDuration: duration,
          animationName: '$slide'
        })
      };
    }
  );
  return slideStyle({ theme: { delay, direction, duration, from, length } })['Kr-slide'];
};

/**
 *
 * @param  {string} from - `"top"`` - Direction of slide
 * @param length - `30` - Length of slide (in px)
 * @param duration - `500` - Animation duration (in ms)
 * @param delay - `0` - Animation delay (in seconds)
 * @param direction - `"normal"` - Animation direction
 * @returns {string} Generated classname for slide animation
 */
export const animateSlide = slide;
