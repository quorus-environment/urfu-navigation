import { useNavigate } from "react-router-dom"
import { AuthService } from "../lib/auth-service"
import { useForm } from "../../../shared/utils/use-form"

type TSignUpForm = {
  name: string
  email: string
  password: string
}

export const RegistrationPage = () => {
  const initialForm: TSignUpForm = {
    name: "",
    email: "",
    password: "",
  }
  const { values, handleChange } = useForm<TSignUpForm>(initialForm)

  const navigate = useNavigate()
  const onLoginClick = () => navigate("/login", { replace: true })

  const onRegistrationClick = () =>
    AuthService.signUp(values.email, values.name, values.password)

  return (
    <main>
      <div>
        <h1>Регистрация</h1>
        <input
          type="text"
          placeholder="Имя"
          onChange={handleChange}
          value={values.name}
          name="name"
        />
        <input onChange={handleChange} value={values.email} name="email" />
        <input
          onChange={handleChange}
          value={values.password}
          name="password"
        />
        <button onClick={onRegistrationClick}>Зарегистрироваться</button>
        <div>
          <div>
            <span>Уже зарегистрированы?</span>
            <button onClick={onLoginClick}>Войти</button>
          </div>
        </div>
      </div>
    </main>
  )
}
