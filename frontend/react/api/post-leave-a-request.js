export const postLeaveARequest = (formData) => fetch("http://localhost:3000/recording", {
    method: "POST",
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(formData)
})