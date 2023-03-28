import { useNavigate } from "react-router-dom"
import { ChangeEvent, useRef, useState } from "react"

export const RegistrationPage = () => {
  const navigate = useNavigate()
  const onLoginClick = () => navigate("/login", { replace: true })

  const [inputValue, setInputValue] = useState("")
  const inputRef = useRef(null)

  const [emailValue, setEmailValue] = useState("")
  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmailValue(e.target.value)

  const [passwordValue, setPasswordValue] = useState("")
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPasswordValue(e.target.value)

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onRegistrationClick = () => {}
  return (
    <main>
      <div>
        <h1 className="text text_type_main-medium mb-6">Регистрация</h1>
        <input
          type="text"
          placeholder="Имя"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          name="name"
          ref={inputRef}
        />
        <input onChange={onEmailChange} value={emailValue} name="email" />
        <input
          onChange={onPasswordChange}
          value={passwordValue}
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
