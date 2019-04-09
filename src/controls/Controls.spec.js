import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Controls from './Controls';

describe('<Controls/>', () => {
    it('Should render buttons to toggle closed and locked states', () => {
        const { getByText } = render(<Controls/>);

        expect(getByText(/close gate/i)).toBeDefined();
        expect(getByText(/lock gate/i)).toBeDefined();
    });

    it('Button should change to close when clicked', () => {
        const { getByTestId } = render(<Controls/>)

        const closeBtn = getByTestId("close-button")

        fireEvent.click(closeBtn)

        expect(getByTestId("close-button").textContent).toBe("Close Gate");
    });

    it('Button should change to Locked when clicked', () => {
        const { getByTestId } = render(<Controls/>)

        const lockBtn = getByTestId("lock-button")

        fireEvent.click(lockBtn)

        expect(getByTestId("lock-button").textContent).toBe("Lock Gate");
    });

    it('Locked toggle should be disabled if gate is open', () => {
        const { getByTestId } = render(<Controls closed={false}/>)

        expect(getByTestId("lock-button").disabled).toBeTruthy()
    });

    it('Open toggle should be disabled if gate is locked', () => {
        const { getByTestId } = render(<Controls locked={true}/>)

        expect(getByTestId("close-button").disabled).toBeTruthy()
    });
});