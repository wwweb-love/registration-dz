import styled from "styled-components"

const InputContainer = ({className, type, name, placeholder}) => {
    return (
        <input className={className} type={type} name={name} placeholder={placeholder} />
    )
}

export const Input = styled(InputContainer)`
    font-size: 18px;
    padding: 2px 7px;
`