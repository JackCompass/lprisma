export const BAD_USER_INPUT = 'BAD_USER_INPUT';
export const badUserIdInputMessage = (id: number) => {
  return `User with Id ${id} does not exist in the database.`;
};
