import RestroCard from '../RestroCard';
import { screen, render } from '@testing-library/react';
import MOCK_DATA from '../mocks/resCardMock.json';

import "@testing-library/jest-dom";

it("should render resturantCard component props Data",()=>{

    render(
    <RestroCard  resData={MOCK_DATA}/>);
    const name= screen.getByText("Baskin Robbins");
    expect(name).toBeInTheDocument();
})

it("should render veg resturants",()=>{

})