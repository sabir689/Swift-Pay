import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { useQuery } from "@tanstack/react-query"

const UseUserBilling = () => {
    const { user } = useContext(AuthContext)
    const { refetch, isPending, error, data } = useQuery({
      queryKey: ['userbilling', user?.email],
      queryFn: async () => {
        const res = await fetch(`http://localhost:5000/userBillingInfo?email=${user?.email}`)
        return res.json()
      }
    })
    return [refetch, isPending, error, data ]
}

export default UseUserBilling