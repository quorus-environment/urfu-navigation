import React, { useMemo, FC, SyntheticEvent } from "react"
import styles from "./auditoriumEditor.module.css"
import { useSearchParams } from "react-router-dom"
import { useIritRtfEntities } from "../../pages/universities/irit-rtf/use-irit-rtf-entities"
import { useModalStore } from "../stores/admin/lib/use-modal-store"
import { TextField } from "@mui/material"
import { useForm } from "../utils/use-form"
import { OrdinarySearch } from "../ui/ordinarySearch/ordinarySearch"
import Dropdown, { IOption } from "../ui/dropdown/dropdown"
import {
  GraphDestination,
  SectionName,
} from "../../entities/graph/model/interface"

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
  const graphDestinationKeys = Object.values(GraphDestination)
  const graphDestinationOptions: IOption[] = []
  // TODO разобраться с архитектурой
  graphDestinationKeys.forEach((key) => {
    const option: IOption = {
      value: key,
      label: key,
    }
    graphDestinationOptions.push(option)
  })

  const sectionNameKeys = Object.values(SectionName)
  const sectionNameOptions: IOption[] = []
  // TODO разобраться с архитектурой
  sectionNameKeys.forEach((key) => {
    const option: IOption = {
      value: key,
      label: key,
    }
    sectionNameOptions.push(option)
  })
  const floorsOptions: IOption[] = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
  ]
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
        <OrdinarySearch
          placeholder="placeholder"
          items={[{ value: "valueArr" }]}
          value="value"
          setValue={() => console.log("Привет")}
          setId={() => console.log("Привет для ID")}
        />
        <TextField
          name="coords"
          onChange={handleChange}
          label="Координаты"
          variant="outlined"
          value={values.coords}
          size="medium"
        />
        <Dropdown
          placeHolder={values.destination}
          options={graphDestinationOptions}
          isMulti={false}
          isSearchable={true}
          onChange={(value: any) => console.log(value)}
        />
        <TextField
          name="destination"
          onChange={handleChange}
          label="Назначение"
          variant="outlined"
          value={values.destination}
          size="medium"
        />
        <Dropdown
          placeHolder={values.floor}
          options={floorsOptions}
          isMulti={false}
          isSearchable={true}
          onChange={(value: any) => console.log(value)}
        />
        <TextField
          name="floor"
          onChange={handleChange}
          label="Этаж"
          variant="outlined"
          value={values.floor}
          size="medium"
        />
        <Dropdown
          placeHolder={values.section}
          options={sectionNameOptions}
          isMulti={false}
          isSearchable={true}
          onChange={(value: any) => console.log(value)}
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

// TODO вынести все секции в отдельный enum, чтобы их прокинуть в дропдаун

export default AuditoriumEditor
