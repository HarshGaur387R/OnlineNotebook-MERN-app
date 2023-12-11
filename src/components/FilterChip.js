import React, { useState } from 'react'
import chipContext from '../context/filter chips/chipContext'
import { useContext } from 'react'

export default function FilterChip(prop) {

  const {removeChip} = useContext(chipContext);
  const [chipValue] = useState(prop.value);

  return (
    <>
      <div className="badge bg-secondary overflow-hidden d-flex justify-content-around align-items-center">
        <div className="badge-content">
          {chipValue}
        </div>
        <button onClick={()=>{removeChip(prop.value)}} className="chip-close-btn">&times;</button>
      </div>
    </>
  )
}
