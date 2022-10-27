import "./header.css"
import { OrdinarySearch } from "../../../shared/ordinarySearch/ordinarySearch"
import { DoubleSearch } from "../../../shared/doubleSearch/doubleSearch"

export const Header = () => {
  return (
    <div className="header">
      {/* <OrdinarySearch /> */}
      <DoubleSearch />
    </div>
  )
}
