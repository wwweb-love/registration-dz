import styled from "styled-components"

const NotificationContainer = ({className, children}) => {

    return (
        <div className={className}>{children}</div>
    )
}


export const Notification = styled(NotificationContainer)`
    color: #fafafa;
    padding: 10px 20px;
    background-color: ${({ statusFetch }) => statusFetch ? "green" : "tomato"};
`