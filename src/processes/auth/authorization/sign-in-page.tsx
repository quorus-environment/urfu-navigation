import { useNavigate } from "react-router-dom"
import { ChangeEvent, useState } from "react"

export const SignInPage = () => {
  const navigate = useNavigate()
  const onRegistrationClick = () => navigate("/register")
  const onResetPasswordClick = () => navigate("/forgot-password")

  const [emailValue, setEmailValue] = useState("")

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmailValue(e.target.value)

  const [passwordValue, setPasswordValue] = useState("")
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPasswordValue(e.target.value)

  return (
    <main>
      <div>
        <h1>Вход</h1>
        <input onChange={onEmailChange} value={emailValue} name="email" />
        <input
          onChange={onPasswordChange}
          value={passwordValue}
          name="password"
        />
        <button>Войти</button>
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
