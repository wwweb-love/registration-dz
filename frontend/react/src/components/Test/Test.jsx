import { useEffect } from "react";
import { useState } from "react";
import { NoteFound } from "../NoteFound/NoteFound";

export const Test = () => {
    return (
        <div>
            <a href="/">Главная</a>
            <a href="/login">Логин</a>
            <a href="/users">Пользователи</a>

            <h1>Главная</h1>
        </div>
    );
};

export const TestAuth = () => {
    const [isAccess, setIsAccess] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3000/users", {
        method: "GET",
        credentials: 'include', // ЭТО КРИТИЧЕСКИ ВАЖНО!
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            setIsAccess(res.access)}
        );

    }, [])

    return (
        <div>
            {isAccess ? (
                <>
                    <a href="/">Главная</a>
                    <a href="/login">Логин</a>
                    <a href="/users">Пользователи</a>

                    <h1>Пользователи</h1>
                </>
            ) : <NoteFound />}
        </div>
    );
};
