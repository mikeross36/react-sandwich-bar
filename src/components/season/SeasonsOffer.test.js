import React from "react";
import {render, screen} from "@testing-library/react"
import SeasonOffer from "./SeasonOffer"

describe("testing component", function(){
    test("should render seasons article with 10 images", function(){
        render(<SeasonOffer />)
        expect(screen.getByRole("article")).toBeTruthy()
        expect(screen.getAllByAltText("season")).toHaveLength(10)
    })
})
