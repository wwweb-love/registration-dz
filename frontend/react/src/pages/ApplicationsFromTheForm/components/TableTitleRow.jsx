import styled from "styled-components"

const TableTitleRowContainer = ({ className }) => {

    return (
        <div className={className}>
            <div className="date-post-table">Дата отправки</div>
            <div className="name-user-table">ФИО</div>
            <div className="phone-table">Телефон</div>
            <div className="description-problem-table">Проблема</div>
        </div>
    )
}

export const TableTitleRow = styled(TableTitleRowContainer)`
        padding: 10px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid black;
        font-weight: 900;
`