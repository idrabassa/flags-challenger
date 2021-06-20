import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './context'
import styled from 'styled-components'

const ErrorPageStyled = styled.div`
  height: 500px;
  width: 400px;
  margin: 0 auto;
  margin-top: 150px;
  justify-content: center;
  text-align: center;

  &.dark-mode {
    color: var(--clr-white-text-dark-mode-elements-ligth-mode);
  }
  svg {
    height: 300px;
    width: 300px;
  }
  a {
    position: relative;
    top: 10px;
    display: inline;
  }
`
function Error() {
  const { isDarkMode } = useGlobalContext()
  return (
    <ErrorPageStyled
      className={`not-found-page ${isDarkMode ? 'dark-mode' : ''}`}
    >
      <h1>OOPS!!</h1>
      <h1>ERROR 404</h1>
      <RiErrorWarningFill />
      <h1>PAGE NOT FOUND</h1>
      <Link to='/' className={`btn ${isDarkMode ? 'dark-mode' : ''}`}>
        Click here to go Home Page
      </Link>
    </ErrorPageStyled>
  )
}

export default Error
