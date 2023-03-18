import { create } from "zustand"
import { TModalStore } from "../model/interface"

export const useModalStore = create<TModalStore>()((set) => ({
  checkerSeen: false,
  exitAllowed: true,
  setCheckerSeen: (v: boolean) => set({ checkerSeen: v }),
  setExitAllowed: (v: boolean) => set({ exitAllowed: v }),
}))
