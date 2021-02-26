import React, { useState ,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs'
import {useGlobalContext} from './context'
import Error from './error'
import InfoFlag from './infoflag'

function SectionFlag() {
    const {name}=useParams()
    const[currentflag,setFlag]=useState({})
    const{isDarkMode,flags,getBorders}=useGlobalContext()
    useEffect(() => {
        const filterflag = flags.find((flag) => flag.name ===name);
        setFlag(filterflag);
      }, [flags,name]);
      
      if(currentflag===undefined||currentflag==={}){
        return <Error/>
      }
      return (
        <div className="container">
            <Link className={`btn back ${isDarkMode?'dark-mode':''}`} to={'/flags-challenger/section'}>
                <BsArrowLeft/>
                <p>Back</p>
            </Link>
            <div className={`specify-flag-info ${isDarkMode?'dark-mode':''}`}>
                <img className="preview" src={currentflag.flag} alt={name}></img>
                <InfoFlag currentflag={currentflag} name={name}/>
            </div>
        </div>
    )
}

export default SectionFlag
