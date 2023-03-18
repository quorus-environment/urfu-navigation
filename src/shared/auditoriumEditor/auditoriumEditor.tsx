import React, { useMemo, FC, SyntheticEvent } from "react"
import styles from "./auditoriumEditor.module.css"
import { useSearchParams } from "react-router-dom"
import { useIritRtfEntities } from "../../pages/universities/irit-rtf/use-irit-rtf-entities"
import { useModalStore } from "../stores/admin/lib/use-modal-store"
import { TextField } from "@mui/material"

type TAuditoriumEditor = {
  children?: React.ReactNode
}

const AuditoriumEditor: FC<TAuditoriumEditor> = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { setExitAllowed } = useModalStore()
  const { everyFloorAuds } = useIritRtfEntities()
  const auditoriumEdited = useMemo(
    () => everyFloorAuds.find((el) => el.name === searchParams.get("id")),
    [everyFloorAuds, searchParams],
  )
  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    setExitAllowed(false)
  }
  //todo: замапить инпуты
  return (
    <div className={styles.body}>
      <form onSubmit={onSubmit} className={styles.config}>
        <TextField
          name="name"
          label="Название"
          variant="outlined"
          value={auditoriumEdited?.name}
        />
        <TextField
          name="coords"
          label="Координаты"
          variant="outlined"
          value={JSON.stringify(auditoriumEdited?.coords)}
        />
        <TextField
          name="floor"
          label="Этаж"
          variant="outlined"
          value={auditoriumEdited?.floor}
        />
        <TextField
          name="section"
          label="Секция"
          variant="outlined"
          value={auditoriumEdited?.section}
        />
        <button inputMode="text" type="submit" className={styles.btn}>
          Изменить
        </button>
      </form>
    </div>
  )
}

export default AuditoriumEditor
