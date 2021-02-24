import React from 'react'
import {useGlobalContext} from './context'
import { Link } from 'react-router-dom';
import Loading from './loading'
function Flag({flags}) {
    const{isDarkMode,loading}=useGlobalContext()
    if(loading){
        return <Loading/>
    }
    return (
        flags.map((item,index)=>{
            return(
                 <Link to={`/flags-challenger/section/sectionflag/${item.name}`} key={index}>
                <div className={`flag ${isDarkMode?'dark-mode':''}`}>
                    <img src={item.flag} alt={item.name}></img>
                    <div className="flag-info">
                        <h3>{item.name}</h3>
                        <p>Population: {item.population}</p>
                        <p>Region: {item.region}</p>
                        <p>Capital: {item.capital}</p>
                    </div>
                </div>
                 </Link>
            )
        })
    )
}

export default Flag
