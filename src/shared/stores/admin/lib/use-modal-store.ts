import { create } from "zustand"

type TModalStore = {
  exitAllowed: boolean
  setExitAllowed: (v: boolean) => void
  checkerSeen: boolean
  setCheckerSeen: (v: boolean) => void
}

export const useModalStore = create<TModalStore>()((set) => ({
  checkerSeen: false,
  exitAllowed: true,
  setCheckerSeen: (v: boolean) => set({ checkerSeen: v }),
  setExitAllowed: (v: boolean) => set({ exitAllowed: v }),
}))
