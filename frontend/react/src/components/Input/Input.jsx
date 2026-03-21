import styled from "styled-components"

const InputContainer = ({className, type, name, placeholder, onChange, register}) => {
    return (
        <input className={className} type={type} name={name} placeholder={placeholder} onChange={onChange} {...register(name)} />
    )
}

export const Input = styled(InputContainer)`
    font-size: 18px;
    padding: 2px 7px;
`