import { render,screen,fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import Button from "./Button";

test("Renders a name",()=>{
    const onClick=jest.fn()
    render(<Button onClick={onClick}/>);
    const buttonElement=screen.getByText('Button')
    fireEvent.click(buttonElement)
    expect(onClick).toHaveBeenCalledTimes(1)
})