import api from "../services/api";
import useSWR from "swr";

export function useAxios(url, options, optionsSWR) {
  const { data, error, mutate } = useSWR(
    url,
    async (url, options) => {
      const response = await api.get(url, options);

      return response.data;
    },
    optionsSWR
  );
  return { data, error, mutate };
}
