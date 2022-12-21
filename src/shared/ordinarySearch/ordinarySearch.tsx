import "./ordinarySearch.css"
import Lens from "../assets/Vector.svg"
import {
  FC,
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"

const auditoriumsNames: string[] = [
  "РИ-101",
  "РИ-102",
  "РИ-103",
  "РИ-104",
  "РИ-105",
  "РИ-106",
  "РИ-107",
  "РИ-108",
  "РИ-114",
]

interface IOrdinarySearch {
  name: string
}

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
      console.log(evt.code)
      if (evt.code === "ArrowUp") {
        if (currentIndex === -1) {
          return
        }
        setCurrentIndex(currentIndex - 1)
      }
      if (evt.code === "ArrowDown") {
        if (currentIndex === filtered.length - 1) {
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

export const OrdinarySearch: FC<IOrdinarySearch> = ({ name }) => {
  const [inputValue, setInputValue] = useState("")
  const [isOpenedBar, setOpenedBar] = useState(true)

  // Закрытие модалки на клик извне
  const ref = useAutocompleteClosingByRef(setOpenedBar)

  // Получаем текущие строки в выпадающее меню
  const filtered = useMemo(() => {
    if (!inputValue) {
      return []
    }
    return auditoriumsNames
      .filter((auditorium) =>
        auditorium.toLowerCase().includes(inputValue.toLowerCase()),
      )
      .slice(0, 5)
  }, [inputValue])

  // Выбор клавишами
  const currentIndex = useKeyboardManagement(
    ref,
    filtered,
    setInputValue,
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
          setInputValue(name)
          setOpenedBar(false)
        }}
      >
        {name}
      </li>
    ))
  }, [currentIndex, filtered])

  return (
    <div className="body">
      <div className="searchbar" ref={ref}>
        <img className="lens" src={Lens} alt="" />
        <input
          className="search"
          type="text"
          placeholder={name}
          value={inputValue}
          onKeyDown={(e) => {
            e.stopPropagation()
          }}
          onChange={(event) => {
            setOpenedBar(true)
            setInputValue(event.target.value)
          }}
          onClick={() => setOpenedBar(true)}
        />
        {inputValue && isOpenedBar && filtered.length ? (
          <ul className="auto-complete">{listItem}</ul>
        ) : null}
      </div>
    </div>
  )
}
