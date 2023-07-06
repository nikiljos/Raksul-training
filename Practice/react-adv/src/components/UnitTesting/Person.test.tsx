import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Person from "./Person";

test("Renders a name",()=>{
    render(<Person name={"Raju"}/>);
    // const divElement=screen.getByText('Person is Raju')
    // expect(divElement).toBeInTheDocument;
    const divElement=screen.getByRole('contentinfo')
    expect(divElement).toHaveTextContent('Person')
    expect(divElement).toHaveAttribute('role','contentinfo')  
})