import styled from "styled-components"

const TableDataRowContainer = ({ className, data }) => {

    return (
        <div className={className}>
            {data && data.map((element, index) => {
                return <div className="table-data-row" key={index}>
                    <div className="date-post-table">21.11.2025</div>
                    <div className="name-user-table">{element.user}</div>
                    <div className="phone-table">{element.phone}</div>
                    <div className="description-problem-table">{element.description}</div>
                </div>
            })}

        </div>
    )
}

export const TableDataRow = styled(TableDataRowContainer)`
.table-data-row {
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
}
    .date-post-table {
        width: 15%;
    }

    .name-user-table {
        width: 30%;
    }

    .phone-table {
        width: 15%;
    }

    .description-problem-table {
        width: 40%;
    }
`