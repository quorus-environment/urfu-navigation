import { FC, useEffect, useMemo, useState } from "react"
import "./chooseFloor.css"
import { useChosenStore } from "../../model/chosen/lib/use-chosen-store"

interface IFloorChosingProps {
  actions: { label: string; onClick: () => void }[]
  size?: number
}
/**Component of choosing floors
 *
 * @callbacks Array<() => void> - callbacks for changing floor
 * @size number - a size of component
 * */
export const FloorChosing: FC<IFloorChosingProps> = ({
  actions,
  size = 32,
}) => {
  const floor = useChosenStore((st) => st.floor)
  const [activeIndex, setActiveIndex] = useState(0)
  useEffect(() => {
    if (floor) {
      setActiveIndex(floor - 1)
    }
  }, [floor])
  const floors: JSX.Element[] = useMemo(
    () =>
      actions.map((action, index) => {
        const linkHandler = () => {
          action.onClick()
          setActiveIndex(index)
        }
        return (
          <div
            style={{
              width: size,
              height: size,
              fontSize: size * 0.6,
              left: 20,
            }}
            key={index}
            className={activeIndex === index ? "floor active-link" : "floor"}
            onClick={linkHandler}
          >
            {action.label}
          </div>
        )
      }),
    [actions, activeIndex, size],
  )
  return <div className="floors-container">{floors}</div>
}
