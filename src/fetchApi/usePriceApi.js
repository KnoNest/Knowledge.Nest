import { setPrice } from "@/redux/priceSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const usePriceApi = () => {

  const dispatch = useDispatch()
  const getPrice = async () => {
    try {
      const res = await fetch('/api/class-price/get-price')
      
      const data = await res.json()
      if (data.error) {
        toast.error(data.error, "Something went wrong while getting class price"); 
        return
      }

      if (data) {
        dispatch(setPrice(data.classPrices))
      }
      
    } catch (error) {
      console.error('Error updating session:', error);
    }
  }

  

  return {
    getPrice
  }
}

export default usePriceApi;
