import React, { FC, useEffect, useState } from "react"
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
  const [exitAllowed, setExitAllowed] = useState(true)
  const [checkerVisible, setCheckerVisible] = useState(false)

  useEffect(() => {
    const escClosing: any = (e: React.KeyboardEvent) =>
      e.key === "Escape" ? (!checkerVisible ? handleClose() : null) : null
    document.body.addEventListener("keydown", escClosing)
    return () => document.body.removeEventListener("keydown", escClosing)
  }, [handleClose, checkerVisible])

  const onClose = !checkerVisible ? handleClose : () => console.log("exit")
  return createPortal(
    <>
      <ModalOverlay handleClose={onClose} />
      <div className={`${styles.modal}`}>
        {!checkerVisible ? (
          <div className={styles.body}>
            <div className={styles.header}>
              <p>{title}</p>
              <Exit size={40} strokeWidth={0.5} onClick={onClose} />
            </div>
            <div className="">
              {React.cloneElement(children, {
                isExit: checkerVisible,
                setIsExit: setCheckerVisible,
              }) || ""}
            </div>
          </div>
        ) : (
          <div className={styles.checker}>
            <p className={styles.title}>
              Вы хотите выйти, оставив изменения без сохранения?
            </p>
            <button className={styles.btn} onClick={handleClose}>
              Выйти
            </button>
            <button
              className={styles.btn}
              style={{ marginLeft: 15 }}
              onClick={() => setCheckerVisible(false)}
            >
              Остаться
            </button>
          </div>
        )}
      </div>
    </>,
    portal,
  )
}

export default Modal
