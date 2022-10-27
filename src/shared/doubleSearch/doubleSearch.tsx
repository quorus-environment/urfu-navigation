import { OrdinarySearch } from "../ordinarySearch/ordinarySearch"
import "./doubleSearch.css"
import { MenuToggle } from "../ui/menu-toggle/menu-toggle"
import { Exit } from "../ui/exit/exit"
export const DoubleSearch = () => {
  return (
    <div className="double-search">
      <div className="search__body">
        <div className="search__menu">
          <MenuToggle />
        </div>
        <div className="search__inner">
          <OrdinarySearch />
        </div>
        <div className="search__inner">
          <OrdinarySearch />
        </div>
        <Exit color="#9D9B98" />
      </div>
    </div>
  )
}
