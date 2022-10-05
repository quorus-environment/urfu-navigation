import "./header.css"
import Lens from "./../../../shared/assets/Vector.svg"

export function Header() {
  return (
    <div className="header">
      <div className="header__searchbar">
        <img className="lens" src={Lens} alt="" />
        <input
          className="search"
          type="search"
          placeholder="Аудитория или название места"
        />
      </div>
    </div>
  )
}
