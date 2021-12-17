import React from "react";
import {render, screen, fireEvent} from "@testing-library/react"
import Tabs from "./Tabs"

const mockedToggleTab = jest.fn()

describe("component testing", function(){
    test("should render tabs title", function(){
        render(<Tabs />)
        expect(screen.getByText(/best sandwich recipes/i)).toBeTruthy()
    })

    test("should render 4 tab buttons", function(){
        render(<Tabs />)
        expect(screen.getByTestId("btn1")).toHaveClass("btn1")
        expect(screen.getByTestId("btn2")).toHaveClass("btn2")
        expect(screen.getByTestId("btn3")).toHaveClass("btn3")
        expect(screen.getByTestId("btn4")).toHaveClass("btn4")
    })

    test("should render toggleTab function call", function(){
        render(<Tabs toggleTab={mockedToggleTab}/>)
        const btn1 = screen.getByTestId("btn1")
        fireEvent.click(btn1)
        const btn2 = screen.getByTestId("btn2")
        fireEvent.click(btn2)
        const btn3 = screen.getByTestId("btn3")
        fireEvent.click(btn3)
        const btn4 = screen.getByTestId("btn4")
        fireEvent.click(btn4)
        expect(mockedToggleTab).toBeCalled()
    })

    test("should render 4 content articles with images & links", function(){
        render(<Tabs />)
        expect(screen.getAllByRole("article")).toHaveLength(4)
        expect(screen.getAllByRole("img")).toHaveLength(4)
        expect(screen.getAllByRole("link")).toHaveLength(4)
    })
})