export const loginAuth = (data) => fetch("http://localhost:3000/login/auth", {
            method: "POST",
            credentials: 'include', // ЭТО КРИТИЧЕСКИ ВАЖНО!
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        })
            