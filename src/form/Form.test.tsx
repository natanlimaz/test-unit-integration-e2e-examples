import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Form } from ".";

describe("Form component", () => {

    it("should test form and input component", () => {
        render(<Form />);

        // TRIPE A - ARRANGE, ACT, ASSERT

        const nameInput = screen.getByPlaceholderText("Digite seu nome") as HTMLInputElement;
        const emailInput = screen.getByPlaceholderText("Digite seu email") as HTMLInputElement;
        const submitButton = screen.getByText("Cadastrar");

        fireEvent.change(nameInput, { target: {value: "Natanael"}});
        fireEvent.change(emailInput, {target: {value: "natanael@teste.com"}})

        expect(nameInput.value).toBe("Natanael");
        expect(emailInput.value).toBe("natanael@teste.com");

        const consoleLogSpy = jest.spyOn(console, "log");
        fireEvent.submit(submitButton);
        
        expect(consoleLogSpy).toHaveBeenCalledWith("CADASTRADO COM SUCESSO");

        expect(nameInput.value).toBe("");
        expect(emailInput.value).toBe("");
    
    })
})