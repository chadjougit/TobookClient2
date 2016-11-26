// signup.interface.ts
export interface User {
  name: string;
  account: {
    email: string;
    confirm: string;
  }
}