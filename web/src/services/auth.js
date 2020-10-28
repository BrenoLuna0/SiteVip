import api from "../services/api";

export const onSignIn = async (codigo, senha) => {
  const result = await api
    .post("/login", {
      clieCpfCnpj: codigo,
      senha,
    })
    .then(function (response) {
      if (response.data) {
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("codigo", response.data.codigo);
        sessionStorage.setItem("cpfCnpj", codigo);
        return true;
      } else {
        return false;
      }
    })
    .catch(function (error) {
      return false;
    });

  return result;
};

export const onSignOut = () => {
  sessionStorage.removeItem("token");
};

export const isSignedIn = () => {
  const token = sessionStorage.getItem("token");

  return token !== null ? true : false;
};

export const getToken = () => {
  return sessionStorage.getItem("token");
};
