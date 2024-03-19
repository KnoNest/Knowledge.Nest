import { setUser } from "@/redux/userSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const getUser = () => {

  const dispatch = useDispatch()
  const updateSession = async () => {
    try {
      const res = await fetch('/api/get-user',{ cache: 'no-store' }, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const data = await res.json()
      if (data.error) {
        toast.error(data.error, "Re login required"); 
        localStorage.setItem(user, "")
        return
      }
      localStorage.setItem("user", JSON.stringify(data.payload));
      
      
    } catch (error) {
      console.error('Error updating session:', error);
    }
  }

  const get_user = async (id) => {
    try {
      const res = await fetch(`/api/get-user/${id}`)
      const data = await res.json()
      if (data.error) {
       return toast.error(data.error); // Return statement removed
      }
      dispatch(setUser(data))
      return data; 
      
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }

  return {
    updateSession,
    get_user
  }
}

export default getUser;
