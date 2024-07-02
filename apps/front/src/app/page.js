import { api } from "@hackathon/api"
import { Card, CardBody, CardHeader } from "@nextui-org/react"

export default async function Home() {
  const message = await api.index.get()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card>
        <CardHeader>
          <h2 className="text-yellow-500">Hackathon has started</h2>
        </CardHeader>
        <CardBody>
          <p>Message: {message.data}</p>
        </CardBody>
      </Card>
    </main>
  )
}
