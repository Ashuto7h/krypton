import { createUseStyles } from 'react-jss';

export const color = (color?: string): string => {
  const bgStyle = createUseStyles(({ color }: { color?: string }) => ({
    'Kr-color': { color }
  }));
  return bgStyle({ theme: { color } })['Kr-color'] as string;
};

export const fontColor = color;
