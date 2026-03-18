import styled from "styled-components"

const TextAreaContainer = ({className, textareaType, textareaName, textareaPlaceholder }) => {
    return (
        <textarea className={className} type={textareaType} name={textareaName} placeholder={textareaPlaceholder} />
    )
}

export const TextArea = styled(TextAreaContainer)`
    font-size: 18px;
    padding: 2px 7px;
    height: 100px;
`