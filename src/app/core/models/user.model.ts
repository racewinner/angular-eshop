import { ResBase } from "./base.model"

export interface UserLogin {
  emailId: string,
  password: string
}

export interface UserRegister {
  userId: number,
  emailId: string,
  fullName: string,
  password: string
}

export interface AccountToken extends ResBase {
  token: string | undefined
}