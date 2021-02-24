import React, { useState ,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs'
import {useGlobalContext} from './context'
import Error from './error'

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
                <div className='info'>
                    <div className='info-upper'>
                    <h1 className='title-name'>{name}</h1>
                    <div className="sections">
                    <div className='info-section1'>
                        <p>Native Name: {currentflag.nativeName}</p>
                        <p>Population: {currentflag.population}</p>
                        <p>Region: {currentflag.region}</p>
                        <p>Sub Region: {currentflag.Subregion}</p>
                        <p>Capital: {currentflag.capital}</p>
                    </div>
                    <div className='info-section2'>
                    <p>Top Level Domain: 
                        {currentflag.topLevelDomain===undefined?'undefined':currentflag.topLevelDomain.map((item,index)=>{
                            if(currentflag.topLevelDomain.length >1 && index <currentflag.topLevelDomain.length-1){
                                return `${item},`
                            }
                               return item
                        })}
                        </p>
                        <p>Currencies:
                        {currentflag.currencies===undefined?'undefined':currentflag.currencies.map((item,index)=>{
                            if(currentflag.currencies.length >1 && index <currentflag.currencies.length-1){
                                return `${item.name},`
                            }
                               return item.name
                        })}
                        </p>
                        <p>Languages:
                        {currentflag.languages===undefined?'undefined':currentflag.languages.map((item,index)=>{
                            if(currentflag.languages.length >1 && index <currentflag.languages.length-1){
                                return `${item.name},`
                            }
                               return item.name
                        })}
                        </p>
                    </div>
                    </div>
                   </div>
                   <div className="info-downner">
                       <p>Border Countries:</p>
                       <div className="border-countries">
                        {currentflag.borders===undefined?'undefined':currentflag.borders.map((item)=>{
                            return(
                                getBorders().map((border,index)=>{
                                    if(item===border.alphaCode){
                                        return <Link to={`/flags-challenger/section/sectionflag/${border.nameC}`}key={index} className={`btn countries ${isDarkMode?'dark-mode':''}`}><p>{border.nameC.split(" ", 1)}</p></Link>
                                    }
                                    
                              })
                            )
                           
                        })}
                       </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default SectionFlag
