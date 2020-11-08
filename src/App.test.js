import { render, screen } from '@testing-library/react';
import App from './App';

test('renders content home screen without content', () => {
  render(<App />);
  const linkElement = screen.getByText(/welcome/i);

  
  expect(linkElement).toBeInTheDocument();
  // expect(screen.getByText(/price/i)).toBeNull();
  

});
