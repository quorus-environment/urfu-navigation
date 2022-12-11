import { FC, useState } from "react"
import "./chooseFloor.css"
import { NavLink } from "react-router-dom"

interface IChooseFloor {
  links: string[]
  size?: number
}
/**Component of choosing floors
 *
 * @links string[] - links an array of paths to pages with floors
 * @size number - a size of component
 * */
export const ChooseFloor: FC<IChooseFloor> = ({ links, size = 32 }) => {
  const [activeIndex, setActiveIndex] = useState(-1)
  const currentPath = window.location.pathname
  const floors = links.map((floor, index) => {
    const linkHandler = () => setActiveIndex(index)
    return (
      <NavLink
        style={{ width: size, height: size, fontSize: size * 0.6 }}
        to={floor}
        key={index}
        className={
          activeIndex === index || currentPath === floor
            ? "floor active-link"
            : "floor"
        }
        onClick={linkHandler}
      >
        {index}
      </NavLink>
    )
  })
  return <div className="floors-container">{floors}</div>
}
