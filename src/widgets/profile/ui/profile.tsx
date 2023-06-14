import { create } from "zustand"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { persist } from "zustand/middleware"

type UserData = {
  id: string
  login: string
  client_id: string
  display_name: string
  real_name: string
  first_name: string
  last_name: string
  sex: string
  default_email: string
  birthday: string
  default_avatar_id: string
  is_avatar_empty: boolean
  default_phone: {
    id: number
    number: string
  }
}

type UserStore = {
  user: null | UserData
  token: null | string
  setUser: (user: UserData) => void
  setToken: (token: string | null) => void
}

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      user: null,
      setUser: (user: UserData) => set({ user }),
      token: null,
      setToken: (token: string | null) => set({ token }),
    }),
    { name: "234" },
  ),
)

export const Profile = () => {
  const { user, token, setUser } = useUserStore()
  const navigate = useNavigate()
  useEffect(() => {
    if (token) {
      axios
        .get<UserData>(`${window.location.origin}:8000/oauth/user/${token}`)
        .then((data) => setUser(data.data))
    }
  }, [setUser, token])
  if (!token) {
    return (
      <button onClick={() => navigate("/sign-in")}>Login through Yandex</button>
    )
  }
  if (user) {
    return <div>{user.real_name}</div>
  }
  return <>Авторизованы но нет данных</>
}
