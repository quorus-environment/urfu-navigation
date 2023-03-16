import React, { FC, useEffect } from "react"
import ModalOverlay from "../modalOverlay/modalOverlay"
import { createPortal } from "react-dom"
import styles from "./modal.module.css"
import { Exit } from "../ui/exit/exit"

//non-null assertion
const portal = document.getElementById("portal")!

type TModal = {
  children?: React.ReactNode
  handleClose: () => void
  title: string
}
const Modal: FC<TModal> = ({ children, handleClose, title }) => {
  useEffect(() => {
    const escClosing: any = (e: React.KeyboardEvent) =>
      e.key === "Escape" ? handleClose() : null
    document.body.addEventListener("keydown", escClosing)
    return () => document.body.removeEventListener("keydown", escClosing)
  }, [handleClose])
  return createPortal(
    <>
      <ModalOverlay handleClose={handleClose} />
      <div className={`${styles.modal}`}>
        <div className={styles.header}>
          <p>{title}</p>
          <Exit size={40} strokeWidth={0.5} onClick={handleClose} />
        </div>
        <div className={`${styles.body}`}>{children || ""}</div>
      </div>
    </>,
    portal,
  )
}

export default Modal
