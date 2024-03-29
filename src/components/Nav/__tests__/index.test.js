
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
    { 
        name: 'portraits',
        description: 'Portraits of people in my life'    
    }
];
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav 
            categories = {categories}
            setCurrentCategory = {mockSetCurrentCategory}
            currentCategory = {mockCurrentCategory}
            contactSelected = {mockContactSelected}
            setContactSelected = {mockContactSelected}
        />);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav 
            categories = {categories}
            setCurrentCategory = {mockSetCurrentCategory}
            currentCategory = {mockCurrentCategory}
            contactSelected = {mockContactSelected}
            setContactSelected = {mockContactSelected}
            />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        const { getByLabelText } = render(<Nav 
            categories = {categories}
            setCurrentCategory = {mockSetCurrentCategory}
            currentCategory = {mockCurrentCategory}
            contactSelected = {mockContactSelected}
            setContactSelected = {mockContactSelected}
        />);

        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
});

describe('Links are visible', () => {
    it('insert text into the links', () => {
        const { getByTestId } = render(<Nav 
            categories = {categories}
            setCurrentCategory = {mockSetCurrentCategory}
            currentCategory = {mockCurrentCategory}
            contactSelected = {mockContactSelected}
            setContactSelected = {mockContactSelected}
        />);

        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
});