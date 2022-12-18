import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

test('should render Header component', () => {
    render(<Header title="Chitter App" />);
    const HeaderElement = screen.getByText(/Chitter App/i);

    expect(HeaderElement).toBeInTheDocument();
});