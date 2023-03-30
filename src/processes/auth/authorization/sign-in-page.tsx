import { useNavigate } from "react-router-dom"
import { AuthService } from "../lib/auth-service"
import { useForm } from "../../../shared/utils/use-form"

type TSignInForm = {
  name: string
  email: string
  password: string
}

export const SignInPage = () => {
  const initialForm: TSignInForm = {
    name: "",
    email: "",
    password: "",
  }
  const { values, handleChange } = useForm<TSignInForm>(initialForm)
  const navigate = useNavigate()
  const onRegistrationClick = () => navigate("/register")
  const onResetPasswordClick = () => navigate("/forgot-password")

  const onLoginClick = () => {
    AuthService.signIn(values.email, values.name, values.password)
  }
  return (
    <main>
      <div>
        <h1>Вход</h1>
        <input onChange={handleChange} value={values.name} name="name" />
        <input onChange={handleChange} value={values.email} name="email" />
        <input
          onChange={handleChange}
          value={values.password}
          name="password"
        />
        <button onClick={onLoginClick}>Войти</button>
        <div>
          <div>
            <span>Вы&nbsp;&mdash; новый пользователь?</span>
            <button onClick={onRegistrationClick}>Зарегестрироваться</button>
          </div>
          <div>
            <span>Забыли пароль?</span>
            <button onClick={onResetPasswordClick}>Восстановить пароль</button>
          </div>
        </div>
      </div>
    </main>
  )
}
