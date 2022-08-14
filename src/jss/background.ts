import { createUseStyles } from 'react-jss';

export const bg = (color?: string) => {
  const bgStyle = createUseStyles(({ color }: { color?: string }) => ({
    'Kr-bg': { background: color }
  }));
  return bgStyle({ theme: { color } })['Kr-bg'];
};

export const background = bg;
