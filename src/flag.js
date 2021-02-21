import React from 'react'
import {useGlobalContext} from './context'
import { Link } from 'react-router-dom';
import Loading from './loading'
function Flag({flags}) {
    //const[flags,setFlags]=useState(flags)
    //const[count,setCount]=useState(0)
    const{isDarkMode,loading}=useGlobalContext()
    if(loading){
        return <Loading/>
    }
    return (
        flags.map((item,index)=>{
            //const {name,population,flag,capital,region}=item
            //console.log(item.name)
            return(
                 <Link to={`/section/sectionflag/${item.name}`} key={index}>
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
            //count ++
        })
    )
}

export default Flag
