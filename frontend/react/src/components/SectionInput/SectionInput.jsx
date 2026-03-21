import styled from "styled-components"
import { Input } from "../Input/Input"
import { Label } from "../Label/Label"
import { TextArea } from "../TextArea/TextArea"

const SectionInputContainer = ({ className, inputType, inputName, inputPlaceholder, labelTitle, isTextArea = false, onChange, register, errors }) => {
    return (
        <div className={className}>
            <Label title={labelTitle} />
            {isTextArea ? <TextArea register={register} textareaType="text" textareaName="description" textareaPlaceholder="" onChange={onChange} /> : <Input register={register} type={inputType} name={inputName} placeholder={inputPlaceholder} onChange={onChange} />}
            {errors && <div className="error-message">{errors.message}</div>}
        </div>
    )
}

export const SectionInput = styled(SectionInputContainer)`
    display: flex;
    flex-direction: column;


    .error-message {
        color: red;
        font-size: 14px;
    
    }
`