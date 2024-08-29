import Image from "next/image";
import { signout } from "./logout/action";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello world</h1>
      <form action={signout}>
      <button type="submit" className="bg-slate-500">sign out</button>
      </form>
      
    </main>
  );
}
