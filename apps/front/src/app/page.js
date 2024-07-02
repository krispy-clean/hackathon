import { api } from "@hackathon/api"
import HomeCard from "../components/HomeCard"

export default function Home() {
  const message = async () => await api.index.get()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomeCard message={message} />
    </main>
  )
}
