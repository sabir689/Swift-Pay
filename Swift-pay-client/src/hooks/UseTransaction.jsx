import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import axios from "axios";

const UseTransaction = () => {
  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
  });
  const { user } = UseAuth();
  const { refetch, data: order = [] } = useQuery({
    queryKey: ["order", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/order?email=${user.email}`);
      return res.data;
    },
  });

  return [order, refetch];
};

export default UseTransaction;
