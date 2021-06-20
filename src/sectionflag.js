import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import { useGlobalContext } from './context'
import Error from './error'
import InfoFlag from './infoflag'
import styled from 'styled-components'

const ContainerFlagInfoStyled = styled.div`
  .back {
    margin-top: 60px;
  }
  .specify-flag-info {
    display: flex;
    margin-top: 100px;
    margin-bottom: 100px;
  }
  .specify-flag-info.dark-mode {
    color: var(--clr-white-text-dark-mode-elements-ligth-mode);
  }
  .preview {
    height: 400px;
    width: 550px;
  }

  @media screen and (max-width: 375px) {
    .specify-flag-info {
      display: flex;
      flex-direction: column;
    }
    .preview {
      height: 250px;
      width: 100%;
    }
  }
`

function SectionFlag() {
  const { name } = useParams()
  const [currentflag, setFlag] = useState({})
  const { isDarkMode, flags } = useGlobalContext()
  useEffect(() => {
    const filterflag = flags.find((flag) => flag.name === name)
    setFlag(filterflag)
  }, [flags, name])

  if (currentflag === undefined || currentflag === {}) {
    return <Error />
  }
  return (
    <ContainerFlagInfoStyled className='container'>
      <Link
        className={`btn back ${isDarkMode ? 'dark-mode' : ''}`}
        to={'/flags-challenger/section'}
      >
        <BsArrowLeft />
        <p>Back</p>
      </Link>
      <div className={`specify-flag-info ${isDarkMode ? 'dark-mode' : ''}`}>
        <img className='preview' src={currentflag.flag} alt={name}></img>
        <InfoFlag currentflag={currentflag} name={name} />
      </div>
    </ContainerFlagInfoStyled>
  )
}

export default SectionFlag
