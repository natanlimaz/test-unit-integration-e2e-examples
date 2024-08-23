import { useState, FormEvent } from "react";

export function Form() {
    const [name , setName] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        
        console.log("CADASTRADO COM SUCESSO");
        
        setName("");
        setEmail("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Digite seu nome</label>
                <input 
                    type="text"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Digite seu email</label>
                <input 
                    type="text"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>
            </form>
        </div>
    );
}