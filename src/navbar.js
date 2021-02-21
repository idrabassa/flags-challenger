import React from 'react'
import styled from 'styled-components'
 //import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import { IoMoonOutline } from 'react-icons/io5' 
import {useGlobalContext} from './context'
const NavbarStyled = styled.nav`
      
      background-color: var(--clr-white-text-dark-mode-elements-ligth-mode);
      height: 80px;
      box-shadow: var(--light-shadow);
      
      p{
        margin-left: 5px;
      }
       .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
      }
      
       div button{
        border: none;
        background: none;
        display: flex;
        align-items: center;
        cursor:pointer;
      }
      &.dark-mode{
        background-color: var(--clr-dark-blue-elements-dark-mode);
        color: var(--clr-white-text-dark-mode-elements-ligth-mode);
      }
      &.dark-mode div button{
        color: var(--clr-white-text-dark-mode-elements-ligth-mode);
      }

`

function Navbar() {
  const{setDarkMode,isDarkMode}=useGlobalContext()

    return (
        <NavbarStyled className={`navbar ${isDarkMode?'dark-mode':''}`}>
            <div className="container">
            <h1>Where in the world?</h1>
            <button id="dark-mode" onClick={setDarkMode}>
            <IoMoonOutline/>
                <p>Dark Mode</p>
            </button>
            </div>
        </NavbarStyled>
    )
}

export default Navbar

