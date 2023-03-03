const login = async (name) => {
  const key = process.env.REACT_APP_USER_API_KEY;
  const endpoint = `http://localhost:3100/api/users/username/${key}/${name}`;
  const user = await fetch(endpoint);
  const { data } = await user.json();
  return data;
};

export default { login };
