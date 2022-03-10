import React, { useState } from "react";
import styled, { css, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to bottom, #f05053, #e1eec3 );
    height: 100%;
    margin: 0;
    color: #555;
  }

`;

const SharedStyles = css`
    background-color: #eee
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  background-color: #eee;
  ${SharedStyles}
`;

const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${SharedStyles}
`;
const StyledButton = styled.button`
  display: block;
  background-color: #f7797d;
  color: #fff;
  border-radius: 4px;
  border: 0;
  padding: 16px 32px;
  cursor: pointer;
`;

const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  margin: 20px 0;

  legend {
    padding: 0 10px;
  }

  label {
    padding-right: 20px;
  }

  input {
    margin-right: 10px;
  }
`;
const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin-bottom: 40px;
`;

function App() {
  const initialState = {
    name: "",
    email: "",
    gender: "",
    message: "",
  };

  const [state, setState] = useState(initialState);
  const [error, setError] = useState("");

  const handleInput = () => {};

  const handleSubmit = (e) => {};

  return (
    <>
      <GlobalStyle />
      <FormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <h2>Contact Form</h2>
          <label htmlFor="name">Name</label>
          <StyledInput
            type="name"
            name="name"
            value={state.name}
            onChange={handleInput}
          />
          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            name="email"
            value={state.email}
            onChange={handleInput}
          />
          <StyledFieldset>
            <legend>Gender</legend>
            <label>
              Female
              <input type="radio" value="female" name="gender" />
            </label>
            <label>
              Male
              <input type="radio" value="male" name="gender" />
            </label>
          </StyledFieldset>
          <label htmlFor="message">Message</label>
          <StyledTextArea name="message" />
          <StyledError>
            <p>Error message will be here</p>
          </StyledError>
          <StyledButton type="submit">Send Message</StyledButton>
        </StyledForm>
      </FormWrapper>
    </>
  );
}

export default App;
