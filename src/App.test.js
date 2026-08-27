import { render, screen } from '@testing-library/react';
import App from './App';

test('renders lesson navigation', () => {
  render(<App />);
  const heading = screen.getByText(/react 스터디/i);
  expect(heading).toBeInTheDocument();
});
