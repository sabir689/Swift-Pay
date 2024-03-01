import { useQuery } from '@tanstack/react-query'
import axiosSecure from './axiosSecure'
const UseOrderTrack = async(orderId) => {
    const { refetch, isPending, error, data } = useQuery({
        queryKey: ['orderTacking'],
        queryFn: async () => {
          await axiosSecure.get(`/order-tracking/${orderId}`)
          return
        }
      })
      return [refetch, isPending, error, data ]
}
export default UseOrderTrack