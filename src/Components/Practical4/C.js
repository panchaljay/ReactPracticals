import React, { useContext } from 'react'
import {myContext} from './A'

function C() {
    const name = useContext(myContext)

  return (
    <>
    <div>Component C {name}</div>
    </>
  )
}

export default C