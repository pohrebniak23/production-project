import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('Test for render', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Test for class', () => {
    render(<Button theme="clear">Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('clear');
    screen.debug();
  });
});
