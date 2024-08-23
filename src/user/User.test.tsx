import { render, screen, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import { User } from ".";

describe("User component", () => {

    it("should check if the name is not displayed when component is mounted", () => {
        render(<User />)

        const message = screen.queryByText("Usuário online: Natan Lima");

        expect(message).not.toBeInTheDocument(); 
    })

    it("should test if the value typed in the input is correct", () => {
        render(<User />);

        const inputElement = screen.getByPlaceholderText("Digite o nome");

        fireEvent.change(inputElement, {target: { value: "Natan Lima"} });
        expect(inputElement).toHaveValue("Natan Lima");
    });

    it("should display the name after typing in the input and click on the button", () => {
        render(<User />);

        const input = screen.getByPlaceholderText("Digite o nome");
        const button = screen.getByRole("button", {name: "Cadastrar"});

        fireEvent.change(input, { target: { value: "Natan Lima"} });
        fireEvent.click(button);

        const message = screen.getByText("Usuário online: Natan Lima");

        expect(message).toBeInTheDocument();
    })
})

export default {};