import { styled } from "styled-components"
import { SectionInput, Button, Notification } from "../../components"
import { useEffect, useState } from "react"
import { postLeaveARequest } from "../../../api"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useNavigate } from "react-router"



const RecordingSchema = yup.object().shape({
    user: yup
        .string()
        .required("Заполните ФИО")
        .matches(/\w+$/, "Неверно заполнено ФИО. Допускается буквы и цифры")
        .min(3, "Неверно заполнено ФИО. Минимум 3 символа")
        .max(30, "Неверно заполнено ФИО. Максимум 30 символов"),
    phone: yup
        .string()
        .required("Заполните телефон")
        .min(10, "Неверно заполнен телефон. Минимум 10 символа")
        .max(12, "Неверно заполнено телефон. Максимум 12 символов"),
    description: yup
        .string()
        .required("Заполните описание проблемы")
        .matches(/\w+$/, "Неверно заполнено описание проблемы. Допускается буквы и цифры")
        .min(10, "Неверно заполнено описание пролемы. Минимум 10 символа")
        .max(50, "Неверно заполнено описание проблемы. Максимум 50 символов"),
})

const LeaveARequestContainer = ({ className }) => {
    const navigate = useNavigate()

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isSubmitSuccessful }
    } = useForm({
        defaultValues: {
            user: "",
            phone: "",
            description: ""
        }, resolver: yupResolver(RecordingSchema)
    })

    const [statusFetch, setStatusFetch] = useState(undefined)

    const onSubmit = (data, event) => {
        event.preventDefault()
        
        postLeaveARequest(data)
            .then((res) => res.json())
            .then(res => {
                if (res.status == "200") {
                    setStatusFetch(true)
                } else {
                    setStatusFetch(false)
                }
            })
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset(); // сбрасываем форму
        }
    }, [isSubmitSuccessful, reset]);

    return (
        <div className={className}>

            <h2>Запись к врачу</h2>

            <form className="leave-a-request--form" action="POST" onSubmit={handleSubmit(onSubmit)}>
                <SectionInput isTextArea={false} register={register} inputType="text" inputName="user" inputPlaceholder="" labelTitle="ФИО" errors={errors?.user} />
                <SectionInput isTextArea={false} register={register} inputType="phone" inputName="phone" inputPlaceholder="" labelTitle="Номер телефона" errors={errors?.phone} />
                <SectionInput isTextArea={true} register={register} inputType="text" inputName="description" inputPlaceholder="" labelTitle="Опишите вашу проблему" errors={errors?.description} />

                <Button typeButton="submit">Отправить</Button>
            </form>

            <button onClick={() => navigate("/app-from-the-form")}>app-from-the-form</button>
            <button onClick={() => navigate("/login")}>login</button>

            {statusFetch == undefined ? null : <Notification statusFetch={statusFetch}>{statusFetch ? "Запрос отправлен успешно" : "Запрос был прерван"}</Notification>}
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