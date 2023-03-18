import React, { useMemo, FC, SyntheticEvent } from "react"
import styles from "./auditoriumEditor.module.css"
import { useSearchParams } from "react-router-dom"
import { useIritRtfEntities } from "../../pages/universities/irit-rtf/use-irit-rtf-entities"
import { useModalStore } from "../stores/admin/lib/use-modal-store"

type TAuditoriumEditor = {
  children?: React.ReactNode
}

const AuditoriumEditor: FC<TAuditoriumEditor> = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { checkerSeen, setCheckerSeen, setExitAllowed, exitAllowed } =
    useModalStore()
  const { everyFloorAuds } = useIritRtfEntities()
  const auditoriumEdited = useMemo(
    () => everyFloorAuds.find((el) => el.name === searchParams.get("id")),
    [everyFloorAuds, searchParams],
  )
  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    setExitAllowed(false)
  }
  return (
    <div className={styles.body}>
      <form onSubmit={onSubmit} className={styles.config}>
        <div>
          <span>Название: </span>
          {auditoriumEdited?.name}
        </div>
        <div>
          <span>Координаты: </span>{" "}
          {JSON.stringify(auditoriumEdited?.coords, null, "\t")}
        </div>
        <div>
          <span>Этаж: </span>
          {auditoriumEdited?.floor}
        </div>
        <div>
          <span>Секция: </span>
          {auditoriumEdited?.section}
        </div>
        <button inputMode="text" type="submit" className={styles.btn}>
          Изменить
        </button>
      </form>
    </div>
  )
}

export default AuditoriumEditor
