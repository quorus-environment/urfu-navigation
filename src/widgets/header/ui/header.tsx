import "./header.css"
import { HeaderSearch } from "../../../shared/ui/doubleSearch/headerSearch"

export const Header = () => {
  return (
    <div className="header">
      <HeaderSearch
        nameFirst="Аудитория или название места"
        nameSecond="Аудитория или название места"
      />
    </div>
  )
}
