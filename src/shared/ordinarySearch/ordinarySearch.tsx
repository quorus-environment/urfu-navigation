import "./ordinarySearch.css"
import Lens from "../assets/Vector.svg"
import { TAuditorium } from "../../entities/auditorium/model/interface"
import { Side } from "../model/geometry"
import { useState } from "react"

const auditoriumsConfig: TAuditorium[] = [
  // для теста здесь
  {
    name: "РИ-101",
    height: 200,
    width: 150,
    coords: { x: 350, y: 250 },
    entry: Side.BOTTOM,
  },
  {
    name: "РИ-102",
    height: 200,
    width: 150,
    coords: { x: 500, y: 250 },
    entry: Side.BOTTOM,
  },
  {
    name: "РИ-103",
    height: 200,
    width: 150,
    coords: { x: 650, y: 250 },
    entry: Side.BOTTOM,
  },
  {
    name: "РИ-104",
    height: 200,
    width: 150,
    coords: { x: 800, y: 250 },
    entry: Side.BOTTOM,
  },
  {
    name: "РИ-105",
    height: 200,
    width: 150,
    coords: { x: 350, y: 500 },
    entry: Side.TOP,
  },
  {
    name: "РИ-106",
    height: 200,
    width: 150,
    coords: { x: 500, y: 500 },
    entry: Side.TOP,
  },
  {
    name: "РИ-107",
    height: 200,
    width: 150,
    coords: { x: 650, y: 500 },
    entry: Side.TOP,
  },
  {
    name: "РИ-108",
    height: 200,
    width: 150,
    coords: { x: 800, y: 500 },
    entry: Side.TOP,
  },
]
const auditoriumsNames = auditoriumsConfig.map((el) => el.name)
export function OrdinarySearch() {
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
          placeholder="Аудитория или название места"
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
