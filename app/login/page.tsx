import { login, signup } from "./actions"

export default function LoginPage() {
  return (
    <form className="items-center grid">
      <label htmlFor="email" className="bg-slate-500">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required className="text-black"/>
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
  )
}