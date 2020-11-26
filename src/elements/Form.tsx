import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    gap: 8px;
    margin: auto;

    &.text-left {
        margin-left: 0;
        margin-right: 0;
    }

    select { 
        padding: 8px 16px;
        border: 1px solid #bdc3c7;
        border-radius: 4px;
    }
    & input[type='text'], input[type='email'], input[type='tel'], input[type='password']  {
        padding: 8px 16px;
        border: 1px solid #bdc3c7;
        border-radius: 4px;
        margin-bottom: 8px;
        outline: none;
        background: rgba(0, 0, 0, 0.01);
    }
    & input[type='text']:focus, input[type='email']:focus, select:focus, input[type='tel']:focus, input[type='password']:focus {
        border-color: #3498db;
        background: rgba(255, 255, 255, 0);
        box-shadow: 0 0 10px #ccc;
    }

    & label {
        color: grey;
    }

    // for radio | gender
    & > div.genderPicker {
        display: flex;
        align-items: center;
        padding: 8px 0px;
    }
    & > div.genderPicker input[type='radio'] {
        margin-right: 16px;
    }
    & > div.checkboxWrapper {
        display: flex;
        align-items: center;
        padding: 8px 0px;
    }
    & > div.checkboxWrapper label {
        color: black;
        font-size: 0.8rem;
        margin-left: 8px;
    }
    & > div.genderPicker label {
        color: black;
    }

    // for buttons
    & div.buttonsWrapper {
        display: flex;
        justify-content: space-between;
    }
    
    & div.buttonsWrapper button {
        flex: 1;
        padding: 12px 16px;
        background: #3498db;
        color: white;
        border: 0;
        border-radius: 4px;
    }

`
