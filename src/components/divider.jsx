import React from 'react'

const Divider = ({ name, color }) => {
  const paramDivider = `w-auto h-6 mx-8 mb-5 border-b-2 border-${color} items-center text-base-200  divider`
  return (
    <div
      className={paramDivider}
      >
      <span className={`px-2 py-0.5 bg-${color}`}>{name}</span>
      </div>
  )
}

export default Divider