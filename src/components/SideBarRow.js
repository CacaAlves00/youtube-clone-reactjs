import React from 'react'
import './SideBarRow.css'

function SideBarRow({ Icon, title, selected }) {
  return (
    <div className={`side-bar-row ${selected && 'selected'}`}>
        <Icon className='icon' />
        <h2>{title}</h2>
    </div>
  )
}

export default SideBarRow