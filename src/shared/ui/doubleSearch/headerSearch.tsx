import { OrdinarySearch } from "../ordinarySearch/ordinarySearch"
import "./doubleSearch.css"
import { useCallback, useMemo } from "react"
import { useGraphStore } from "../../stores/graph-context/lib/use-graph-store"
import { GraphDestination } from "../../../entities/graph/model/interface"
import { useChosenStore } from "../../stores/chosen/lib/use-chosen-store"

export enum Closest {
  ClosestManToilet = "closest_man_toilet",
  ClosestWomanToilet = "closest_woman_toilet",
}

export const HeaderSearch = () => {
  const { setStartId, setEndId, setStartName, setEndName, startName, endName } =
    useChosenStore()
  const { graph, setColoredGraph } = useGraphStore()
  const graphIds = useMemo(() => {
    return graph
      .filter((g) => g.destination === GraphDestination.AUDITORIUM)
      .map((g) => ({
        value: g.id,
        label: g.name,
      }))
  }, [graph])

  const onReset = useCallback(() => {
    setStartId(null)
    setEndId(null)
    setStartName(null)
    setEndName(null)
    setColoredGraph([])
  }, [setEndId, setEndName, setColoredGraph, setStartId, setStartName])

  return (
    <div className="double-search">
      <div className="search__body">
        <div onClick={onReset} className="search__body_reset">
          Сбросить
        </div>
        <div className="search__inner">
          <OrdinarySearch
            value={startName || ""}
            setId={setStartId}
            setValue={setStartName}
            items={graphIds}
            placeholder="Начальная точка"
          />
        </div>
        <div className="search__inner">
          <OrdinarySearch
            setId={setEndId}
            value={endName || ""}
            setValue={setEndName}
            items={[...graphIds]}
            preflightFields={[
              {
                label: "Найти ближайший женский туалет",
                value: Closest.ClosestWomanToilet,
              },
              {
                label: "Найти ближайший мужской туалет",
                value: Closest.ClosestManToilet,
              },
            ]}
            placeholder="Конечная точка"
          />
        </div>
      </div>
    </div>
  )
}
