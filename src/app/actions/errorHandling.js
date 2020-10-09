export const errorHandling = (error) => {
  if (!error.response || !error.response.data) {
    return { status: 500, message: "Erro no servidor. Tente novamente!" };
  }
  if (error.response.data.message === "user does not exist") {
    return {
      status: 401,
      message: "Usuario não encontrado",
    };
  }

  if (error.response.status === 401) {
    return {
      status: 401,
      message: "Senha invalida",
    };
  }

  if (error.response.data.message) {
    return console.log(error.response);
  }
};
