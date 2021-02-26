import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Flag from './flag'
import Loading from './loading'
import {useGlobalContext} from './context'
import Filter from './filter'
import Search from './search'
const SectionStyled = styled.div`
margin-top: 40px;

.searcher-menu {
    display: flex;
    justify-content: space-between;  
   }
.flags-container{
    display: grid;
    grid-gap: 4.5rem;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    margin-top: 1rem;
  }

`

function Section() {
    const{isDarkMode,flags,loading}=useGlobalContext()
    const[filterFlags,setFilterFlags]=useState([flags])
    const[isView,setisView]=useState(false)
    const[filterValue,setFilterValue]= useState('Filter by Region')
    const handleSearch=(e)=>{
       let value = e.target.value
       if(value===''||value===undefined){
           setFilterValue('Filter by Region')
           setFilterFlags(flags)
       }else{
        const newfilterFlags=filterFlags.filter((flag)=>flag.name.toLowerCase().includes(value.toLowerCase()))
        setFilterFlags(newfilterFlags)
    }
    }
    const handleFilter=(e)=>{
    
        const value=e.target.textContent
        if (value!=='') {
            setFilterValue(value);
            filter(value);
        }
        setisView(!isView)
        e.preventDefault()
    }
    const filter=(region)=>{
        if (region==='Filter by Region') {
            setFilterFlags(flags);
        }else{
            const newfilterFlags=flags.filter((flag)=>flag.region === region)
            setFilterFlags(newfilterFlags);
        }
    }
    useEffect(()=>{
        setFilterFlags(flags)
        
    },[flags])
    if(loading){
        return <Loading/>
    }
    return (
        <SectionStyled className={`flags-section container ${isDarkMode?'dark-mode':''}`}>
            <div className={`searcher-menu ${isDarkMode?'dark-mode':''}`}>
                <Search handleSearch={handleSearch}/>
                <Filter filterValue={filterValue} handleFilter={handleFilter} isView={isView}/>
            </div>
            <div className={`flags-container container ${isDarkMode?'dark-mode':''}`}>                   
                    <Flag flags={filterFlags} />               
            </div>
        </SectionStyled>
    )
}

export default Section
