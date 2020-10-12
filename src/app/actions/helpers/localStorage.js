export const saveToken = (user, rememberPassword) => {
  if (!user || !user.token) return null;
  const [token1, token2, token3] = user.token.split(".");
  localStorage.setItem("token1", token1);
  localStorage.setItem("token2", token2);
  localStorage.setItem("token3", token3);
  localStorage.setItem("rememberPassword", rememberPassword);
};

export const clearToken = () => {
  localStorage.removeItem("token1");
  localStorage.removeItem("token2");
  localStorage.removeItem("token3");
  localStorage.removeItem("rememberPassword");
};

export const getToken = () => {
  const token1 = localStorage.getItem("token1");
  const token2 = localStorage.getItem("token2");
  const token3 = localStorage.getItem("token3");
  if (!token1 || !token2 || !token3) return null;
  return `${token1}.${token2}.${token3}`;
};

export const getHeaders = () => {
  return {
    headers: {
      authorization: `Bearer ${getToken()}`,
    },
  };
};
