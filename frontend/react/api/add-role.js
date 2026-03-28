export const addRole = () => fetch("http://localhost:3000/login/role/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify({
                role_id: "2",
                role_name: "GUEST"
            })
        })