import React from "react"
import { createPortal } from "react-dom"
import "./popup-button.css"

export type ModalProps = {
  onClick: () => void
  isOpen: boolean
}

export const PopupButton: React.FC<ModalProps> = ({ onClick, isOpen }) => {
  if (!isOpen) {
    return null
  }
  return createPortal(
    <div className="popup-button">
      <span className="popup-button__message">{123213}</span>
      <button className="popup-button__button" onClick={onClick}>
        Close
      </button>
    </div>,
    document.body,
  )
}
