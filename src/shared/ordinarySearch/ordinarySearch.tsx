import "./ordinarySearch.css"
import Lens from "../assets/Vector.svg"
import { FC, useEffect, useMemo, useRef, useState } from "react"

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

export const OrdinarySearch: FC<IOrdinarySearch> = ({ name }) => {
  const [inputValue, setInputValue] = useState("")
  const [isOpenedBar, setOpenedBar] = useState(true)

  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handler = (event: Event) => {
      if (!ref.current?.contains(event.target as Node)) {
        setOpenedBar(false)
      }
    }
    document.addEventListener("click", handler)
    return () => {
      document.removeEventListener("click", handler)
    }
  })

  const filtered = useMemo(() => {
    return auditoriumsNames.filter((auditorium) =>
      auditorium.toLowerCase().includes(inputValue.toLowerCase()),
    )
  }, [inputValue])

  const listItem = useMemo(() => {
    return filtered.map((name, index) => (
      <li
        key={index}
        className="auto-complete__item"
        onClick={() => {
          setInputValue(name)
          setOpenedBar(false)
        }}
      >
        {name}
      </li>
    ))
  }, [filtered])

  return (
    <div className="body">
      <div className="searchbar" ref={ref}>
        <img className="lens" src={Lens} alt="" />
        <input
          className="search"
          type="text"
          placeholder={name}
          value={inputValue}
          onChange={(event) => {
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
