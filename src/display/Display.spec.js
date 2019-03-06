import React from 'react';
import { render } from 'react-testing-library';

import Display from './Display';

describe('<Display/>', () => {
    it('Should render closed if closed is true', () => {
        const { getByText } = render(<Display closed={true}/>);

        expect(getByText(/closed/i)).toBeDefined();
    });

    it('Should render open if closed is false', () => {
        const { getByText } = render(<Display closed={false}/>);

        expect(getByText(/open/i)).toBeDefined();
    });

    it('Should render locked if locked is true', () => {
        const { getByText } = render(<Display locked={true} closed={true}/>);

        expect(getByText(/locked/i)).toBeDefined();
    });

    it('Should render unlocked if locked is false', () => {
        const { getByText } = render(<Display locked={false} closed={true}/>);

        expect(getByText(/unlocked/i)).toBeDefined();
    });

    it('Should use red-led class when locked', () => {
        const { getByTestId } = render(<Display locked={true} closed={true}/>);

        const lockedDisplay = getByTestId('locked-display');

        expect(lockedDisplay.classList.contains('red-led')).toBeTruthy();
    })

    it('Should use green-led class when unlocked', () => {
        const { getByTestId } = render(<Display locked={false} closed={true}/>);

        const lockedDisplay = getByTestId('locked-display');

        expect(lockedDisplay.classList.contains('green-led')).toBeTruthy();
    })

    it('Should use red-led class when closed', () => {
        const { getByTestId } = render(<Display locked={true} closed={true}/>);

        const closedDisplay = getByTestId('closed-display');

        expect(closedDisplay.classList.contains('red-led')).toBeTruthy();
    })

    it('Should use green-led class when open', () => {
        const { getByTestId } = render(<Display locked={true} closed={false}/>);

        const closedDisplay = getByTestId('closed-display');

        expect(closedDisplay.classList.contains('green-led')).toBeTruthy();
    })
});