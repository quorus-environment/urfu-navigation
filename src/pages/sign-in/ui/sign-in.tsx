import { useNavigate, useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { useUserStore } from "../../../widgets/profile/ui/profile"

export const SignIn = () => {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const { setToken } = useUserStore()

  useEffect(() => {
    if (!window.location.href.includes("code")) {
      window.location.href =
        "https://oauth.yandex.ru/authorize?response_type=code\n" +
        `&client_id=5e1d0e87a674494191d7a1c671d1311a&redirect_url=${window.location.origin}`
    } else {
      axios
        .get<{ token: { access_token: string } | null }>(
          `${window.location.origin}:8000/oauth/token/` + params.get("code"),
        )
        .then((data) => {
          setToken(data.data.token?.access_token || null)
          navigate("/")
        })
    }
  }, [navigate, params, setToken])

  return <div>12312312</div>
}
