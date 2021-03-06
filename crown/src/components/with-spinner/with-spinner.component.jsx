import React from 'react'

import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles'

const WithSpinner = (WrappedComponent) => {
  return ({isLoading, ...otherProps}) => {
    isLoading
    ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    )
    : (
      <WrappedComponent {...otherProps} />
    )
  }
}

export default WithSpinner;