import "./header.css"
import { DoubleSearch } from "../../../shared/doubleSearch/doubleSearch"

export const Header = () => {
  return (
    <div className="header">
      <DoubleSearch
        nameFirst="Аудитория или название места"
        nameSecond="Аудитория или название места"
      />
    </div>
  )
}
