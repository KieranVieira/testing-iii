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
});