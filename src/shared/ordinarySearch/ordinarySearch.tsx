import "./ordinarySearch.css"
import Lens from "../assets/Vector.svg"
import { FC, useState } from "react"

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

  const filtered = auditoriumsNames.filter((auditorium) =>
    auditorium.toLowerCase().includes(inputValue.toLowerCase()),
  )

  const [isOpenedBar, setOpenedBar] = useState(true)

  const listItem = filtered.map((name) => (
    <li
      key=""
      className="auto-complite__item"
      onClick={() => {
        setInputValue(name)
        setOpenedBar(!isOpenedBar)
      }}
    >
      {name}
    </li>
  ))

  return (
    <div className="body">
      <div className="searchbar">
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
          <ul className="auto-complite">
            {inputValue && isOpenedBar ? listItem : null}
          </ul>
        ) : null}
      </div>
    </div>
  )
}
