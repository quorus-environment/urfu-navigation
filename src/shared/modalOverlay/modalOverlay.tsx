import React, { FC } from "react"
import styles from "./modalOverlay.module.css"

type TModalOverlay = {
  handleClose: () => void
}
const ModalOverlay: FC<TModalOverlay> = ({ handleClose }) => {
  return <div className={styles.overlay} onClick={handleClose}></div>
}

export default ModalOverlay
