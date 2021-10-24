import styled from "styled-components";

export const TaskStyled = styled.div`
  text-align: center;

  h1 {
    margin-bottom: 1.5rem;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 400px;
    height: fit-content;
    padding: 10px;

    input {
      width: 100%;
      height: 1.8rem;
      padding: .3rem;
      font-size: .980rem;
      color: #222;
      outline: none;
      border: none;
      border-bottom: 2px solid #6c5ce7;
      margin-bottom: 1rem;
    }

    button {
      width: 100%;
      padding: .4rem;
      cursor: pointer;
      background-color: #6c5ce7;
      outline: none;
      border: none;
      color: white;
      font-weight: 600;
      border-radius: 3px;
    }
  }
`