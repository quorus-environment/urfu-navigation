import { OrdinarySearch } from "../ordinarySearch/ordinarySearch"
import "./doubleSearch.css"
import { FC, useContext, useMemo } from "react"
import { ChosenContext } from "../providers/chosen-context/ui/chosen-provider"
import { useGraphContext } from "../providers/graph-context/lib/use-graph-context"
import { GraphDestination } from "../../entities/graph/model/interface"

interface IDoubleSearchSearch {
  nameFirst: string
  nameSecond: string
}

export const DoubleSearch: FC<IDoubleSearchSearch> = ({
  nameFirst,
  nameSecond,
}) => {
  const { startId, setStartId, endId, setEndId } = useContext(ChosenContext)
  const { graph } = useGraphContext()
  const graphIds = useMemo(() => {
    return graph
      .filter((g) => g.destination === GraphDestination.AUDITORIUM)
      .map((g) => g.id)
  }, [graph])
  return (
    <div className="double-search">
      <div className="search__body">
        <div className="search__inner">
          <OrdinarySearch
            value={startId || ""}
            setValue={setStartId}
            items={graphIds}
            placeholder={nameFirst}
          />
        </div>
        <div className="search__inner">
          <OrdinarySearch
            value={endId || ""}
            setValue={setEndId}
            items={graphIds}
            placeholder={nameSecond}
          />
        </div>
      </div>
    </div>
  )
}
