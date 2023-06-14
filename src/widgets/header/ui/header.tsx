import "./header.css"
import { HeaderSearch } from "../../../shared/ui/doubleSearch/headerSearch"
import { Profile } from "../../profile/ui/profile"

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
      style={{
        justifyContent: "space-between",
        fontSize: "16px",
        fontWeight: "bold",
        padding: "0 10px",
      }}
    >
      <Profile />
      УрФУ Навигатор
    </div>
  )
}
