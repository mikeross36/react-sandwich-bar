import React from "react";
import {render, screen, fireEvent} from "@testing-library/react"
import Header from "./Header"
import {BrowserRouter} from "react-router-dom"

const mockedToggleMobMenu = jest.fn()

const MockedHeader = function(){
    return (
        <BrowserRouter>
            <Header toggleMobMenu={mockedToggleMobMenu}/>
        </BrowserRouter>
    )
}

describe("testing Header component", function(){
    test("should render header logo", function(){
        render(<MockedHeader />)
        expect(screen.getByRole("img")).toHaveClass("logo")
    })

    test("should render menu button toggle", function(){
        render(<MockedHeader />)
        const menuBtn = screen.getByTestId("menu-btn")
        fireEvent.click(menuBtn)
        expect(mockedToggleMobMenu).toBeCalled()
    })

    test("should render desktop & mobile links", function(){
        render(<MockedHeader />)
        expect(screen.getByTestId("desktop-links")).toHaveClass("desktop-links")
        expect(screen.getByTestId("mobile-links")).toHaveClass("mobile-links")
    })

    test("should render banner title, text & main button", function(){
        render(<MockedHeader />)
        expect(screen.getByTestId("banner-wrapper")).toHaveTextContent(/Sandwich bar/i)
        expect(screen.getByTestId("banner-wrapper")).toHaveTextContent("restaurant & take-away food shop")
        expect(screen.getByTestId("banner-wrapper")).toContainHTML("button")
    })
})