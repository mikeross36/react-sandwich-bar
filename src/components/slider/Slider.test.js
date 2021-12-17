import {render, screen} from "@testing-library/react"
import Slider from "./Slider"

describe("component testing", function(){
    test("should render slider wrapper", function(){
        render(<Slider />)
        expect(screen.getByTestId("slider-wrapper")).toBeTruthy()
    })

    test("should render 8 slides with images & titles", function(){
        render(<Slider />)
        expect(screen.getAllByRole("article")).toHaveLength(8)
        expect(screen.getAllByAltText(/slide pic/i)).toHaveLength(8)
        expect(screen.getAllByRole("heading")).toHaveLength(8)
    })

    test("should render nav buttons", function(){
        render(<Slider />)
        expect(screen.getAllByRole("button")).toHaveLength(2)
    })
})