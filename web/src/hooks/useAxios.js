import api from "../services/api";
import useSWR from "swr";

export function useAxios(url, options) {
  const { data, error, mutate } = useSWR(
    url,
    async (url) => {
      const response = await api.get(url);

      return response.data;
    },
    {
      revalidateOnFocus: false,
    }
  );
  return { data, error, mutate };
}
