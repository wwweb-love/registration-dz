import styled from "styled-components"
import { Input } from "../Input/Input"
import { Label } from "../Label/Label"
import { TextArea } from "../TextArea/TextArea"

const SectionInputContainer = ({ className, inputType, inputName, inputPlaceholder, labelTitle, isTextArea=false }) => {
    return (
        <div className={className}>
            <Label title={labelTitle} />
            {isTextArea ? <TextArea textareaType="text" textareaName="description" textareaPlaceholder="" /> : <Input type={inputType} name={inputName} placeholder={inputPlaceholder} />}
        </div>
    )
}

export const SectionInput = styled(SectionInputContainer)`
    display: flex;
    flex-direction: column;
`