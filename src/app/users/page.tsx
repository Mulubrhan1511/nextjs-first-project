'use client';
import { useState, useEffect } from "react";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

export default function Users() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchUsers() {
            

            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error("Something went wrong while fetching users!");
                }

                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError('Failed to fetch users');
                if (err instanceof Error) {
                    setError(`Failed to fetch users: ${err.message}`);
                }
            }
            finally {
                setLoading(false);
            }
            
        }
        fetchUsers();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    

    return (
        <ul className="space-y-4 p-4">
            {users.map((user) => (
                <li key={user.id} className="border p-4 rounded-md">
                    <h2 className="text-xl font-bold">{user.name}</h2>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                </li>
            ))}
        </ul>
    );
}