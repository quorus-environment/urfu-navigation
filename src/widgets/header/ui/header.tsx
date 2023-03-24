import "./header.css"
import { HeaderSearch } from "./header-search/header-search"

export const Header = () => {
  return (
    <div className="header">
      <HeaderSearch />
    </div>
  )
}

export const MainPageHeader = () => {
  return (
    <div
      className="header"
      style={{ justifyContent: "center", fontSize: "16px", fontWeight: "bold" }}
    >
      УрФУ Навигатор
    </div>
  )
}
