import { useState } from "react"

//todo: затипизировать
export function useForm(inputValues: any) {
  const [values, setValues] = useState(inputValues)

  const handleChange = (event: any) => {
    const { value, name } = event.target
    setValues({ ...values, [name]: value })
  }
  return { values, handleChange, setValues }
}
