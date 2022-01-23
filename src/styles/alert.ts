import { createUseStyles } from 'react-jss';
import { COLORS } from '../themes';

export const alertStyles = createUseStyles((theme) => ({
  root: {
    background: COLORS.primaryBackground
  }
}));
