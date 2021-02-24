import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdKeyboardArrowDown} from 'react-icons/md'
import Flag from './flag'
import Loading from './loading'
import {useGlobalContext} from './context'
const SectionStyled = styled.div`
margin-top: 40px;

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
        const newfilterFlags=filterFlags.filter((flag)=>flag.name.toLowerCase().includes(value))
        setFilterFlags(newfilterFlags)
        //console.log(newfilterFlags)
    }
    }
    const handleFilter=(e)=>{
    
        const value=e.target.textContent
        if (value!=='') {
            console.log(value)
            setFilterValue(value);
            filter(value);
        }
        setisView(!isView)
        e.preventDefault()
    }
    const filter=(region)=>{
        if (region==='Filter by Region') {
            console.log('entre aqui')
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
                <div className={`search ${isDarkMode?'dark-mode':''}`} >
                    <button>
                        <AiOutlineSearch/>
                    </button>
                    <input type="text" placeholder="Search for a country..." onChange={(e)=>handleSearch(e)}></input>
                </div>
                <div className={`filter ${isDarkMode?'dark-mode':''}`} onClick={handleFilter}>
                    <ul className={`select ${isView?'view':''}`} >
                        <li className="default">
                            <button className={`option1 ${isDarkMode?'dark-mode':''}`}><p>{filterValue}</p><MdKeyboardArrowDown /></button>
                        </li>
                        <ul className={isDarkMode?'dark-mode':''}>
                        {/* <li>None</li> */}
                        <li>Africa</li>
                        <li>Americas</li>
                        <li>Asia</li>
                        <li>Europe</li>
                        <li>Oceania</li>
                        </ul>
                    </ul>
                      
                    {/* <select name="category" id="category">
                        <option value="">Filter by Region</option>
                        <option value="">Africa</option>
                        <option value="">America</option>
                        <option value="">Asia</option>
                        <option value="">Europe</option>
                        <option value="">Oceania</option>
                    </select> */}
                    
                </div>
            </div>
            <div className={`flags-container container ${isDarkMode?'dark-mode':''}`}>                   
                    <Flag flags={filterFlags} />               
            </div>
        </SectionStyled>
    )
}

export default Section
