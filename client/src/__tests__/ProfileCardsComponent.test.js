import { render, screen } from '@testing-library/react';

import ProfileCardsComponent from '../components/ProfileCardsComponent';

import testData from '../../testGraduates.js';

const graduates = testData.graduates;

jest.mock(`../components/ProfileCardComponent`, () => () => {
    return <mock-profilecardcomponent data-testid="ProfileCardComponent" />;
});

describe(`ProfileCardComponent tests`, () => {

    test('should render the expected number of ProfileCardComponents', () => {
        render(<ProfileCardsComponent graduates={graduates} />);
        const profileCardElements = screen.getAllByTestId("ProfileCardComponent");
        expect(profileCardElements.length).toBe(graduates.length);


    })



})

