import styled from 'styled-components'

export const TaskListStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  margin: 10px;
  padding: 10px;
  background-color: #ecf0f1;
  border-radius: 0.3rem;
  border-left: 5px solid #6c5ce7;

  p {
    font-size: 17px;
    font-weight: 500;
  }

  button {
    background-color: #e17055;
    border: none;
    outline: none;
    color: white;
    padding: 5px;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
  }
`