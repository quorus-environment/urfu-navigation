import React, { useMemo } from "react"
import styles from "./auditoriumEditor.module.css"
import { useSearchParams } from "react-router-dom"
import { useIritRtfEntities } from "../../pages/universities/irit-rtf/use-irit-rtf-entities"

const AuditoriumEditor = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { everyFloorAuds } = useIritRtfEntities()
  console.log(searchParams.get("id"))
  const auditoriumEdited = useMemo(
    () => everyFloorAuds.find((el) => el.name === searchParams.get("id")),
    [everyFloorAuds, searchParams],
  )
  console.log(auditoriumEdited)
  return (
    <div className={styles.body}>
      <ul className={styles.config}>
        <li>
          <span>Название: </span>
          {auditoriumEdited?.name}
        </li>
        <li>
          <span>Координаты: </span> {JSON.stringify(auditoriumEdited?.coords)}
        </li>
        <li>
          <span>Этаж: </span>
          {auditoriumEdited?.floor}
        </li>
        <li>
          <span>Секция: </span>
          {auditoriumEdited?.section}
        </li>
      </ul>
      <div className={styles.btn}>Изменить</div>
    </div>
  )
}

export default AuditoriumEditor
