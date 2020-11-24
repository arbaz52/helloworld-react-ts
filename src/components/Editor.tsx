import { useNavigate, useParams } from '@reach/router';
import React, { useContext, useMemo } from 'react';
import { PeopleContext } from '../App';
import { Container, NavigationButton, Plate } from '../elements/Container';
import { Form } from '../elements/Form';
import useInput from '../hooks/useInput';
import useRadioInput from '../hooks/useRadioInput';
const Editor = () => {
    const navigate = useNavigate()
    const { addPerson, people, updatePerson } = useContext(PeopleContext);

    const params = useParams()
    let [userInfo, userFound] = useMemo(() => {
        let _info = {
            name: "",
            email: "",
            phone: "",
            country: "",
            gender: ""
        }

        let _userFound = false
        if (params.userId) {
            //getting the actual user
            const { userId } = params
            console.log(userId, people)
            if (userId > 0 && userId - 1 < people.length) {
                _info = { ...people[userId - 1] }
                _userFound = true
            }
        }
        return [_info, _userFound]
    }, [params])

    const { state: name, bindings: nameBindings } = useInput(userInfo.name)
    const { state: email, bindings: emailBindings } = useInput(userInfo.email)
    const { state: phone, bindings: phoneBindings } = useInput(userInfo.phone)
    const { state: country, bindings: countryBindings } = useInput(userInfo.country)
    const { selected: gender, bindings: genderBindings } = useRadioInput(["Male", "Female"], userInfo.gender)

    const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!userFound)
            addPerson({
                name, email, phone, country, gender
            })
        else
            updatePerson(params.userId, {
                name, email, phone, country, gender
            })
        navigate("/")
    }
    const gotoHome = () => {
        navigate("/")
    }
    const countries = ["Pakistan", "Saudia Arabia", "England", "USA"]
    return (
        <Container>
            <Form onSubmit={handleFormSubmission}>
                <Plate>
                    <span></span>
                    <NavigationButton onClick={gotoHome}>Go Back</NavigationButton>
                </Plate>
                {
                    params.userId && !userFound && <b>User not found!</b>
                }
                <h1>{userFound ? "Edit Person's Information" : "Add new user"}</h1>
                <label>Name:</label>
                <input type='text' required {...nameBindings} pattern="[A-Za-z]{3,15} [A-Za-z]{3,15}" placeholder="Enter your full name" />
                <label>Email</label>
                <input type='email' required {...emailBindings} placeholder="E.g. example@website.com" />
                <label>Phone</label>
                <input type='tel' required {...phoneBindings} placeholder="03081234567" />
                <label>Gender:</label>
                <div className="genderPicker">
                    <label htmlFor="genderMale">Male</label>
                    <input id="genderMale" type='radio' name='gender' checked={"Male" === gender} value="Male" required {...genderBindings} />
                    <label htmlFor="genderFemale">Female</label>
                    <input id="genderFemale" type='radio' name='gender' checked={"Female" === gender} value="Female" required {...genderBindings} />
                </div>
                <label>Country</label>
                <select required  {...countryBindings}>
                    <option disabled value="">Please select a country</option>
                    {
                        countries.map((_country, _index) => <option value={_country} key={_index}>{_country}</option>)
                    }
                </select>
                <div className="buttonsWrapper">
                    {userFound ? <button type="submit">Update Person's Information</button> : <button type="submit">Add Person</button>}
                </div>
            </Form>
        </Container>
    )
}

export default Editor