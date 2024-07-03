import generateSalt from "./generateSalt";
import hashPassword from "./hashPassword";

const generatePasswordAndSalt = async (rawPassword: string) => {
  const salt = generateSalt();
  const hashedPassword = await hashPassword(rawPassword, salt);

  return [hashedPassword, salt];
};

export default generatePasswordAndSalt;
