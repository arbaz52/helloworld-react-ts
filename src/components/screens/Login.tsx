import React from 'react';
import { Container } from '../../elements/Container';
import { Form } from '../../elements/Form';



const Login = () => {
    return (
        <Container>
            <h1>Hello world</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga distinctio ab explicabo. Eius accusamus corporis architecto adipisci iusto eligendi libero!</p>
            <h2>Login</h2>
            <Form className="text-left">
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="E.g. example@mailbox.com" name="email" id="email" required/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required/>
                <div className="checkboxWrapper">
                    <input type="checkbox" name="keep-logged-in" id="keep-logged-in"/>
                    <label htmlFor="keep-logged-in">Keep me logged in</label>
                </div>
                <div className='buttonsWrapper'>
                    <button>Login</button>
                </div>
            </Form>
        </Container>
    )
}

export default Login