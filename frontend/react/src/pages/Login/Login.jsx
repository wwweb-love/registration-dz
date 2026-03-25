import { styled } from "styled-components"
import { SectionInput, Button } from "../../components"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useNavigate } from "react-router-dom"

const LoginSchema = yup.object().shape({
    email: yup
        .string()
        .required('Введите почту...')
        .min(3, "Неверно заполнена почта. Минимум 3 символа")
        .max(15, "Неверно заполнена почта. Максимум 15 символов"),

    password: yup
        .string()
        .required('Введите пароль...')
        .min(3, "Неверно заполнен пароль. Минимум 3 символа")
        .max(15, "Неверно заполнен пароль. Максимум 15 символов")
})

const LoginContainer = ({ className }) => {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: yupResolver(LoginSchema)
    })

    const onSubmit = (data, event) => {
        event.preventDefault()

        // fetch("http://localhost:3000/login/create", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json;charset=utf-8"
        //     },
        //     body: JSON.stringify({
        //         email: data.email,
        //         password: data.password,
        //         role_id: "2"
        //     })
        // })
        // .then(res => res.json())
        // .then(res => console.log(res))

        fetch("http://localhost:3000/login/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    setError('password', {
                        type: 'server',
                        message: res.error
                    });
                } else {
                    navigate("/")
                }
            })
    }

    return (
        <div className={className}>
            <h2>Login</h2>
            <form action="POST" className="login--form" onSubmit={handleSubmit(onSubmit)}>
                <SectionInput inputType="email" inputName="email" inputPlaceholder="" labelTitle="Электронная почта" register={register} errors={errors?.email} />
                <SectionInput inputType="password" inputName="password" inputPlaceholder="" labelTitle="Пароль" register={register} errors={errors?.password} />

                <Button typeButton="submit">Войти</Button>
            </form>
        </div>
    )
}

export const Login = styled(LoginContainer)`

    display: flex;
    flex-direction: column;
    
    width: 30%;
    padding: 10px 20px;
    margin: auto;

    box-shadow: 4px 3px 10px black;

    & .login--form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 10px;
    }
`