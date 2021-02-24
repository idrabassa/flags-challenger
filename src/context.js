import React, { useState, useContext,useEffect } from 'react';

const AppContext = React.createContext();
const filter=''
const url=`https://restcountries.eu/rest/v2/all${filter}`
//const url=`https://restcountries.eu/rest/v2/name/${filter}`
const AppProvider = ({ children }) => {
  const [loading,setLoading]=useState(true)
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [data,setData]=useState([])
  const [flags,setFlags]=useState([])
  //const [border,setBorder]=useState({})
  const [borders,setBorders]=useState([])
  const setNewData = (newData)=>{
      setData(newData)
  }
  const getFlags=async()=>{
    const response = await fetch(url)
    const newflags = await response.json()
    setFlags(newflags)
    //setFilterFlags(newflags)
    setLoading(false)
}
function changeMedia(mq){
  setDarkMode()
}
    useEffect(()=>{
        getFlags()
        getBorders()
        const mq=window.matchMedia('(prefers-color-scheme:dark)')
        mq.addListener(changeMedia);
        //console.log(mq)
        // const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        // const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

        //   if(userPrefersDark){
        //       console.log("User prefers a dark interface");
        //   }
        //   if(userPrefersLight){
        //     console.log("User prefers a light interface");
        //   }
         
    },[isDarkMode])

  const setDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    
    if(!isDarkMode){
    document.body.classList.add('dark-mode')
    }else{
      document.body.classList.remove('dark-mode')
    }
    const theme =isDarkMode.toString
    window.localStorage.setItem('bg','exe')
  };
  const setOffDarkMode = () => {
    setDarkMode(false);
  };
  const getBorders=()=>{
    let newBorders=[]
    flags.map((flag,index)=>{
      let newborder={ id:index,alphaCode:flag.alpha3Code,nameC:flag.name}
      newBorders.push(newborder)
    })
    return newBorders
  }

  // const getBorders=()=>

  return (
    <AppContext.Provider
      value={{
        borders,
        loading,
        flags,
        data,
        isDarkMode,
        getBorders,
        setDarkMode,
        setOffDarkMode,
        setNewData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

