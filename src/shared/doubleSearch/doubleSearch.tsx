import { OrdinarySearch } from "../ordinarySearch/ordinarySearch"
import "./doubleSearch.css"
import { MenuToggle } from "../ui/menu-toggle/menu-toggle"
import { Exit } from "../ui/exit/exit"
import { FC } from "react"

interface IDoubleSearchSearch {
  nameFirst: string
  nameSecond: string
}

export const DoubleSearch: FC<IDoubleSearchSearch> = ({
  nameFirst,
  nameSecond,
}) => {
  return (
    <div className="double-search">
      <div className="search__body">
        <div className="search__menu">
          <MenuToggle />
        </div>
        <div className="search__inner">
          <OrdinarySearch name={nameFirst} />
        </div>
        <div className="search__inner">
          <OrdinarySearch name={nameSecond} />
        </div>
        <Exit color="#9D9B98" />
      </div>
    </div>
  )
}
