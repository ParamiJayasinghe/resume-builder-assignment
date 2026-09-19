import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './index';

beforeAll(() => {
    window.resumeBuilderData = {
        root_url: 'http://localhost/',
        nonce: '12345',
        postId: 1
    };

    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ sections: [] }),
        })
    );
});

describe('Resume Builder App', () => {

    it('renders the editor heading', () => {
        render(<App />);
        const heading = screen.getByText(/Resume Builder Editor/i);
        expect(heading).not.toBeNull();
    });

    it('updates the live preview when a name is typed', () => {
        render(<App />);

        // Find the input box by looking for its placeholder text
        const input = screen.getByPlaceholderText('e.g., Jane Doe');

        // Simulate a user typing "John Smith" into the box
        fireEvent.change(input, { target: { value: 'John Smith' } });

        const previewName = screen.getByText('John Smith');
        expect(previewName).not.toBeNull();
    });

});
