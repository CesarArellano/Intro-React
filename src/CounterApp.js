import React from 'react'
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

  return (
    <>
      <h1>Counter App</h1>
      <hr />
      <h2>{ value }</h2>
      <button>+</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}
