import React from "react"
import { createPortal } from "react-dom"
import "./popup-button.css"

export type ModalProps = {
  onClick: () => void
  isOpen: boolean
  message: string
}

export const PopupButton: React.FC<ModalProps> = ({
  onClick,
  isOpen,
  message,
}) => {
  if (!isOpen) {
    return null
  }
  return createPortal(
    <div className="popup-button" onClick={onClick}>
      <span className="popup-button__message">{message}</span>
    </div>,
    document.body,
  )
}
