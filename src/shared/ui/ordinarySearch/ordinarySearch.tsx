import "./ordinarySearch.css"
import Lens from "../../assets/Vector.svg"
import {
  FC,
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"

interface IOrdinarySearch {
  placeholder: string
  items: string[]
  value: string
  setValue: (v: string) => void
}

// Закрываем дропдаун при нажатии на любое пространство
const useAutocompleteClosingByRef = (setOpened: (v: boolean) => void) => {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const handler = (event: Event) => {
      if (!ref.current?.contains(event.target as Node)) {
        setOpened(false)
      }
    }
    document.addEventListener("click", handler)
    return () => {
      document.removeEventListener("click", handler)
    }
  })
  return ref
}

// Управление дропдауном через кнопочки как в дефолтном селекте
const useKeyboardManagement = (
  ref: MutableRefObject<HTMLDivElement | null>,
  filtered: string[],
  setInputValue: (v: string) => void,
  setOpenedBar: (v: boolean) => void,
) => {
  const [currentIndex, setCurrentIndex] = useState(-1)
  useEffect(() => {
    const current = ref.current
    const handler = (evt: KeyboardEventInit) => {
      if (evt.code === "ArrowUp") {
        if (currentIndex === -1) {
          setCurrentIndex(filtered.length - 1)
          return
        }
        setCurrentIndex(currentIndex - 1)
      }
      if (evt.code === "ArrowDown") {
        if (currentIndex === filtered.length - 1) {
          setCurrentIndex(0)
          return
        }
        setCurrentIndex(currentIndex + 1)
      }
      if (evt.code === "Enter") {
        setOpenedBar(false)
        if (currentIndex !== -1) {
          setInputValue(filtered[currentIndex])
        }
        setCurrentIndex(-1)
      }
    }
    current?.addEventListener("keydown", handler)
    return () => {
      current?.removeEventListener("keydown", handler)
    }
  }, [
    currentIndex,
    filtered,
    filtered.length,
    ref,
    setInputValue,
    setOpenedBar,
  ])
  return currentIndex
}

export const OrdinarySearch: FC<IOrdinarySearch> = ({
  placeholder,
  items,
  value,
  setValue,
}) => {
  const [isOpenedBar, setOpenedBar] = useState(true)

  // Закрытие модалки на клик извне
  const ref = useAutocompleteClosingByRef(setOpenedBar)

  // Получаем текущие строки в выпадающее меню
  const filtered = useMemo(() => {
    if (!value) {
      return []
    }
    return items
      .filter((auditorium) =>
        auditorium.toLowerCase().includes(value.toLowerCase()),
      )
      .slice(0, 5)
  }, [items, value])

  // Выбор клавишами
  const currentIndex = useKeyboardManagement(
    ref,
    filtered,
    setValue,
    setOpenedBar,
  )

  const listItem = useMemo(() => {
    return filtered.map((name, index) => (
      <li
        key={index}
        className={`auto-complete__item ${
          currentIndex === index ? " hovered" : undefined
        }`}
        onClick={() => {
          setValue(name)
          setOpenedBar(false)
        }}
      >
        {name}
      </li>
    ))
  }, [currentIndex, filtered, setValue])

  return (
    <div className="body">
      <div
        className="searchbar"
        style={{
          borderRadius:
            isOpenedBar && filtered.length ? "15px 15px 0 0" : "15px",
        }}
        ref={ref}
      >
        <img className="lens" src={Lens} alt="" />
        <input
          className="search"
          type="text"
          placeholder={placeholder}
          value={value}
          onKeyDown={(e) => {
            e.stopPropagation()
          }}
          onChange={(event) => {
            setOpenedBar(true)
            setValue(event.target.value)
          }}
          onClick={() => setOpenedBar(true)}
        />
        {value && isOpenedBar && filtered.length ? (
          <ul className="auto-complete">{listItem}</ul>
        ) : null}
      </div>
    </div>
  )
}
