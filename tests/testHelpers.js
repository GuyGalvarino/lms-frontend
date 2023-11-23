export const testSignedInUser = {
  userId: "0",
  name: "test user",
  email: "test@test.xyz",
  token: "asldklajlajslkasdj",
};

export let signedInUser;

export const setSignedInUser = (newValue) => {
  signedInUser = newValue;
};