export const addUser = (data) => fetch("http://localhost:3000/login/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
                role_id: "2"
            })
        })
        