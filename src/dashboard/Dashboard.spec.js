import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer';

import Dashboard from './Dashboard';

describe('<Dashboard/>', () => {
    it('Should match snapshot', () => {
        const tree = renderer.create(<Dashboard/>)

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Should render without crashing', () => {
        render(<Dashboard/>)
    });

    it('Should default to unlocked and open', () => {
        const { getByText } = render(<Dashboard/>);

        expect(getByText(/unlocked/i)).toBeDefined();
        expect(getByText(/open/i)).toBeDefined();
    });

    it('Should show controls and display', () => {
        const { getByText } = render(<Dashboard/>);

        expect(getByText(/unlocked/i)).toBeDefined();
        expect(getByText(/open/i)).toBeDefined();
        expect(getByText(/lock gate/i)).toBeDefined();
        expect(getByText(/close gate/i)).toBeDefined();
    });

});