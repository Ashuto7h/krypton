import type { FC } from 'react';
import { useState } from 'react';
import { Alert } from './components';
import { GLOBAL_COLORS } from './themes/colors';

const App: FC = () => {
  const [bgColor, setBGColor] = useState<string>('');

  return (
    <>
      <select
        name='bgcolor'
        onChange={(e) => {
          setBGColor(e.target.value);
        }}
      >
        {Object.keys(GLOBAL_COLORS).map((color) => (
          <option key={color} value={GLOBAL_COLORS[color]}>
            {color}
          </option>
        ))}
      </select>

      <Alert bgColor={bgColor} open={false}>
        This is an Alert
      </Alert>
    </>
  );
};
export default App;
