import { create } from "zustand"
import { persist } from "zustand/middleware"
import { TChosenStore } from "../model/interface"

export const useChosenStore = create<TChosenStore>()(
  persist(
    (set) => ({
      startId: "Вход",
      setStartId: (v: string | null) => set({ startId: v }),
      floor: 1,
      setFloor: (v: number) => set({ floor: v }),
      endId: null,
      setEndId: (v: string | null) => set({ endId: v }),
      startName: "Вход",
      setStartName: (v: string | null) => set({ startName: v }),
      endName: null,
      setEndName: (v: string | null) => set({ endName: v }),
    }),
    { name: "chosen" },
  ),
)
