import { useState, useEffect } from "react";
import axios from 'axios';

type UserProps = {
    id: number;
    name: string;
    username: string;
    email: string;
}

// TEstando requisicoes HTTPP
export function Posts() {
    const [users, setUsers] = useState<UserProps[]>([]);

    useEffect(() => {
        async function loadUsers() {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            // caso mande com um parametro name, olhar la no arquivo de teste para saber como pegar esse parametro
            //const response = await axios.get("https://jsonplaceholder.typicode.com/users?name=Natan");
            setUsers(response.data);
        }

        loadUsers();
    }, []);

    async function handleGetUsers() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
    }   
    return (
        <div>
            <button onClick={handleGetUsers}>Buscar usuarios</button>

            <br /><br />
            {users.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <strong>{user.username}</strong>
                    <br /> <br />
                </div>
            ))}
        </div>
    );
}