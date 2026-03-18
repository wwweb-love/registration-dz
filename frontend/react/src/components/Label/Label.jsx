import styled from "styled-components"

const LabelContainer = ({ className, title }) => {
    return (
        <label className={className}>{title}</label>
    )
}

export const Label = styled(LabelContainer)`

    display: flex;
    

`