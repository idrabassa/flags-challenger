import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useGlobalContext } from './context'
import styled from 'styled-components'

const SearchStyled = styled.div`
  background: var(--clr-white-text-dark-mode-elements-ligth-mode);
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  display: flex;
  width: 450px;

  &.dark-mode {
    background: var(--clr-dark-blue-elements-dark-mode);
  }
  :hover {
    box-shadow: var(--dark-shadow);
    transform: translateY(-15px);
  }
  input,
  button {
    height: 50px;
  }
  input {
    border: none;
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    width: 400px;
    padding-left: 10px;
  }
  &.dark-mode input {
    background: var(--clr-dark-blue-elements-dark-mode);
    color: var(--clr-white-text-dark-mode-elements-ligth-mode);
  }
  &.dark-mode input::placeholder {
    color: var(--clr-white-text-dark-mode-elements-ligth-mode);
  }
  input:focus {
    outline: none !important;
  }
  button:focus {
    outline: none !important;
  }
  button {
    border: none;
    width: 50px;
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
    background: none;
    /* border-left: 0px; */
  }
  &.dark-mode button {
    color: var(--clr-white-text-dark-mode-elements-ligth-mode);
  }
  button svg {
    height: 20px;
    width: 20px;
    margin-left: 20px;
  }
  @media screen and (max-width: 375px) {
    .searcher-menu {
      display: flex;
      flex-direction: column;

      /* margin: 2rem 0; */
    }
    width: 100%;
    margin-bottom: 40px;
  }
`

function Search({ handleSearch }) {
  const { isDarkMode } = useGlobalContext()
  return (
    <SearchStyled className={`search ${isDarkMode ? 'dark-mode' : ''}`}>
      <button>
        <AiOutlineSearch />
      </button>
      <input
        type='text'
        placeholder='Search for a country...'
        onChange={(e) => handleSearch(e)}
      ></input>
    </SearchStyled>
  )
}

export default Search
