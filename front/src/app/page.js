import { Card, CardBody, CardHeader } from "@nextui-org/react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card>
        <CardHeader>
          <h2 className="text-yellow-500">Hackathon has started</h2>
        </CardHeader>
        <CardBody>
          <p>Good luck everyone</p>
        </CardBody>
      </Card>
    </main>
  )
}
