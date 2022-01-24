import { invalidColor } from './errCodes';

const errorHandler = (error: Error) => {
  // eslint-disable-next-line no-console
  console.error(error);
};
export const InvalidColorException = (colorStr: string) => {
  const error = new Error(invalidColor(colorStr));
  errorHandler(error);
};
