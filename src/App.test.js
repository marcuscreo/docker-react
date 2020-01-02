import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('ya basic marcus blankenship learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

