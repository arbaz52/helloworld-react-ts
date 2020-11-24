import styled from "styled-components";

export const Table = styled.table`
    text-align: left;
    width: 100%;
    border-collapse: collapse;
    box-shadow: 0 0 10px #ccc;
    border-radius: 8px;
    overflow: hidden;
    
    & th, td {
        padding: 8px 16px;
        border: 1px solid rgba(0, 0, 0, 0.05);

    }
    & tr:nth-child(2n + 1) {
        background: rgba(0, 0, 0, 0.02)
    }
    & tr:nth-child(1) {
        background: rgba(0, 0, 0, 0.05)
        // border-bottom: 2px solid black;
    }
    & tr:nth-child(1) th {
        padding: 16px;
    }

    & button {
        border: 0;
        padding: 8px 16px;
        background: #ccc;
    }
    & .actionsWrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export const EditButton = styled.div`
    width: 32px;
    height: 32px;
    font-weight: bold;
    display: flex;
    background: #ecf0f1;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`

export const DeleteButton = styled.div`
    width: 32px;
    height: 32px;
    background: #c0392b;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`