import Home from '../../../src/app/page';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';

describe('Home', () => {
  it('should render', () => {
    render(<Home />);

    expect(screen.getByText('Get started by editing')).toBeInTheDocument();
  });
});
