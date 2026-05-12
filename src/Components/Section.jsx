import React from 'react'

const Section = ({ paragraph, title, className = '' }) => {
  return (
    <div className={`section-header ${className}`}>
      {paragraph && <p className='text-white/70 mb-4'>{paragraph}</p>}
      {title && <h2 className='text-white text-3xl font-bold leading-tight'>{title}</h2>}
    </div>
  )
}

export default Section
