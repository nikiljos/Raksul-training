import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import ItemList from "./ItemList";

test("Renders a name",()=>{
    const names=["Raju","Raju 2","Raju 3","Raju 4"]
    render(<ItemList names={names}/>);
    const divElement=screen.getAllByRole('name');
    expect(divElement[0]).toHaveTextContent(names[0])
})