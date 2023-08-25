import React from 'react';
import { render } from '@testing-library/react';
import Home from '../pages/Home';

/* eslint-disable */
jest.mock('../Countries', () => () => <div data-testid="countries-component">Mocked Countries Component</div>);

describe('Home Component', () => {
  test('renders header and countries components', () => {
    const { getByTestId } = render(<Home />);

    // Check if header component is rendered
    const headerComponent = getByTestId('header-component');
    expect(headerComponent).toBeInTheDocument();

    // Check if mocked countries component is rendered
    const countriesComponent = getByTestId('countries-component');
    expect(countriesComponent).toBeInTheDocument();
  });
});
