import React, { FC, useEffect } from "react"
import ModalOverlay from "../modalOverlay/modalOverlay"
import { createPortal } from "react-dom"
import styles from "./modal.module.css"
import { Exit } from "../ui/exit/exit"
import { useModalStore } from "../stores/admin/lib/use-modal-store"

//non-null assertion
const portal = document.getElementById("portal")!

type TModal = {
  children?: React.ReactNode
  handleClose: () => void
  title: string
}
const Modal: FC<TModal> = ({ children, handleClose, title }) => {
  const { checkerSeen, setCheckerSeen, exitAllowed, setExitAllowed } =
    useModalStore()
  useEffect(() => {
    const escClosing: any = (e: React.KeyboardEvent) =>
      e.key === "Escape"
        ? exitAllowed
          ? handleClose()
          : setCheckerSeen(true)
        : null
    document.body.addEventListener("keydown", escClosing)
    return () => document.body.removeEventListener("keydown", escClosing)
  }, [handleClose, exitAllowed])

  const onClose = exitAllowed ? handleClose : () => setCheckerSeen(true)
  const confirmExit = () => {
    setCheckerSeen(false)
    setExitAllowed(true)
    handleClose()
  }
  //todo: сделать hoc с конфирмацией для модалки для ее переиспользования либо оставить опциональность
  return createPortal(
    <>
      <ModalOverlay handleClose={onClose} />
      <div className={`${styles.modal}`}>
        {!checkerSeen ? (
          <div className={styles.body}>
            <div className={styles.header}>
              <p className={styles.title}>{title}</p>
              <Exit size={30} strokeWidth={0.5} onClick={onClose} />
            </div>
            <div>{children}</div>
          </div>
        ) : (
          <div className={styles.checker}>
            <p className={styles.checkerTitle}>Вы точно хотитите выйти?</p>
            <div className={styles.checkerButtons}>
              <button className={styles.btn} onClick={confirmExit}>
                Да
              </button>
              <button
                className={styles.btn}
                onClick={() => setCheckerSeen(false)}
              >
                Нет
              </button>
            </div>
          </div>
        )}
      </div>
    </>,
    portal,
  )
}

export default Modal
