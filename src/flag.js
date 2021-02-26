import React from 'react'
import {useGlobalContext} from './context'
import { Link } from 'react-router-dom';
import Loading from './loading'
import styled from 'styled-components'

const FlagStyled = styled.div`

    
background: var(--clr-white);
border-radius: var(--radius);
margin-top: 2rem;
box-shadow: var(--light-shadow);
transition: var(--transition);
  
&.dark-mode{
  background: var(--clr-dark-blue-elements-dark-mode);
  color: var(--clr-white-text-dark-mode-elements-ligth-mode);
}
:hover {
  box-shadow: var(--dark-shadow);
  transform: translateY(-15px);
}
img {
  width: 100%;
  height: 9rem;
  object-fit: cover;
  border-top-right-radius: var(--radius);
  border-top-left-radius: var(--radius);
}
.flag-info {
  display: flex;
  justify-content: space-between;
  padding: 25px 25px 50px 25px;
  flex-direction: column;
}
`
function Flag({flags}) {
    const{isDarkMode,loading}=useGlobalContext()
    if(loading){
        return <Loading/>
    }
    return (
        flags.map((item,index)=>{
            return(
                 <Link to={`/flags-challenger/section/sectionflag/${item.name}`} key={index}>
                    <FlagStyled className={`flag ${isDarkMode?'dark-mode':''}`}>
                        <img src={item.flag} alt={item.name}></img>
                        <div className="flag-info">
                            <h3>{item.name}</h3>
                            <p>Population: {item.population}</p>
                            <p>Region: {item.region}</p>
                            <p>Capital: {item.capital}</p>
                        </div>
                    </FlagStyled>
                 </Link>
            )
        })
    )
}

export default Flag
