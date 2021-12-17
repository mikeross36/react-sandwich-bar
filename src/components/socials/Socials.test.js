import React from "react";
import {render, screen} from "@testing-library/react"
import Socials from "./Socials"

describe("component testing", function(){
    test("should render social icons", function(){
        render(<Socials />)
        expect(screen.getAllByRole("link")).toHaveLength(3)
    })
})