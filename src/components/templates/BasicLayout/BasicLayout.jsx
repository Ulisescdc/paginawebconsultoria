import React from 'react'
import Header from '../../molecules/Header/Header'

const BasicLayout = ({logoUrl, children}) => {
  return (
    <div>
        <Header logoUrl={logoUrl}/>
        {children}
    </div>
  )
}

export default BasicLayout