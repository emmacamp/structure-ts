export const createUserAdapter = (user: any) => ({
  id: user.data._id,
  name: user.data.name_user,
  email: user.data.dominio,
});
