import { render, screen } from '@testing-library/react';

import ProfileCardComponent from '../components/TalentSpotlight/ProfileCard/ProfileCardComponent';

import testData from '../../testGraduates.js';

const graduate = testData.graduates[0]

describe(`ProfileCardComponent tests`, () => {


    describe(`render tests`, () => {

        beforeEach(() => {
            render(<ProfileCardComponent graduate={graduate} />);
        })

        test(`should render the graduate's full name`, () => {
            expect(screen.getByText(`${graduate.firstName} ${graduate.lastName}`)).toBeInTheDocument();
        });

        test(`should render the test graduate's 'dfGaduation' date`, () => {
            expect(screen.getByText(graduate.dfGraduationDate)).toBeInTheDocument();
        })

        test(`should render the graduates 'universityDegree'`, () => {
            expect(screen.getByText(graduate.universityDegree)).toBeInTheDocument();
        })

        test(`should render the graduate's 'university' key`, () => {
            expect(screen.getByText(graduate.university)).toBeInTheDocument();
        })

        test(`should render an <img> tag with the src attribute 'ProfileImg.png'`, () => {
            const profileImg = screen.getAllByRole('img');
            expect(profileImg[0]).toHaveAttribute('src', 'ProfileImg.png');
        })

    })

})