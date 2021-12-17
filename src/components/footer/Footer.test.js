import React from "react";
import {render, screen} from "@testing-library/react"
import Footer from "./Footer"

describe("testing component", function(){
    test("shoud render footer logo", function(){
        render(<Footer />)
        expect(screen.getByAltText(/footer logo/i)).toHaveClass("logo")
    })

    test("should render footer text", function(){
        render(<Footer />)
        expect(screen.getByTestId("wrapper")).toContainHTML("p")
    })

    test("should render footer contact infos", function(){
        render(<Footer />)
        expect(screen.getByText("+381 66 22 33 77")).toBeTruthy()
        expect(screen.getByText(/someemail@email.com/i)).toBeTruthy()
        expect(screen.getByText(/Some Address 125 Novi Sad/i)).toBeTruthy()
    })

    test("should render footer links", function(){
        render(<Footer />)
        expect(screen.getAllByTestId("footer-links")).toHaveLength(2)
    })
})