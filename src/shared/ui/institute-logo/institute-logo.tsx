import "./institute-logo.css"
import React from "react"

type TInstituteLogoProps = {
  photo: string
  title: string
  onClick?: VoidFunction
}

/*
 * Компонента принимает ссылку на лого института(photo) и его название(title)
 * ЯВляется кнопкой для каждого института
 * **/
export const InstituteLogo: React.FC<TInstituteLogoProps> = ({
  photo,
  title,
  onClick,
}) => {
  return (
    <div className="institute-logo" onClick={onClick}>
      <img className="institute-logo__photo" src={photo} alt="" />
      <span className="institute-logo__title">{title}</span>
      <div></div>
    </div>
  )
}
