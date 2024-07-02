import { User } from "../../db/schemas/userSchema"

const getUsers = async (req: Request, res: Response) => {
  const user: User = {
    firstName: "test",
    lastName: "test"
  }

  return `${user.firstName} ${user.lastName} is a user`
}

export default getUsers
