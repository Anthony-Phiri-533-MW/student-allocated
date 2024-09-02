import { login, signup } from "./actions"
import imgSrc from "@/public/file.png";
import Image from "next/image";

export default function LoginPage() {
  return (
    <form className="items-center w-full grid pt-40">
      <div className="mx-auto">
        <Image src={imgSrc} alt="logo" height={150} width={150} />
      </div>

      <div className="mx-auto mb-9 grid">
        <label htmlFor="email" className="pr-9">Email:</label>
        <input id="email" name="email" type="email" required className="px-8 bg-slate-400" />
      </div>

      <div className="mx-auto mb-9 grid">
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required className="px-8 bg-slate-400" />
      </div>

      <div className="mx-auto grid">
        <button formAction={login} className="rounded-lg bg-slate-500 mb-2">Log in</button>
        <button formAction={signup} className="rounded-lg bg-slate-500">Sign up</button>
      </div>
    </form>
  )
}