import { FC, ReactNode, SyntheticEvent, useMemo } from "react"
import styles from "./auditoriumEditor.module.css"
import { useSearchParams } from "react-router-dom"
import { useIritRtfEntities } from "../../pages/universities/irit-rtf/use-irit-rtf-entities"
import { useModalStore } from "../stores/admin/lib/use-modal-store"
import { TextField } from "@mui/material"
import { useForm } from "../utils/use-form"
import { OrdinarySearch } from "../ui/ordinarySearch/ordinarySearch"
import { IOption } from "../ui/dropdown/dropdown"
import {
  GraphDestination,
  SectionName,
} from "../../entities/graph/model/interface"

type TAuditoriumEditor = {
  children?: ReactNode
}

const AuditoriumEditor: FC<TAuditoriumEditor> = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { setExitAllowed } = useModalStore()
  const { everyFloorAuds } = useIritRtfEntities()
  const auditoriumEdited = useMemo(
    () => everyFloorAuds.find((el) => el.name === searchParams.get("id")),
    [everyFloorAuds, searchParams],
  )
  // console.log(auditoriumEdited)
  const { values, handleChange, setValue } = useForm<{
    name: string
    coords: string
    floor: number
    section: SectionName
    destination: GraphDestination
  }>({
    name: auditoriumEdited?.name || "",
    coords: JSON.stringify(auditoriumEdited?.coords),
    floor: auditoriumEdited?.floor || 0,
    section: auditoriumEdited?.section || SectionName.MAIN_SECTION1,
    destination: auditoriumEdited?.destination || GraphDestination.AUDITORIUM,
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
  // TODO: добавить валидацию
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
        <OrdinarySearch
          placeholder="Назначение"
          defaultValue={values.destination}
          items={graphDestinationOptions}
          onChange={(value) => setValue("destination", value)}
        />
        <OrdinarySearch
          placeholder="Этаж"
          defaultValue={`${values.floor}`}
          items={floorsOptions}
          onChange={(value) => setValue("floor", value)}
        />
        <OrdinarySearch
          placeholder="Секция"
          defaultValue={values.section}
          items={sectionNameOptions}
          onChange={(value) => setValue("section", value)}
        />
        <button
          inputMode="text"
          type="submit"
          className={styles.btn}
          onClick={() => console.log(values)}
        >
          Изменить
        </button>
      </form>
    </div>
  )
}

export default AuditoriumEditor
