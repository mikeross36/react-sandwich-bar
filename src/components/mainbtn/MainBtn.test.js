import {render, screen} from "@testing-library/react"
import MainBtn from "./MainBtn"

describe("testing component", function(){
    test("should render main button", function(){
        render(<MainBtn />)
        expect(screen.getByRole("button")).toHaveTextContent(/explore/i)
    })
})