import { render, screen, waitFor } from '@testing-library/react';

import Main from '../components/Main';

jest.mock(`../components/Main`, () => () => {
    return <mock-profilecardscomponent data-testid="ProfileCardsComponent" />;
})

describe('Main component tests', () => {
    test(`It should render the ProfileCardsComponent`, async () => {
        render(<Main />);

        await waitFor(() => expect(screen.getByTestId('ProfileCardsComponent')).toBeInTheDocument());
    })

});
