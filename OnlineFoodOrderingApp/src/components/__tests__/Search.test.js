import "@testing-library/jest-dom"
import {fireEvent, render,screen} from "@testing-library/react"
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should render body component and see for search",async ()=>{
    await act( async ()=>    render(<BrowserRouter><Body/></BrowserRouter>))


    const searchBtn= screen.getByRole("button",{name:"Search"})
    const searchInput=screen.getByTestId("searchInput");
    fireEvent.change(searchInput,{target:{value:"pizza"}})
    fireEvent.click(searchBtn)
    //screen should load 3 cards when i entered pizza
    const cards=screen.getAllByTestId('resCard')
    expect(cards.length).toBe(3);
})