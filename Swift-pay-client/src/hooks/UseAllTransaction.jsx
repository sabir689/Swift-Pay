import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseAllTransaction = () => {
  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
  });

  const { refetch, data: orders = [] } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/order`);
      return res.data;
    },
  });
  return [orders, refetch];
};

export default UseAllTransaction;
