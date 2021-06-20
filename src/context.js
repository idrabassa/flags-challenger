import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()
const url = `https://restcountries.eu/rest/v2/all`
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [data, setData] = useState([])
  const [flags, setFlags] = useState([])
  const [borders, setBorders] = useState([])
  const setNewData = (newData) => {
    setData(newData)
  }
  const getFlags = async () => {
    const response = await fetch(url)
    const newflags = await response.json()
    setFlags(newflags)
    setLoading(false)
  }
  function changeMedia(mq) {
    setIsDarkMode(mq.matches)
    if (mq.matches) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }
  useEffect(() => {
    getFlags()
    getBorders()
    const mq = window.matchMedia('(prefers-color-scheme:dark)')
    mq.addListener(changeMedia)
    if (mq.matches) {
      setDarkMode()
    }
    // eslint-disable-next-line
  }, [])

  const setDarkMode = () => {
    setIsDarkMode(!isDarkMode)

    if (!isDarkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }
  const setOffDarkMode = () => {
    setDarkMode(false)
  }
  const getBorders = () => {
    let newBorders = []
    flags.map((flag, index) => {
      let newborder = {
        id: index,
        alphaCode: flag.alpha3Code,
        nameC: flag.name,
      }
      newBorders.push(newborder)
      return newborder
    })
    //setBorders(newBorders)
    return newBorders
  }
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
        setNewData,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
