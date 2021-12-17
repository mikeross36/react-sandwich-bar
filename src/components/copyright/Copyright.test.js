import React from "react"
import {render, screen} from "@testing-library/react"
import Copyright from "./Copyright"

describe("component tesing", function(){
    test("should render copyright text", function(){
        render(<Copyright />)
        expect(screen.getByText(/Copyright 2020 DodaDesign All rights reserved/i)).toBeTruthy()
    })
})