import React from 'react'

const AuthenticationScreenTemplate = (props: any) => {
  const { children } = props
  return (
    <div className="authentication-page-container">
      <div className="left-container"></div>
      <div className="right-container">
        <div className="right-content-container">{children}</div>
      </div>
    </div>
  )
}

export default AuthenticationScreenTemplate
