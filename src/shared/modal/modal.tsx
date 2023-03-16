import React, { FC } from "react"
import ModalOverlay from "../modal-overlay/modal-overlay"
import { createPortal } from "react-dom"
import styles from "./modal.module.css"

//non-null assertion
const portal = document.getElementById("portal")!

type TModal = {
  children?: React.ReactNode
  handleClose: () => void
}
const Modal: FC<TModal> = ({ children, handleClose }) => {
  return createPortal(
    <>
      <ModalOverlay handleClose={handleClose} />
      <div className={`${styles.modal}`}>
        <div className={styles.header}></div>
        <div className={`${styles.body}`}>{children || ""}</div>
      </div>
    </>,
    portal,
  )
}

export default Modal
