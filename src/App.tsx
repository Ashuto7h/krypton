import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { Alert } from './components';
import jss from './jss';
import { GLOBAL_COLORS } from './themes/colors';
import type { TGlobalColorKeys } from './themes/themes.types';

const { bg, br } = jss;

/**
 * Todo:
 * 1. Select themes
 * 2. Show Code Box
 * 4. Select Font color
 * 5. checkbox closeable
 * 6. Checkbox open
 * 7. Input timer
 * 8. DropDown Position
 * 3. Select Transitions
 */
const App: FC = () => {
  const [bgColor, setBGColor] = useState<string | undefined>();
  const [borderRadius, setBorderRadius] = useState<
    number | { tl?: number; tr?: number; bl?: number; br?: number } | undefined
  >(0);
  const DEFAULT_BORDER_TYPE = 'ALL';
  const [borderType, setBorderType] = useState(DEFAULT_BORDER_TYPE);
  const singleBorderOnChange =
    (type: 'bl' | 'br' | 'tl' | 'tr') =>
    ({ target: { value } }: { target: { value: string } }) => {
      if (typeof borderRadius !== 'number' && Number(value) !== borderRadius?.[type]) {
        setBorderRadius({
          ...borderRadius,
          [type]: value
        });
      }
    };
  useEffect(() => {
    if (borderType === DEFAULT_BORDER_TYPE) {
      setBorderRadius({ bl: 0, br: 0, tl: 0, tr: 0 });
    } else {
      setBorderRadius(0);
    }
  }, [borderType]);
  return (
    <>
      <div>
        bgColor:{' '}
        <select
          name='bgcolor'
          onChange={(e) => {
            setBGColor(e.target.value);
          }}
        >
          <option>Select</option>

          {Object.keys(GLOBAL_COLORS).map((color) => (
            <option key={color} value={GLOBAL_COLORS[color as TGlobalColorKeys]}>
              {color}
            </option>
          ))}
        </select>
        <input
          onChange={({ target: { value } }) => {
            if (value !== bgColor) {
              setBGColor(value);
            }
          }}
          type='text'
          value={bgColor ?? ''}
        />{' '}
        <div>
          Apply Radius to All Borders :{' '}
          <input
            name={DEFAULT_BORDER_TYPE}
            onClick={() => {
              setBorderType(borderType === DEFAULT_BORDER_TYPE ? '' : DEFAULT_BORDER_TYPE);
            }}
            type='checkbox'
            value={borderType}
          />
          {typeof borderRadius === 'number' && (
            <>
              Border Radius:{' '}
              <input
                onChange={({ target: { value } }) => {
                  if (Number(value) !== borderRadius) {
                    setBorderRadius(Number(value));
                  }
                }}
                type='number'
                value={borderRadius?.toString() ?? ''}
              />
            </>
          )}{' '}
        </div>
        {typeof borderRadius !== 'number' && (
          <>
            {' '}
            <div>
              Border Top Left Radius:{' '}
              <input
                onChange={singleBorderOnChange('tl')}
                type='number'
                value={borderRadius?.tl?.toString() ?? ''}
              />{' '}
              Border Top Right Radius:
              <input
                onChange={singleBorderOnChange('tr')}
                type='number'
                value={borderRadius?.tr?.toString() ?? ''}
              />{' '}
            </div>
            <div>
              Border Bottom Left Radius:{}
              <input
                onChange={singleBorderOnChange('bl')}
                type='number'
                value={borderRadius?.bl?.toString() ?? ''}
              />{' '}
              Border Bottom Right Radius:
              <input
                onChange={singleBorderOnChange('br')}
                type='number'
                value={borderRadius?.br?.toString() ?? ''}
              />
            </div>
          </>
        )}
      </div>

      <Alert clsx={[bg(bgColor), br(borderRadius)]} open theme='danger'>
        This is an Alert
      </Alert>
    </>
  );
};
export default App;
