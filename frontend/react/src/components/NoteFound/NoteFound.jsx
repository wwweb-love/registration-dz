import styled from "styled-components"

const NoteFoundContainer = ({className}) => {
    return (
        <div className={className}>
            <h1>NoteFound</h1>
            <p>Нет доступа или страница не найдена</p>
        </div>
    )
}

export const NoteFound = styled(NoteFoundContainer)`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
`