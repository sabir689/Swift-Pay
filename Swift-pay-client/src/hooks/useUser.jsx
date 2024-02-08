import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
   const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const { data: profile = [], refetch } = useQuery({
      queryKey: ["profile", user?.email],
      queryFn: async () => {
        const res = await axiosPublic.get(`/api/users?email=${user.email}`);
        return res.data;
      },
    });

    const [profileInfo] = profile;
    
    return [profileInfo, refetch];
};

export default useUser;

