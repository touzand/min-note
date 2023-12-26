export const handdleSignOut = async (func) => {
  try {
    await func();
  } catch (err) {
    console.log(err);
  }
};
