import { useNavigate } from '@reach/router';
import React, { FormEvent, useMemo } from 'react';
import { Person } from '../customTypes';
import { Container, NavigationButton, Plate } from '../elements/Container';
import { Form } from '../elements/Form';
import useInput from '../hooks/useInput';
import useRadioInput from '../hooks/useRadioInput';

interface UserInfoFormProps {
    initialValues: Person;
    handleFormSubmission: (person: Person) => void;
    action: "ADD" | "EDIT";
}
const UserInfoForm = (props: UserInfoFormProps) => {
    const navigate = useNavigate()
    const { initialValues, handleFormSubmission, action } = props
    const { state: name, bindings: nameBindings } = useInput(initialValues.name)
    const { state: email, bindings: emailBindings } = useInput(initialValues.email)
    const { state: phone, bindings: phoneBindings } = useInput(initialValues.phone)
    const { state: country, bindings: countryBindings } = useInput(initialValues.country)
    const { selected: gender, bindings: genderBindings } = useRadioInput(["M", "F"], initialValues.gender)

    const countries = useMemo(() => ["PAKISTAN", "India", "USA", "China", "UK"], [])
    const _handleFormSubmission = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleFormSubmission({
            name, gender, country, phone, email
        })
    }

    console.log("Component: UserInfoForm = render")

    return (
        <Container>
            <Plate>
                <h1>{action === "EDIT" ? "Edit Person's Information" : "Add new user"}</h1>
                <NavigationButton onClick={() => { navigate("/") }}>Go Back</NavigationButton>
            </Plate>
            <Form onSubmit={_handleFormSubmission}>
                <label>First and Last Name:</label>
                <input type='text' required {...nameBindings} pattern="[A-Za-z]{3,15} [A-Za-z]{3,15}" placeholder="Enter your full name" />
                <label>Email</label>
                <input type='email' required {...emailBindings} placeholder="E.g. example@website.com" />
                <label>Phone</label>
                <input type='tel' required {...phoneBindings} placeholder="03081234567" />
                <label>Gender:</label>
                <div className="genderPicker">
                    <label htmlFor="genderMale">Male</label>
                    <input id="genderMale" type='radio' name='gender' checked={"M" === gender} value="M" required {...genderBindings} />
                    <label htmlFor="genderFemale">Female</label>
                    <input id="genderFemale" type='radio' name='gender' checked={"F" === gender} value="F" required {...genderBindings} />
                </div>
                <label>Country</label>
                <select required  {...countryBindings}>
                    <option disabled value="">Please select a country</option>
                    {
                        countries.map((_country, _index) => <option value={_country} key={_index}>{_country}</option>)
                    }
                </select>
                <div className="buttonsWrapper">
                    {action === "EDIT" ? <button type="submit">Update Person's Information</button> : <button type="submit">Add Person</button>}
                </div>
            </Form>
        </Container>
    )
}

export default React.memo(UserInfoForm)