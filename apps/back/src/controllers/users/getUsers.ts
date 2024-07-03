const getUsers = async (req: Request, res: Response) => {
  const user = {
    firstName: "test",
    lastName: "test",
  };

  return `${user.firstName} ${user.lastName} is a user`;
};

export default getUsers;
