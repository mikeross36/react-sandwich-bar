import React from "react";
import {render, screen} from "@testing-library/react"
import Offer from "./Offer"

describe("testing component", function(){
    test("should render offers title", function(){
        render(<Offer />)
        expect(screen.getByTestId("title")).toHaveTextContent("what do we offer...")
    })

    test("should render 8 offer articles with images", function(){
        render(<Offer />)
        expect(screen.getAllByRole("article")).toHaveLength(8)
        expect(screen.getAllByAltText("offer pic")).toHaveLength(8)
    })

    test("Should render offer info", function(){
        render(<Offer />)
        expect(screen.getAllByTestId("offer-info")).toBeTruthy()
    })
})