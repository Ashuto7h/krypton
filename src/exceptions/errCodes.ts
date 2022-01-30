import { THEMES } from '../themes';

const invalidColor = (color: string) => `Invalid css color string provided : "${color}"`;
const invalidTheme = (theme: string) =>
  `Invalid theme prop provided : "${theme}".
  Please provide any of these : 
  "${Object.keys(THEMES).join('", "')}"`;
export { invalidColor, invalidTheme };
