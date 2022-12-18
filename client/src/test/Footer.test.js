import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/Footer';

test('should render Footer component', () => {
    render(<Footer />);
    const FooterElement = screen.getByText("© 2022 Chung Yan Ho");

    expect(FooterElement).toBeInTheDocument();
});