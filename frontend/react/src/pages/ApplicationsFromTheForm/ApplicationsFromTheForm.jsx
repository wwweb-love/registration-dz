import styled from "styled-components";
import { TableTitleRow, TableDataRow } from "./components";
import { useState, useEffect } from "react";

const ApplicationsFromTheFormContainer = ({ className }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/recordings", {
            method: "GET",
            credentials: "include",
        })
            .then((res) => res.json())
            .then((res) => {
                setData(res.recordings);
            });
    }, []);

    return (
        <>
            <div className={className}>
                <h2>Заявки с формы</h2>

                <div className="table">
                    <TableTitleRow />
                    <TableDataRow data={data} />
                </div>
            </div>
        </>
    );
};

export const ApplicationsFromTheForm = styled(ApplicationsFromTheFormContainer)`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100vh;

    justify-content: center;
    align-items: center;
    gap: 30px;

    .table {
        width: 85%;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;
