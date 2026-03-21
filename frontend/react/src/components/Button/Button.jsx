import styled from "styled-components"

const ButtonContainer = ({className, children, onClick, typeButton="button"}) => {
    return <button className={className} type={typeButton} onClick={onClick}>{children}</button>
}

export const Button = styled(ButtonContainer)`
    padding: 2px 7px;
    font-size: 18px;
`