import React, { useMemo, FC, SyntheticEvent } from "react"
import styles from "./auditoriumEditor.module.css"
import { useSearchParams } from "react-router-dom"
import { useIritRtfEntities } from "../../pages/universities/irit-rtf/use-irit-rtf-entities"

type TAuditoriumEditor = {
  children?: React.ReactNode
  isExit?: boolean
  setIsExit: (v: boolean) => void
}

const AuditoriumEditor: FC<TAuditoriumEditor> = ({
  children,
  isExit,
  setIsExit,
}) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { everyFloorAuds } = useIritRtfEntities()
  const auditoriumEdited = useMemo(
    () => everyFloorAuds.find((el) => el.name === searchParams.get("id")),
    [everyFloorAuds, searchParams],
  )
  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    setIsExit(true)
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
