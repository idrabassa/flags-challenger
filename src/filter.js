import React from 'react'
import {useGlobalContext} from './context'
import {MdKeyboardArrowDown} from 'react-icons/md'
import styled from 'styled-components'
const FilterStyled = styled.div`
    height: 50px;
    background: var(--clr-white-text-dark-mode-elements-ligth-mode);
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    width: 200px;
    border: none;
    text-align: center;
    justify-content: space-between;
  
  &.dark-mode{
    background: var(--clr-dark-blue-elements-dark-mode);
    color: var(--clr-white-text-dark-mode-elements-ligth-mode);
  }
  :hover{
    box-shadow: var(--dark-shadow);
    cursor: pointer;
    transform: translateY(-15px);
  }
`
const SelectStyled = styled.ul`
    position: relative;
    width: 100%;
    height: 100%;
    top: -15px;

   .option1{
    position: relative;
    width: 100%;
    left: -20px;
    border: none;
    background: var(--clr-white-text-dark-mode-elements-ligth-mode);
    border-radius: var(--radius);
    padding: 15px;
    outline: none !important;
  } 
  .option1.dark-mode{
    background: var(--clr-dark-blue-elements-dark-mode);
    color: var(--clr-white-text-dark-mode-elements-ligth-mode);
  }
   li{
    width: 100%;
    height: 100%;
  }
  .option1{
    display: flex;
    justify-content: space-between;
    margin: 15px 20px;
  }
  .option1 svg{
    margin-top: 2px;
  }
   &.view ul{
    display: block;
    position: relative;
    top:5px;
    display: block;
    background: var(--clr-white-text-dark-mode-elements-ligth-mode);
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    width: 200px;
    border: none;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  &.view ul.dark-mode{
   background-color: var(--clr-dark-blue-elements-dark-mode);
  } 
  &.view ul li{
    height: 25px;
    text-align: left;
    padding-left: 20px;
  }
  &.view ul li:hover{
    box-shadow: var(--dark-shadow);
    transition: var(--transition);
  }
`
const UlStyled = styled.ul`
    display: none;
`
function Filter({filterValue,handleFilter,isView}) {
    const{isDarkMode}=useGlobalContext()
    return (
        <FilterStyled className={`filter ${isDarkMode?'dark-mode':''}`} onClick={handleFilter}>
                    <SelectStyled className={`select ${isView?'view':''}`} >
                        <li className="default">
                            <button className={`option1 ${isDarkMode?'dark-mode':''}`}><p>{filterValue}</p><MdKeyboardArrowDown /></button>
                        </li>
                        <UlStyled className={isDarkMode?'dark-mode':''}>
                        <li>Africa</li>
                        <li>Americas</li>
                        <li>Asia</li>
                        <li>Europe</li>
                        <li>Oceania</li>
                        </UlStyled>
                    </SelectStyled>
                </FilterStyled>
    )
}

export default Filter
