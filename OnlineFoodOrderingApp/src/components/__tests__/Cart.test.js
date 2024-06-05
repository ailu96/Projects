import "@testing-library/jest-dom"
import "@testing-library/react"
import RestroMenu from "../RestroMenu"
import { act } from "react-dom/test-utils";
import { render,screen } from "@testing-library/react"
import {MOCK_DATA} from "../mocks/mockResMenu.json"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("should load restaurant Menu Component",async()=>{
  //await act(async()=> render(<RestroMenu/>))
})