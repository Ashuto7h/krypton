export const COLORS = {
  example: 'simply making new commit ',
  primaryBackground: '#007bff',
  primaryForeground: '#f5faff'
};

export const isCSSColor = (colorStr: string) => {
  const s = new Option().style;
  s.color = colorStr;
  return s.color !== '';
};
