import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useUser from "../../../hooks/useUser";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(false);
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserStatus = async () => {
      try {
        // Fetch the user status based on email from the backend API
        const response = await axiosPublic.get(
          `/api/users?email=${user?.email}`
        );

        // Assuming the backend returns the user status as a boolean field named 'isOnline'
        setIsOnline(response.data.isOnline);
      } catch (error) {
        console.error("Error fetching user status:", error);
      }
    };

    fetchUserStatus(); // Fetch initial user status

    // Set up polling to periodically fetch user status
    const intervalId = setInterval(fetchUserStatus, 5000); // Fetch status every 5 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [axiosPublic, user?.email]);

  return (
    <div>
      {isOnline === true ? (
        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
          <h2 className="text-sm font-normal text-emerald-500">Active</h2>
        </div>
      ) : (
        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
          <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
          <h2 className="text-sm font-normal text-red-500">Offline</h2>
        </div>
      )}
    </div>
  );
};

export default OnlineStatus;
