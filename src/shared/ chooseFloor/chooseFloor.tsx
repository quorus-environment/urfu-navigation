import { FC, useMemo, useState } from "react"
import "./chooseFloor.css"

interface IChooseFloor {
  actions: Array<() => void>
  size?: number
}
/**Component of choosing floors
 *
 * @callbacks Array<() => void> - callbacks for changing floor
 * @size number - a size of component
 * */
export const ChooseFloor: FC<IChooseFloor> = ({ actions, size = 32 }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const floors: JSX.Element[] = useMemo(
    () =>
      actions.map((callback, index) => {
        const linkHandler = () => {
          callback()
          setActiveIndex(index)
        }
        return (
          <div
            style={{ width: size, height: size, fontSize: size * 0.6 }}
            key={index}
            className={activeIndex === index ? "floor active-link" : "floor"}
            onClick={linkHandler}
          >
            {index}
          </div>
        )
      }),
    [actions, activeIndex, size],
  )
  return <div className="floors-container">{floors}</div>
}
