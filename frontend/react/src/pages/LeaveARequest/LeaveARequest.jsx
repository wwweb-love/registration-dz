import { styled } from "styled-components"
import { SectionInput, Button } from "../../components"


const LeaveARequestContainer = ({ className }) => {
    return (
        <div className={className}>

            <h2>Запись к врачу</h2>

            <form className="leave-a-request--form" action="POST">
                <SectionInput inputType="text" inputName="user" inputPlaceholder="" labelTitle="ФИО" />
                <SectionInput inputType="phone" inputName="phone" inputPlaceholder="" labelTitle="Номер телефона" />
                <SectionInput isTextArea={true} inputType="text" inputName="text" inputPlaceholder="" labelTitle="Опишите вашу проблему" />

                <Button typeButton="submit">Отправить</Button>
                {/* <button type=""></button> */}
            </form>
        </div>
    )
}

export const LeaveARequest = styled(LeaveARequestContainer)`
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    width: 30%;
    padding: 10px 20px;
    margin: auto;

    & .leave-a-request--form {
        display: flex;
        flex-direction: column;
        gap: 12px;
        
        border: 1px solid black;
        padding: 10px;
    }
`