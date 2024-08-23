import { render, screen, fireEvent } from '@testing-library/react'; // para testar componentes, (render) é para renderizar algum componente
import "@testing-library/jest-dom"
import App from './App';

function sum(n1: number, n2: number): number {
    return n1 + n2;
}

function media(n1: number, n2: number) {
    const resultado = (n1+n2)/2;

    if(resultado >= 7) {
        return "Aprovado";
    }
    else {
        return "Exame";
    }
}

// Criar um bloco que agrupa vários testes relacionados
describe("First test app component", () => {

    // Testando funções
    it("should adds 5 + 2 to equal 7", () => {
        expect(sum(5, 2)).toBe(7);
    })

    it("should calculate the average and return exame", () => {
        expect(media(5, 6)).toBe("Exame");
        expect(media(7, 8)).toBe("Aprovado");
    })
});

// Testando componentes React (aqui sim usa o react testing library)
describe("App component", () => {
    // verificar se o componente app está sendo renderizado
    
    it("should render app component", () => {
        render( <App /> )

        // Verificar se o Natan Lima do h1 do componente App está sendo exibido
        //screen.getByText("Natan Lima");
        const headerTitle = screen.getByTestId("header");
        expect(headerTitle).toHaveTextContent("Natan Lima");
    })

    it("should heading h1 have correct test", () => {
        render( <App />);

        const headingElement = screen.getByRole("heading", { level: 1})
        expect(headingElement).toHaveTextContent("Natan Lima");
        expect(headingElement).toHaveClass("titulo");

    })

    it("should change message on button click", () => {
        render(<App />)

        const buttonElement = screen.getByText("Alterar mensagem");
        fireEvent.click(buttonElement);

        screen.getByText("Estudando testes com reactjs");

        const oldMessage = screen.queryByText("Bem vindo ao projeto!");
        expect(oldMessage).not.toBeInTheDocument();
    })
})



export default {};

// JEST é a biblioteca para a gente fazer testes.

// Testing Library é a biblioteca para a gente fazer a integração do JEST 
// e testar componentes, testar partes com o React.