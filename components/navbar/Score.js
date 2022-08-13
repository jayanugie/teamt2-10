import React from 'react'
import { useSelector } from 'react-redux'

const Score = () => {

  const { win } = useSelector(state => state.auth);
  const { lost } = useSelector(state => state.auth);

  return (
    <>
      <div>Win: {win}</div>
      <div>Lost: {lost}</div>
    </>
  )
}

export default Score