import { create } from "zustand"
import { TChosenStore } from "../model/interface"
import { TAuditoriumReborn } from "../../../../entities/auditorium/model/interface"

export const useChosenStore = create<TChosenStore>()((set) => ({
  startId: null,
  setStartId: (v: string | null) => set({ startId: v }),
  floor: 1,
  setFloor: (v: number) => set({ floor: v }),
  endId: null,
  setEndId: (v: string | null) => set({ endId: v }),
  startName: "Вход",
  setStartName: (v: string | null) => set({ startName: v }),
  endName: "Вход",
  setEndName: (v: string | null) => set({ endName: v }),
  startAud: undefined,
  setStartAud: (v: TAuditoriumReborn) => set({ startAud: v }),
  endAud: undefined,
  setEndAud: (v: TAuditoriumReborn) => set({ endAud: v }),
}))
