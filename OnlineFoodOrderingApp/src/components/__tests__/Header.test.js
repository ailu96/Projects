import {fireEvent,render,screen} from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appstore from "../../redux/appStore";
import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom"

it("should Render header component with a login button",()=>{

    render(
        <BrowserRouter>
    <Provider store={appstore}>
    <Header></Header>
    </Provider>
    </BrowserRouter>
    );


    const loginButton=screen.getByRole("button",{name:'Login'})

    fireEvent.click(loginButton);

    const logout=screen.getByRole('button',{name:'Logout'})
    expect(logout).toBeInTheDocument();
})

it("should change login button to logout on button click",()=>{

    render(
        <BrowserRouter>
    <Provider store={appstore}>
    <Header></Header>
    </Provider>
    </BrowserRouter>
    );


    const loginButton=screen.getByRole("button",{name:'Login'})
    //const loginButton=screen.getByText('Login')
    expect(loginButton).toBeInTheDocument();
})


it("should Render header component with a cart items 0",()=>{

    render(
        <BrowserRouter>
    <Provider store={appstore}>
    <Header></Header>
    </Provider>
    </BrowserRouter>
    );


    const cart=screen.getByText("Cart (0 items)")
    //const loginButton=screen.getByText('Login')
    expect(cart).toBeInTheDocument();
})