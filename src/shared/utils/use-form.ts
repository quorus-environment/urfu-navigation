import { ChangeEvent, useState } from "react"

//todo: затипизировать
export function useForm<T extends object>(inputValues: T) {
  const [values, setValues] = useState<T>(inputValues)
  const setValue = (name: string, value: string): void =>
    setValues({ ...values, [name]: value })

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { value, name } = event.target
    setValues({ ...values, [name]: value })
  }
  return { values, handleChange, setValues, setValue }
}
