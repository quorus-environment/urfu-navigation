import './institute-logo.css'
import React from 'react'

type TInstituteLogoProps = {
  photo: string
  title: string
  onClick?: VoidFunction
}

export const InstituteLogo: React.FC<TInstituteLogoProps> = ({ photo, title, onClick }) => {
  return (
    <div className='institute-logo' onClick={onClick}>
      <img className='institute-logo__photo' src={photo} alt='' />
      <span className='institute-logo__title'>{title}</span>
    </div>
  )
}
