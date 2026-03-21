import { styled } from "styled-components"
import { SectionInput, Button } from "../../components"

const LoginContainer = ({ className }) => {

    const onClick = () => {
    }


    return (
        <div className={className}>
            <h2>Login</h2>
            <form action="POST" className="login--form">
                <SectionInput inputType="email" inputName="email" inputPlaceholder="" labelTitle="Электронная почта" />
                <SectionInput inputType="password" inputName="password" inputPlaceholder="" labelTitle="Пароль" />

                <Button onClick={onClick} typeButton="submit">Войти</Button>
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