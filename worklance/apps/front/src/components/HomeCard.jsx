import { Card, CardBody, CardHeader } from "@nextui-org/react"

const HomeCard = ({ message }) => (
  <Card>
    <CardHeader>
      <h2 className="text-yellow-500">Hackathon has started</h2>
    </CardHeader>
    <CardBody>
      <p>Message: {message.data}</p>
    </CardBody>
  </Card>
)

export default HomeCard
