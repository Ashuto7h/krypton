import { useTheme } from 'react-jss';
import Alert from './components/Alert';
import { COLORS, THEMES } from './themes';

const App = () => (
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
