import { OrdinarySearch } from "../ordinarySearch/ordinarySearch"
import "./doubleSearch.css"
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
        <div className="search__inner">
          <OrdinarySearch name={nameFirst} />
        </div>
        <div className="search__inner">
          <OrdinarySearch name={nameSecond} />
        </div>
      </div>
    </div>
  )
}
