import { OrdinarySearch } from "../ordinarySearch/ordinarySearch"
import "./doubleSearch.css"
import { FC, useContext, useMemo } from "react"
import { ChosenContext } from "../../providers/chosen-context/ui/chosen-provider"
import { useGraphContext } from "../../providers/graph-context/lib/use-graph-context"
import { GraphDestination } from "../../../entities/graph/model/interface"

interface IDoubleSearchSearch {
  nameFirst: string
  nameSecond: string
}

export const HeaderSearch: FC<IDoubleSearchSearch> = ({ nameSecond }) => {
  const { endName, setEndName } = useContext(ChosenContext)
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
            value={endName || ""}
            setValue={setEndName}
            items={graphIds}
            placeholder={nameSecond}
          />
        </div>
      </div>
    </div>
  )
}
