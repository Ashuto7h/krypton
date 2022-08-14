import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { Alert } from './components';
import { bg, br } from './jss';
import { THEMES } from './themes';
import { GLOBAL_COLORS } from './themes/colors';
import type { TGlobalColorKeys, TThemeKeys } from './themes/themes.types';
/*
 * Todo:
 * 2. Show Code Box
 * 4. Select Font color
 * 5. checkbox closeable
 * 6. Checkbox open
 * 7. Input timer
 * 8. DropDown Position
 * 3. Select Transitions
 */
const App: FC = () => {
  const OPEN_STATE = 'open';
  const [isOpen, setIsOpen] = useState<string>();
  const [bgColor, setBGColor] = useState<string | undefined>();
  const DEFAULT_BORDER_TYPE = 'ALL';
  const [borderType, setBorderType] = useState(DEFAULT_BORDER_TYPE);
  const [theme, setTheme] = useState<TThemeKeys | undefined>('primary');
  const [borderRadius, setBorderRadius] = useState<
    number | { tl?: number; tr?: number; bl?: number; br?: number } | undefined
  >(0);

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
      setBorderRadius(0);
    } else {
      setBorderRadius({ bl: 0, br: 0, tl: 0, tr: 0 });
    }
  }, [borderType]);

  useEffect(() => {
    if (theme && bgColor) setTheme(undefined);
  }, [bgColor]);

  useEffect(() => {
    if (bgColor && theme) setBGColor(undefined);
  }, [theme]);

  return (
    <>
      <div>
        Show alert:{' '}
        <input
          checked={isOpen === OPEN_STATE}
          name={OPEN_STATE}
          onClick={() => {
            setIsOpen(isOpen === OPEN_STATE ? '' : OPEN_STATE);
          }}
          type='checkbox'
        />
      </div>
      {isOpen ? (
        <>
          <div>
            Theme:{' '}
            <select
              name='theme'
              onChange={({ target: { value } }) => {
                setTheme(value as TThemeKeys);
              }}
              value={theme ?? ''}
            >
              <option value=''>Select</option>
              {Object.keys(THEMES).map((theme) => (
                <option key={theme} value={theme}>
                  {theme}
                </option>
              ))}
            </select>
          </div>
          <div>
            bgColor:{' '}
            <select
              name='bgColor'
              onChange={({ target: { value } }) => {
                setBGColor(value);
              }}
              value={bgColor ?? ''}
            >
              <option value=''>Select</option>
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
                checked={borderType === DEFAULT_BORDER_TYPE}
                name={DEFAULT_BORDER_TYPE}
                onClick={() => {
                  setBorderType(borderType === DEFAULT_BORDER_TYPE ? '' : DEFAULT_BORDER_TYPE);
                }}
                type='checkbox'
              />
              {typeof borderRadius === 'number' && (
                <>
                  Border Radius:{' '}
                  <input
                    min={0}
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
                    min={0}
                    onChange={singleBorderOnChange('tl')}
                    type='number'
                    value={borderRadius?.tl?.toString() ?? ''}
                  />{' '}
                  Border Top Right Radius:
                  <input
                    min={0}
                    onChange={singleBorderOnChange('tr')}
                    type='number'
                    value={borderRadius?.tr?.toString() ?? ''}
                  />{' '}
                </div>
                <div>
                  Border Bottom Left Radius:{}
                  <input
                    min={0}
                    onChange={singleBorderOnChange('bl')}
                    type='number'
                    value={borderRadius?.bl?.toString() ?? ''}
                  />{' '}
                  Border Bottom Right Radius:
                  <input
                    min={0}
                    onChange={singleBorderOnChange('br')}
                    type='number'
                    value={borderRadius?.br?.toString() ?? ''}
                  />
                </div>
              </>
            )}
          </div>
        </>
      ) : null}
      <Alert clsx={[bg(bgColor), br(borderRadius)]} open={isOpen === OPEN_STATE} theme={theme}>
        This is an Alert
      </Alert>
    </>
  );
};
export default App;
