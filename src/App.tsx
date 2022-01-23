import type { FC } from 'react';
import { Alert } from './components';
import { COLORS } from './themes';

const App: FC = () => (
  <Alert
    bgColor={COLORS.primaryBackground}
    className=''
    closeAble
    open
    position='top'
    style={{}}
    theme='primary'
    timer={0}
    transition='none'
  >
    This is an Alert
  </Alert>
);
export default App;
