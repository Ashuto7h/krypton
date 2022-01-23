import { invalidColor } from './errCodes';

export const InvalidColorException = (colorStr: string) => {
  const error = new Error(invalidColor(colorStr));
  return error;
};
