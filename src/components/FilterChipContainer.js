import React from 'react'
import { useContext } from 'react'
import FilterChip from './FilterChip'
import chipContext from '../context/filter chips/chipContext'

export default function FilterChipContainer() {
  const { stateOfChip } = useContext(chipContext);
  return (
    <div className='filter-chip-container row justify-content-start pb-4'>
      {stateOfChip.chips? stateOfChip.chips.map((value,index)=>{ return <FilterChip key={index} value={value}></FilterChip>}): ''}
    </div>
  )
}
