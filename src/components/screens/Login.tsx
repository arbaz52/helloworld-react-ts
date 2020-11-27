import React, { FormEvent, useContext } from "react";
import { UserAuthContext } from "../../contexts/userAuthContext/provider";
import { Container, Error } from "../../elements/Container";
import { Form } from "../../elements/Form";
import useCheckInput from "../../hooks/useCheckInput";
import useInput from "../../hooks/useInput";

const Login = () => {
  const { login, isLoggedIn, state: {loading, error} } = useContext(UserAuthContext);

  const { state: email, bindings: emailBindings } = useInput("");
  const { state: password, bindings: passwordBindings } = useInput("");

  const {selected: keepLoggedIn, bindings: keepLoggedInBindings} = useCheckInput()

  const handleFormSubmission = (e: FormEvent) => {
    e.preventDefault();
    login(email, password, keepLoggedIn);
  };
  return (
    <Container>
      <h1>Hello world</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga distinctio
        ab explicabo. Eius accusamus corporis architecto adipisci iusto eligendi
        libero!
      </p>
      {isLoggedIn ? (
        <Error>You're already logged in!</Error>
      ) : (
        <>
          <h1>Login</h1>
          <Form className="text-left" onSubmit={handleFormSubmission}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="E.g. example@mailbox.com"
              name="email"
              id="email"
              required
              {...emailBindings}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              {...passwordBindings}
            />
            <div className="checkboxWrapper">
              <input
                type="checkbox"
                name="keep-logged-in"
                id="keep-logged-in"
                {...keepLoggedInBindings}
              />
              <label htmlFor="keep-logged-in">Keep me logged in: {keepLoggedIn ? "OK": "NO"}</label>
            </div>
            {error && <Error>{error.message}</Error>}
            <div className="buttonsWrapper">
              <button disabled={loading}>Login</button>
            </div>
          </Form>
        </>
      )}
    </Container>
  );
};

export default Login;
