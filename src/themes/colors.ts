export const COLORS = {
  primaryBackground: '#007bff',
  primaryForeground: '#f5faff',
  example: 'simply making new commit '
};

export const isCSSColor = (colorStr: string) => {
  const s = new Option().style;
  s.color = colorStr;
  return s.color !== '';
};
