import { api } from "../../../../packages/api"
import HomeCard from "../components/HomeCard"

export default async function Home() {
  const message = await api.index.get()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomeCard message={message} />
      <HomeCard message={message} />
      <HomeCard message={message} />
      <HomeCard message={message} />
      <HomeCard message={message} />
    </main>
  )
}
