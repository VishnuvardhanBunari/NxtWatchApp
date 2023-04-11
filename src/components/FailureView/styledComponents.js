import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 90vh;
`

export const FailureImage = styled.img`
  width: 25%;
  margin-top: 50px;
`

export const ErrorMsg = styled.h1`
  color: ${props => (!props.darkMode ? '#0f0f0f' : '#f9f9f9')};
`

export const Suggestion = styled.p`
  color: ${props => (!props.darkMode ? '#0f0f0f' : '#f9f9f9')};
`
export const RetryButtonInFailure = styled.button`
  border: none;
  border-radius: 5px;
  color: #ffffff;
  height: 40px;
  width: 10%;
  background-color: #4f46e5;
`
