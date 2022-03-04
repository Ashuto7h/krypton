import type { FC } from 'react';
import { useState } from 'react';
import { Alert } from './components';
import jss from './jss';
import { GLOBAL_COLORS } from './themes/colors';

const { bg, br } = jss;

const App: FC = () => {
  const [bgColor, setBGColor] = useState<string | undefined>();
  const [borderRadius, setBorderRadius] = useState<
    number | { tl?: number; tr?: number; bl?: number; br?: number } | undefined
  >();
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
            <option key={color} value={GLOBAL_COLORS[color]}>
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
        />
      </div>

      <Alert clsx={[bg(bgColor), br(borderRadius)]} open>
        This is an Alert
      </Alert>
    </>
  );
};
export default App;
