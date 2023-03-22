import React, { FC, InputHTMLAttributes } from "react"
import styles from "./input.module.css"

interface TInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const Input: FC<TInput> = ({ label, ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <input {...rest} className={styles.input} placeholder={" "} />
      <label className={styles.label}>{label}</label>
    </div>
  )
}
