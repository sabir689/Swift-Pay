import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";

const useUser = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const { data: profile = [], refetch } = useQuery({
    queryKey: ["profile", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users?email=${user?.email}`);
      return res.data;
    },
  });

  const [prof] = profile;

  return [prof, refetch];
};

export default useUser;
