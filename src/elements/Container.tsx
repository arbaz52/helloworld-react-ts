import { Link } from "@reach/router";
import styled from "styled-components";
import breakpoints from './index'

export const Container = styled.div`
    padding: 8px 16px;
    max-width: 900px;
    margin: auto;
    // margin-top: 64px;
    // margin-bottom: 64px;
`

export const NavigationButton = styled.button`
    padding: 12px 16px;
    border: 0;
    background: #8e44ad;
    color: white;
    border-radius: 4px;
    box-shadow: 0 0 10px #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`


export const NavigationLink = styled(Link)`
    color: #2980b9;
    padding-left: 8px;
    padding-right: 8px;
    font-size: 0.9em;
`

export const Plate = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 48px;

    @media only screen and ${breakpoints.device.sm} {
        flex-wrap: wrap;
    }
`

export const Centered = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 48px;
`


export const Error = styled.div`
    color: red;
`

export const Section = styled.section`
    margin: 24px 0;
`