import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const InfoStyled = styled.div`
  .info {
    width: 100%;
  }

  .info-upper {
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    margin-left: 30px;
  }
  .sections {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
  }

  .info-downner {
    margin-top: 50px;
    margin-left: 30px;
  }

  .border-countries {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(4, 100px);
  }
  @media screen and (max-width: 375px) {
    .sections {
      display: flex;
      flex-direction: column;
    }
    .info-upper {
      margin-left: 0px;
      margin-top: 50px;
    }
    .info-section2 {
      margin-top: 30px;
    }
    .info-downner {
      margin-left: 0px;
    }
    .border-countries {
      grid-template-columns: repeat(2, 100px);
    }
  }
`

function InfoFlag({ currentflag, name }) {
  const { isDarkMode, getBorders } = useGlobalContext()
  return (
    <InfoStyled className='info'>
      <div className='info-upper'>
        <h1 className='title-name'>{name}</h1>
        <div className='sections'>
          <div className='info-section1'>
            <p>Native Name: {currentflag.nativeName}</p>
            <p>Population: {currentflag.population}</p>
            <p>Region: {currentflag.region}</p>
            <p>Sub Region: {currentflag.Subregion}</p>
            <p>Capital: {currentflag.capital}</p>
          </div>
          <div className='info-section2'>
            <p>
              Top Level Domain:
              {currentflag.topLevelDomain === undefined
                ? 'undefined'
                : currentflag.topLevelDomain.map((item, index) => {
                    if (
                      currentflag.topLevelDomain.length > 1 &&
                      index < currentflag.topLevelDomain.length - 1
                    ) {
                      return `${item},`
                    }
                    return item
                  })}
            </p>
            <p>
              Currencies:
              {currentflag.currencies === undefined
                ? 'undefined'
                : currentflag.currencies.map((item, index) => {
                    if (
                      currentflag.currencies.length > 1 &&
                      index < currentflag.currencies.length - 1
                    ) {
                      return `${item.name},`
                    }
                    return item.name
                  })}
            </p>
            <p>
              Languages:
              {currentflag.languages === undefined
                ? 'undefined'
                : currentflag.languages.map((item, index) => {
                    if (
                      currentflag.languages.length > 1 &&
                      index < currentflag.languages.length - 1
                    ) {
                      return `${item.name},`
                    }
                    return item.name
                  })}
            </p>
          </div>
        </div>
      </div>
      <div className='info-downner'>
        <p>Border Countries:</p>
        <div className='border-countries'>
          {currentflag.borders === undefined
            ? 'undefined'
            : currentflag.borders.map((item) => {
                return getBorders().map((border, index) => {
                  if (item === border.alphaCode) {
                    return (
                      <Link
                        to={`/flags-challenger/section/sectionflag/${border.nameC}`}
                        key={index}
                        className={`btn countries ${
                          isDarkMode ? 'dark-mode' : ''
                        }`}
                      >
                        <p>{border.nameC.split(' ', 1)}</p>
                      </Link>
                    )
                  }
                  return index
                })
              })}
        </div>
      </div>
    </InfoStyled>
  )
}

export default InfoFlag
