import axios, { AxiosInstance } from "axios"
import sha256 from "crypto-js/sha256"

export const AuthInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080/",
})

export class AuthService {
  static async refresh() {
    return await AuthInstance.get("/refresh")
  }

  static async signUp(email: string, username: string, password: string) {
    return await AuthInstance.post<{ accessToken: string; id: string }>(
      "/sign-up",
      {
        email,
        password: sha256(password),
        username,
      },
    )
  }

  static async signIn(email: string, username: string, password: string) {
    return await AuthInstance.post("/sign-in", {
      email,
      password: sha256(password),
      username,
    })
  }
}
