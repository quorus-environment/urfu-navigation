import "./header.css"
import { HeaderSearch } from "../../../shared/ui/doubleSearch/headerSearch"

export const Header = () => {
  return (
    <div className="header">
      <HeaderSearch />
    </div>
  )
}

export const MainPageHeader = () => {
  return (
    <div className="header" style={{ justifyContent: "center" }}>
      УрФУ Навигатор
    </div>
  )
}
