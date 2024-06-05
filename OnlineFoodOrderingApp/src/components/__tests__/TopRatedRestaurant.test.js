import "@testing-library/jest-dom"
import "@testing-library/react"
import { fireEvent, render,screen } from "@testing-library/react"
import Body from "../Body"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResListData.json"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("check if the top rated restuarant is working",async ()=>{
    await act( async ()=>    render(<BrowserRouter><Body/></BrowserRouter>))

    const topRatedBtn= screen.getByRole("button",{name:"Top Rated Resturants"});
    fireEvent.click(topRatedBtn)
    const cards=screen.getAllByTestId('resCard')
    expect(cards.length).toBe(9);
});