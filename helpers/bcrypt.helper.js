import bcrypt from 'bcrypt';
const saltRounds = 10;

export const hashedPassword = plainText => {
    const hashedPassword = bcrypt.hashSync(plainText, saltRounds);
    return hashedPassword;
}

const comparePassword = (plainText, hashPassword) => {
    return bcrypt.compareSync(plainText, hashPassword);
}