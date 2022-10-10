import { render, screen } from '@testing-library/react';
import { TEST_ID } from '../../testId';
import { Alert } from '../Alert';

describe('alert component', () => {
  it('should render alert by default if open is not provided', () => {
    render(<Alert />);
    expect(screen.getByTestId(TEST_ID.ALERT)).toBeDefined();
  });
});
