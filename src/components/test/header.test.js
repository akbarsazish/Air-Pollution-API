import React from 'react';
import { render } from '@testing-library/react';
import Header from '../pages/Header';

describe('Header Component', () => {
  test('renders header with correct date and text', () => {
    const { getByTestId, getByText } = render(<Header />);

    // Check if date is rendered correctly
    const dateElement = getByTestId('date');
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthName = monthNames[month];
    const expectedDateString = `${year} ${monthName} ${day}`;
    expect(dateElement.textContent).toBe(expectedDateString);

    // Check if header text is rendered correctly
    const headerText = getByText('Level of Air Pollution in the Countries!');
    expect(headerText).toBeInTheDocument();
  });

  test('renders header with microphone and gear icons', () => {
    const { getAllByTestId } = render(<Header />);

    // Check if microphone and gear icons are rendered
    const iconElements = getAllByTestId('header-icon');
    expect(iconElements).toHaveLength(2);
  });
});
