import React, { useMemo, FC, SyntheticEvent } from "react"
import styles from "./auditoriumEditor.module.css"
import { useSearchParams } from "react-router-dom"
import { useIritRtfEntities } from "../../pages/universities/irit-rtf/use-irit-rtf-entities"
import { useModalStore } from "../stores/admin/lib/use-modal-store"
import { TextField } from "@mui/material"
import { useForm } from "../utils/use-form"
import { OrdinarySearch } from "../ui/ordinarySearch/ordinarySearch"

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
  console.log(auditoriumEdited)
  const { values, handleChange } = useForm({
    name: auditoriumEdited?.name,
    coords: JSON.stringify(auditoriumEdited?.coords),
    floor: auditoriumEdited?.floor,
    section: auditoriumEdited?.section,
    destination: auditoriumEdited?.destination,
  })

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    setExitAllowed(false)
  }
  //todo: замапить инпуты
  return (
    <div className={styles.body}>
      {/*на сабмит пока меняем значение exitAllowed*/}
      <form onSubmit={onSubmit} className={styles.config}>
        <TextField
          name="name"
          onChange={handleChange}
          label="Название"
          variant="outlined"
          value={values.name}
          size="medium"
        />
        <TextField
          name="coords"
          onChange={handleChange}
          label="Координаты"
          variant="outlined"
          value={values.coords}
          size="medium"
        />
        <TextField
          name="destination"
          onChange={handleChange}
          label="Назначение"
          variant="outlined"
          value={values.destination}
          size="medium"
        />
        <TextField
          name="floor"
          onChange={handleChange}
          label="Этаж"
          variant="outlined"
          value={values.floor}
          size="medium"
        />
        <TextField
          name="section"
          onChange={handleChange}
          label="Секция"
          variant="outlined"
          value={values.section}
          size="medium"
        />
        <button inputMode="text" type="submit" className={styles.btn}>
          Изменить
        </button>
      </form>
    </div>
  )
}

export default AuditoriumEditor
