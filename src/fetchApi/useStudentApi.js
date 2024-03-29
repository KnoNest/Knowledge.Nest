import { setUser } from "@/redux/userSlice";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const useStudentApi = () => {
    const dispatch = useDispatch()

    const signup = async (userData) => {
        try {
            const res = await fetch("/api/student/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });

            const data = await res.json()

            if (data.error) {
                toast.error(data.error || "Failed to sign up student");
            }
            toast.success("Sign up successfull")
            return data
        } catch (error) {
            console.error("Error signing up student:", error.message);
            throw error;
        }
    };

    const login = async (userData) => {
        try {
            const res = await fetch("/api/student/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });

            const data = await res.json()

            if (data.error) {
                toast.error(data.error || "Failed to login");
            }
            return data
        } catch (error) {
            console.error("Error signing up student:", error.message);
            throw error;
        }
    };

    const logout = async () => {

        try {
            await fetch(`/api/student/logout`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            // localStorage.setItem("user", "")
            dispatch(setUser(""))

        } catch (error) {
            toast.error(error.message || "Failed to update");
        }
    };
    const updateStudent = async (userData, id, avatar) => {
        const requestData = {
            ...userData,
            avatar
        }
        console.log()
        try {
            const res = await fetch(`/api/student/update-student/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(requestData)
            });

            const data = await res.json()

            if (data.error) {
                return toast.error(data.error || "Failed to update");
            }
            dispatch(setUser(data))
        } catch (error) {
            toast.error(error.message || "Failed to update");
        }
    };

    

    return {
        updateStudent,
        signup,
        login,
        logout
    };
};

export default useStudentApi;
